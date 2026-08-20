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

    if (pathname === "/linkscope") {
      assert.match(html, /https:\/\/apps\.jasonstu\.cc\/linkscope-social\.png/);
      assert.doesNotMatch(html, /https:\/\/apps\.jasonstu\.cc\/og\.png/);
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
