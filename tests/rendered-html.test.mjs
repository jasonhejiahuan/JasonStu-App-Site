import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routeCases = [
  ["/", /Independent apps/, "https://apps.jasonstu.cc"],
  ["/linkscope", /Inspect the wireless state macOS actually exposes/, "https://apps.jasonstu.cc/linkscope"],
  ["/linkscope/privacy", /keeps inspection local/, "https://apps.jasonstu.cc/linkscope/privacy"],
  ["/linkscope/support", /Support begins with reproducible evidence/, "https://apps.jasonstu.cc/linkscope/support"],
];

for (const [pathname, expected, canonical] of routeCases) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
    assert.match(html, /<main[^>]+id="main-content"/i);
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, />JasonStu<\/span><span>Apps<\/span>/);

    if (pathname === "/" || pathname === "/linkscope") {
      assert.match(html, /jasonstu-logo\.svg/);
      assert.match(html, /jasonstu-logo-dark\.png/);
    }

    if (pathname === "/linkscope") {
      assert.match(html, /https:\/\/apps\.jasonstu\.cc\/linkscope-social\.png/);
      assert.doesNotMatch(html, /https:\/\/apps\.jasonstu\.cc\/og\.png/);
      assert.match(html, /Interactive reconstruction/);
      assert.match(html, /LinkScope application demonstration/);
      assert.match(html, /Explore a LinkScope device record/);
      assert.match(html, /Magic Trackpad/);
      assert.match(html, /Transport identities/);
      assert.match(html, /Raw Parameters/);
      assert.match(html, /History/);
      assert.match(html, /Each value keeps its source and availability/);
      assert.match(html, /Evidence changes without losing provenance/);
      assert.match(html, /Development testing is underway/);
      assert.match(html, /public\.corehid/);
      assert.match(html, /public\.iobluetooth/);
      assert.doesNotMatch(html, /Select a public provider lens/);
    }

    if (pathname.endsWith("/privacy") || pathname.endsWith("/support")) {
      assert.doesNotMatch(html, /property="og:image"/);
    }
  });
}

test("returns a real not-found response", async () => {
  const response = await render("/not-a-real-app");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /outside the collection/i);
});

test("allows crawlers and advertises the canonical sitemap", async () => {
  const response = await render("/robots.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);
  const body = await response.text();
  assert.match(body, /User-Agent: \*/i);
  assert.match(body, /Allow: \//i);
  assert.doesNotMatch(body, /Disallow:/i);
  assert.match(body, /Sitemap: https:\/\/apps\.jasonstu\.cc\/sitemap\.xml/i);
});

test("limits sitemap URLs to the canonical apps hostname", async () => {
  const response = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /xml/i);
  const body = await response.text();
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [
    "https://apps.jasonstu.cc/",
    "https://apps.jasonstu.cc/linkscope",
    "https://apps.jasonstu.cc/linkscope/privacy",
    "https://apps.jasonstu.cc/linkscope/support",
  ]);
});
