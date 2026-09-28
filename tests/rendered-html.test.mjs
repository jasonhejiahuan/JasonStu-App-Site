import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(pathname, environment = {}, request = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      method: request.method ?? "GET",
      headers: { accept: "text/html", ...request.headers },
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
  ["/trackpad-wizard", /A closer look at every touch/, "https://apps.jasonstu.cc/trackpad-wizard"],
  ["/trackpad-wizard/privacy", /Experiments stay on your Mac/, "https://apps.jasonstu.cc/trackpad-wizard/privacy"],
  ["/trackpad-wizard/support", /Trackpad Wizard support/, "https://apps.jasonstu.cc/trackpad-wizard/support"],
  ["/linkscope", /A clearer view of your Mac/, "https://apps.jasonstu.cc/linkscope"],
  ["/linkscope/privacy", /LinkScope Lite Privacy Policy/, "https://apps.jasonstu.cc/linkscope/privacy"],
  ["/linkscope/support", /LinkScope support/, "https://apps.jasonstu.cc/linkscope/support"],
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
    assert.match(html, /<main[^>]+tabindex="-1"/i);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1);
    assert.doesNotMatch(html, /class="eyebrow"|availability-number|scope-caption/);
    assert.match(html, /aria-label="Primary navigation"/);
    assert.match(html, /aria-label="Footer navigation"/);
    if (pathname.endsWith("/privacy") || pathname.endsWith("/support")) {
      assert.match(html, /aria-current="location"/);
      assert.doesNotMatch(html, /aria-current="page"/);
    } else if (pathname !== "/") {
      assert.match(html, /aria-current="page"/);
    }
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, />JasonStu<\/span><span>Apps<\/span>/);

    if (pathname === "/" || pathname === "/linkscope" || pathname === "/trackpad-wizard") {
      assert.match(html, /jasonstu-logo\.svg/);
      assert.match(html, /jasonstu-logo-dark\.png/);
    }

    if (pathname === "/") {
      assert.match(html, /href="\/trackpad-wizard"/);
      assert.match(html, /trackpad-wizard-icon-256\.webp/);
      assert.match(html, /Available for Mac · macOS 26\+/);
      assert.match(html, /href="\/linkscope"/);
      assert.match(html, /Free on the Mac App Store · macOS 15\+/);
    }

    if (pathname === "/trackpad-wizard") {
      assert.match(html, /https:\/\/apps\.jasonstu\.cc\/trackpad-wizard-overview\.png/);
      assert.doesNotMatch(html, /https:\/\/apps\.jasonstu\.cc\/og\.png/);
      assert.match(html, /The whole surface, in view/);
      assert.match(html, /Touch Lab/);
      assert.match(html, /Gesture Studio/);
      assert.match(html, /Haptic Composer/);
      assert.match(html, /System mode/);
      assert.match(html, /Enhanced Mode/);
      assert.match(html, /Version 0\.3\.0 \(Build 4\)/);
      assert.match(html, /Trackpad-Wizard-0\.3\.0-build-4\.dmg/);
      assert.match(html, /href="\/trackpad-wizard\/privacy"/);
      assert.match(html, /href="\/trackpad-wizard\/support"/);
    }

    if (pathname === "/linkscope") {
      assert.match(html, /https:\/\/apps\.jasonstu\.cc\/linkscope-social\.png/);
      assert.doesNotMatch(html, /https:\/\/apps\.jasonstu\.cc\/og\.png/);
      assert.match(html, /Download on the Mac App Store/);
      assert.match(html, /href="https:\/\/apps\.apple\.com\/app\/linkscope-lite\/id6802596955"/);
      assert.match(html, /Version 2\.0\.1/);
      assert.match(html, /Your readings\./);
      assert.match(html, /linkscope-dashboard-960\.webp 960w/);
      assert.match(html, /Not exposed by macOS/);
      assert.match(html, /href="\/linkscope\/support"/);
      assert.doesNotMatch(html, /Interactive reconstruction|Representative values|seven public sources/);
    }

    if (pathname === "/linkscope/privacy") {
      assert.match(html, /AES-256-GCM/);
      assert.match(html, /not encrypted by LinkScope/);
      assert.match(html, /30, 90, or 365 days/);
      assert.match(html, /older observation records only/);
      assert.match(html, /required for Bluetooth accessory inspection/);
    }

    if (pathname === "/" || pathname.startsWith("/linkscope")) {
      assert.doesNotMatch(html, /coming soon|download availability has not been confirmed/i);
    }

    if (pathname === "/linkscope/support") {
      assert.match(html, /LinkScope Lite 2\.0\.1 · Build 13/);
      assert.match(html, /Permissions and saved history/);
      assert.match(html, /Missing a device or reading/);
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
  assert.match(response.headers.get("vary") ?? "", /(?:^|,\s*)Accept(?:,|$)/i);
  const html = await response.text();
  assert.doesNotMatch(html, /cloudflareinsights|beacon\.min\.js/i);
});

test("negotiates a clean Markdown representation for agents", async () => {
  const calls = [];
  const response = await render(
    "/linkscope/privacy",
    {
      AI: {
        async toMarkdown(document, options) {
          calls.push({ document, options });
          return {
            id: "conversion-test",
            name: document.name,
            mimeType: "text/html",
            format: "markdown",
            tokens: 37,
            data: "# LinkScope Privacy\n\nLinkScope keeps inspection local.\n",
          };
        },
      },
    },
    { headers: { accept: "text/markdown" } },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/markdown\b/i);
  assert.match(response.headers.get("vary") ?? "", /(?:^|,\s*)Accept(?:,|$)/i);
  assert.equal(response.headers.get("content-signal"), "search=yes, ai-input=yes, ai-train=yes");
  assert.equal(response.headers.get("x-markdown-tokens"), "37");
  assert.match(response.headers.get("x-original-tokens") ?? "", /^\d+$/);
  assert.equal(
    response.headers.get("x-robots-tag"),
    "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  );
  assert.equal(await response.text(), "# LinkScope Privacy\n\nLinkScope keeps inspection local.\n");

  assert.equal(calls.length, 1);
  assert.equal(calls[0].document.name, "linkscope-privacy.html");
  assert.equal(calls[0].document.blob.type, "text/html");
  assert.match(await calls[0].document.blob.text(), /<main[^>]+id="main-content"/i);
  assert.deepEqual(calls[0].options.conversionOptions.html, {
    cssSelector: "main",
    hostname: "http://localhost",
  });
});

test("keeps HTML as the default and respects a rejected Markdown media range", async () => {
  const unavailableAi = {
    async toMarkdown() {
      throw new Error("Markdown conversion must not run");
    },
  };
  const defaultResponse = await render("/", { AI: unavailableAi });
  const rejectedResponse = await render(
    "/",
    { AI: unavailableAi },
    { headers: { accept: "text/markdown;q=0, text/html" } },
  );

  assert.match(defaultResponse.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(rejectedResponse.headers.get("content-type") ?? "", /^text\/html\b/i);
});

test("falls back to complete HTML when Markdown conversion is unavailable", async () => {
  const response = await render(
    "/trackpad-wizard/support",
    {
      AI: {
        async toMarkdown() {
          throw new Error("Temporary conversion failure");
        },
      },
    },
    { headers: { accept: "text/markdown" } },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(await response.text(), /Trackpad Wizard support/);
});

test("negotiates Markdown metadata for HEAD without invoking conversion", async () => {
  const response = await render(
    "/",
    {
      AI: {
        async toMarkdown() {
          throw new Error("HEAD must not invoke conversion");
        },
      },
    },
    { method: "HEAD", headers: { accept: "text/markdown" } },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/markdown\b/i);
  assert.equal(await response.text(), "");
});

test("keeps the retained beta environment out of search indexes", async () => {
  const response = await render("/trackpad-wizard", { DEPLOYMENT_ENV: "beta" });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
  const html = await response.text();
  assert.match(html, /<link rel="canonical" href="https:\/\/apps\.jasonstu\.cc\/trackpad-wizard"/);

  const robots = await render("/robots.txt", { DEPLOYMENT_ENV: "beta" });
  assert.equal(robots.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");

  const markdown = await render(
    "/linkscope",
    {
      DEPLOYMENT_ENV: "beta",
      AI: {
        async toMarkdown(document) {
          return {
            id: "conversion-beta-test",
            name: document.name,
            mimeType: "text/html",
            format: "markdown",
            tokens: 3,
            data: "# LinkScope\n",
          };
        },
      },
    },
    { headers: { accept: "text/markdown" } },
  );
  assert.equal(markdown.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
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

test("allows search, AI input, and AI training and advertises the canonical sitemap", async () => {
  const response = await render("/robots.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);
  assert.equal(response.headers.get("x-robots-tag"), null);
  const body = await response.text();
  assert.match(body, /User-Agent: \*/i);
  assert.match(
    body,
    /Content-Signal: search=yes, ai-input=yes, ai-train=yes/i,
  );
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
