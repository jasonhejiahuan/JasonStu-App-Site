import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-20T00:00:00Z");
  return [
    { url: "https://apps.jasonstu.cc/", lastModified, priority: 1 },
    { url: "https://apps.jasonstu.cc/linkscope", lastModified, priority: 0.9 },
    { url: "https://apps.jasonstu.cc/linkscope/privacy", lastModified, priority: 0.5 },
    { url: "https://apps.jasonstu.cc/linkscope/support", lastModified, priority: 0.6 },
  ];
}

