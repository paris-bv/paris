import type { MetadataRoute } from "next";

// Pas dit aan naar het definitieve domein (gelijk aan siteUrl in layout.tsx).
const siteUrl = "https://www.paris-bv.nl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
