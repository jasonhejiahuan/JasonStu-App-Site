/** Cloudflare Worker entry point for the JasonStu Apps site. */
import handler from "vinext/server/app-router-entry";

interface AssetFetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const ROBOTS_PREVIEW_POLICY =
  "max-snippet:-1, max-image-preview:large, max-video-preview:-1";

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const response = await handler.fetch(request, env, ctx);

    if (!response.headers.get("content-type")?.toLowerCase().startsWith("text/html")) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", ROBOTS_PREVIEW_POLICY);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
