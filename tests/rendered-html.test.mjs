import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(pathname, environment = {}) {
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
      ...environment,
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routeCases = [
  ["/", /Independent apps/, "https://apps.jasonstu.cc"],
  ["/trackpad-wizard", /Make the surface visible/, "https://apps.jasonstu.cc/trackpad-wizard"],
  ["/trackpad-wizard/privacy", /Experiments stay on your Mac/, "https://apps.jasonstu.cc/trackpad-wizard/privacy"],
  ["/trackpad-wizard/support", /Support starts with what happened/, "https://apps.jasonstu.cc/trackpad-wizard/support"],
  ["/linkscope", /Inspect the wireless state macOS actually exposes/, "https://apps.jasonstu.cc/linkscope"],
  ["/linkscope/privacy", /keeps inspection local/, "https://apps.jasonstu.cc/linkscope/privacy"],
  ["/linkscope/support", /Support begins with reproducible evidence/, "https://apps.jasonstu.cc/linkscope/support"],
];

for (const [pathname, expected, canonical] of routeCases) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.equal(
      response.headers.get("x-robots-tag"),
      "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    );
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
    assert.match(html, /<main[^>]+id="main-content"/i);
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, />JasonStu<\/span><span>Apps<\/span>/);

    if (pathname === "/" || pathname === "/linkscope" || pathname === "/trackpad-wizard") {
      assert.match(html, /jasonstu-logo\.svg/);
      assert.match(html, /jasonstu-logo-dark\.png/);
    }

    if (pathname === "/") {
      assert.match(html, /href="\/trackpad-wizard"/);
      assert.match(html, /trackpad-wizard-icon-256\.webp/);
      assert.match(html, /macOS 26\+ \/ Public release/);
      assert.match(html, /href="\/linkscope"/);
    }

    if (pathname === "/trackpad-wizard") {
      assert.match(html, /https:\/\/apps\.jasonstu\.cc\/trackpad-wizard-overview\.png/);
      assert.doesNotMatch(html, /https:\/\/apps\.jasonstu\.cc\/og\.png/);
      assert.match(html, /One surface\. Six ways to understand it/);
      assert.match(html, /Touch Lab/);
      assert.match(html, /Gesture Studio/);
      assert.match(html, /Haptic Composer/);
      assert.match(html, /System mode/);
      assert.match(html, /Enhanced Mode/);
      assert.match(html, /Signed and notarized DMG/);
      assert.match(html, /Trackpad-Wizard-0\.3\.0-build-4\.dmg/);
      assert.match(html, /href="\/trackpad-wizard\/privacy"/);
      assert.match(html, /href="\/trackpad-wizard\/support"/);
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
  assert.equal(
    response.headers.get("x-robots-tag"),
    "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  );
  const html = await response.text();
  assert.match(html, /outside the collection/i);
  assert.match(html, /<meta name="robots" content="noindex"/i);
});

test("applies passive security headers without adding client analytics", async () => {
  const response = await render("/");
  assert.equal(
    response.headers.get("content-security-policy"),
    "base-uri 'self'; frame-ancestors 'none'; object-src 'none'",
  );
  assert.equal(response.headers.get("permissions-policy"), "camera=(), geolocation=(), microphone=(), payment=(), usb=()");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("cache-control"), "public, max-age=0, must-revalidate");
  assert.match(response.headers.get("cdn-cache-control") ?? "", /max-age=3600/);
  const html = await response.text();
  assert.doesNotMatch(html, /cloudflareinsights|beacon\.min\.js/i);
});

test("keeps the retained beta environment out of search indexes", async () => {
  const response = await render("/trackpad-wizard", { DEPLOYMENT_ENV: "beta" });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
  const html = await response.text();
  assert.match(html, /<link rel="canonical" href="https:\/\/apps\.jasonstu\.cc\/trackpad-wizard"/);

  const robots = await render("/robots.txt", { DEPLOYMENT_ENV: "beta" });
  assert.equal(robots.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
});

test("ships tiered browser-cache rules with the static assets", async () => {
  const headers = await readFile(new URL("../dist/client/_headers", import.meta.url), "utf8");
  assert.match(headers, /\/_next\/static\/\*/);
  assert.match(headers, /max-age=31536000, immutable/);
  assert.match(headers, /max-age=86400, stale-while-revalidate=604800/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
});

test("uses a compact Trackpad Wizard icon for the collection index", async () => {
  const icon = await stat(new URL("../dist/client/trackpad-wizard-icon-256.webp", import.meta.url));
  assert.ok(icon.size < 10_000, `expected compact icon, received ${icon.size} bytes`);
});

test("allows crawlers and advertises the canonical sitemap", async () => {
  const response = await render("/robots.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);
  assert.equal(response.headers.get("x-robots-tag"), null);
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
  assert.equal(response.headers.get("x-robots-tag"), null);
  const body = await response.text();
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [
    "https://apps.jasonstu.cc/",
    "https://apps.jasonstu.cc/trackpad-wizard",
    "https://apps.jasonstu.cc/trackpad-wizard/privacy",
    "https://apps.jasonstu.cc/trackpad-wizard/support",
    "https://apps.jasonstu.cc/linkscope",
    "https://apps.jasonstu.cc/linkscope/privacy",
    "https://apps.jasonstu.cc/linkscope/support",
  ]);
});
