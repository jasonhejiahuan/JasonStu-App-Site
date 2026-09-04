/** Cloudflare Worker entry point for the JasonStu Apps site. */
import handler from "vinext/server/app-router-entry";

const ROBOTS_PREVIEW_POLICY =
  "max-snippet:-1, max-image-preview:large, max-video-preview:-1";
const BETA_ROBOTS_POLICY = "noindex, nofollow, noarchive";

const SECURITY_HEADERS = {
  "Content-Security-Policy": "base-uri 'self'; frame-ancestors 'none'; object-src 'none'",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
} as const;

const worker = {
  async fetch(
    request: Request,
    env: CloudflareEnv,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const response = await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);

    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(name, value);
    }

    const isHtml = headers.get("content-type")?.toLowerCase().startsWith("text/html");

    if (String(env.DEPLOYMENT_ENV) === "beta") {
      headers.set("X-Robots-Tag", BETA_ROBOTS_POLICY);
    } else if (isHtml) {
      headers.set("X-Robots-Tag", ROBOTS_PREVIEW_POLICY);
    }

    if (isHtml && !headers.has("Cache-Control")) {
      headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
} satisfies ExportedHandler<CloudflareEnv>;

export default worker;
