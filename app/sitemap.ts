import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://respishop.co.in",
      lastModified: new Date(),
    },
    {
      url: "https://respishop.co.in/products",
      lastModified: new Date(),
    },
    {
      url: "https://respishop.co.in/contact",
      lastModified: new Date(),
    },
  ];
}