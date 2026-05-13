import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*/feed/",
          "/tag/",
          "/cart/",
          "/checkout/",
          "/my-account/",
          "/search/",
        ],
      },
    ],
    sitemap: "https://respishop.in/sitemap.xml",
    host: "https://respishop.in",
  };
}