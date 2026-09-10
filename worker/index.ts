/** Cloudflare Worker entry point for the JasonStu Apps site. */
import handler from "vinext/server/app-router-entry";

const ROBOTS_PREVIEW_POLICY =
  "max-snippet:-1, max-image-preview:large, max-video-preview:-1";
const BETA_ROBOTS_POLICY = "noindex, nofollow, noarchive";
const CONTENT_SIGNAL_POLICY = "search=yes, ai-input=yes, ai-train=yes";
const MARKDOWN_CACHE_PARAMETER = "__jasonstu_representation";
const ROBOTS_TEXT = `User-Agent: *
Content-Signal: ${CONTENT_SIGNAL_POLICY}
Allow: /

Sitemap: https://apps.jasonstu.cc/sitemap.xml
`;

const SECURITY_HEADERS = {
  "Content-Security-Policy": "base-uri 'self'; frame-ancestors 'none'; object-src 'none'",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
} as const;

function acceptsMarkdown(accept: string | null): boolean {
  if (!accept) return false;

  return accept.split(",").some((range) => {
    const [mediaType, ...parameters] = range.trim().toLowerCase().split(";");
    if (mediaType !== "text/markdown") return false;

    const quality = parameters
      .map((parameter) => parameter.trim())
      .find((parameter) => parameter.startsWith("q="));
    if (!quality) return true;

    const value = Number(quality.slice(2));
    return Number.isFinite(value) && value > 0;
  });
}

function appendVary(headers: Headers, value: string): void {
  const values = (headers.get("Vary") ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (!values.some((entry) => entry.toLowerCase() === value.toLowerCase())) {
    values.push(value);
  }

  headers.set("Vary", values.join(", "));
}

function markdownCacheKey(request: Request): Request {
  const url = new URL(request.url);
  url.search = "";
  url.searchParams.set(MARKDOWN_CACHE_PARAMETER, "markdown");
  return new Request(url, { method: "GET" });
}

function availableCache(): Cache | null {
  return typeof caches === "undefined"
    ? null
    : (caches as unknown as { default: Cache }).default;
}

function estimateOriginalTokens(html: string): number {
  return Math.max(1, Math.ceil(new TextEncoder().encode(html).byteLength / 4));
}

async function toMarkdownResponse(
  source: Response,
  requestUrl: URL,
  env: CloudflareEnv,
): Promise<Response> {
  const html = await source.clone().text();
  const routeName =
    requestUrl.pathname === "/"
      ? "index"
      : requestUrl.pathname.slice(1).replaceAll("/", "-");
  const result = await env.AI.toMarkdown(
    {
      name: `${routeName}.html`,
      blob: new Blob([html], { type: "text/html" }),
    },
    {
      conversionOptions: {
        html: {
          cssSelector: "main",
          hostname: requestUrl.origin,
        },
      },
    },
  );

  if (result.format === "error") {
    throw new Error(result.error);
  }

  const headers = new Headers(source.headers);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Content-Signal", CONTENT_SIGNAL_POLICY);
  headers.set("X-Markdown-Tokens", String(result.tokens));
  headers.set("X-Original-Tokens", String(estimateOriginalTokens(html)));
  appendVary(headers, "Accept");

  for (const name of [
    "Content-Encoding",
    "Content-Length",
    "Content-Range",
    "ETag",
    "Last-Modified",
    "Transfer-Encoding",
  ]) {
    headers.delete(name);
  }

  return new Response(result.data, {
    status: source.status,
    statusText: source.statusText,
    headers,
  });
}

const worker = {
  async fetch(
    request: Request,
    env: CloudflareEnv,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);
    const wantsMarkdown =
      (request.method === "GET" || request.method === "HEAD") &&
      acceptsMarkdown(request.headers.get("Accept"));
    const servesRobots =
      url.pathname === "/robots.txt" &&
      (request.method === "GET" || request.method === "HEAD");
    const markdownCache = wantsMarkdown && request.method === "GET" ? availableCache() : null;
    const cacheKey = markdownCache ? markdownCacheKey(request) : null;
    let cachedMarkdown: Response | undefined;

    if (cacheKey && markdownCache) {
      try {
        cachedMarkdown = await markdownCache.match(cacheKey);
      } catch {
        // Cache availability must not affect either representation.
      }
    }

    if (cachedMarkdown) return cachedMarkdown;

    let response = servesRobots
      ? new Response(request.method === "HEAD" ? null : ROBOTS_TEXT, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
      : await handler.fetch(request, env, ctx);
    const sourceIsHtml = response.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("text/html") === true;

    if (wantsMarkdown && sourceIsHtml && response.ok) {
      if (request.method === "HEAD") {
        const headers = new Headers(response.headers);
        headers.set("Content-Type", "text/markdown; charset=utf-8");
        headers.set("Content-Signal", CONTENT_SIGNAL_POLICY);
        headers.delete("Content-Length");
        appendVary(headers, "Accept");
        response = new Response(null, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      } else {
        try {
          response = await toMarkdownResponse(response, url, env);
        } catch {
          // HTML is the complete fallback if the optional conversion service is unavailable.
        }
      }
    }

    const headers = new Headers(response.headers);

    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(name, value);
    }

    if (sourceIsHtml) appendVary(headers, "Accept");

    if (String(env.DEPLOYMENT_ENV) === "beta") {
      headers.set("X-Robots-Tag", BETA_ROBOTS_POLICY);
    } else if (sourceIsHtml) {
      headers.set("X-Robots-Tag", ROBOTS_PREVIEW_POLICY);
    }

    if (sourceIsHtml && !headers.has("Cache-Control")) {
      headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }

    const finalResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

    if (
      cacheKey &&
      markdownCache &&
      finalResponse.ok &&
      finalResponse.headers.get("Content-Type")?.startsWith("text/markdown")
    ) {
      ctx.waitUntil(
        markdownCache.put(cacheKey, finalResponse.clone()).catch(() => {
          // A failed cache write only makes the next request convert again.
        }),
      );
    }

    return finalResponse;
  },
} satisfies ExportedHandler<CloudflareEnv>;

export default worker;
