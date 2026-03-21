import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://respishop.co.in"

  // ✅ Existing pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ]

  // ✅ SEO dynamic pages
  const products = [
    "cpap-machine",
    "bipap-machine",
    "oxygen-concentrator",
  ]

  const locations = [
    "india",
    "bhubaneswar",
    "ranchi",
    "patna",
  ]

  const seoPages = products.flatMap((product) =>
    locations.map((location) => ({
      url: `${baseUrl}/${product}/${location}`,
      lastModified: new Date(),
    }))
  )

  return [...staticPages, ...seoPages]
}