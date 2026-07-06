import type { MetadataRoute } from "next";

// Pas dit aan naar het definitieve domein (gelijk aan siteUrl in layout.tsx).
const siteUrl = "https://paris-bv.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
