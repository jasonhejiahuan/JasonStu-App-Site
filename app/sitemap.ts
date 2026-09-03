import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const collectionModified = new Date("2026-09-03T00:00:00Z");
  const linkScopeModified = new Date("2026-08-20T00:00:00Z");
  const trackpadWizardModified = new Date("2026-09-03T00:00:00Z");
  return [
    { url: "https://apps.jasonstu.cc/", lastModified: collectionModified, priority: 1 },
    { url: "https://apps.jasonstu.cc/trackpad-wizard", lastModified: trackpadWizardModified, priority: 0.9 },
    { url: "https://apps.jasonstu.cc/trackpad-wizard/privacy", lastModified: trackpadWizardModified, priority: 0.5 },
    { url: "https://apps.jasonstu.cc/trackpad-wizard/support", lastModified: trackpadWizardModified, priority: 0.6 },
    { url: "https://apps.jasonstu.cc/linkscope", lastModified: linkScopeModified, priority: 0.9 },
    { url: "https://apps.jasonstu.cc/linkscope/privacy", lastModified: linkScopeModified, priority: 0.5 },
    { url: "https://apps.jasonstu.cc/linkscope/support", lastModified: linkScopeModified, priority: 0.6 },
  ];
}
