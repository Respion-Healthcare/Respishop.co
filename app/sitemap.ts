import type { MetadataRoute } from "next"
import { products as allProducts } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://respishop.in"

  const currentDate = new Date()

  // ✅ STATIC PAGES
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // ✅ PRODUCTS + LOCATIONS (SEO PAGES)
  const products = [
    "cpap-machine",
    "bipap-machine",
    "oxygen-concentrator",
  ]

  const locations = [
    "india",
    "bangalore",
    "kolkata",
  ]

  const seoPages = products.flatMap((product) =>
    locations.map((location) => ({
      url: `${baseUrl}/${product}/${location}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
     priority: location === "india" ? 0.9 : 0.7,
    }))
  )

  // ✅ PRODUCT PAGES
  const productPages = allProducts.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // ✅ CATEGORY PAGES
  const categoryPages = ["mask", "accessory"].map((cat) => ({
  url: `${baseUrl}/category/${cat}`,
  lastModified: currentDate,
  changeFrequency: "weekly" as const,
  priority: 0.8,
}))

  // ✅ BLOG PAGES
const blogSlugs = [
  "best-cpap-machine-in-india",
  "cpap-machine-price-in-bhubaneswar",
  "oxygen-concentrator-price-in-india",
  "what-is-cpap-machine",
  "cpap-machine-price-in-india",
  "cpap-machine-side-effects-and-solutions",
  "resmed-airsense-10-vs-airsense-11",
  "bipap-machine-price-in-kolkata",
]

const blogPages = blogSlugs.map((slug) => ({
  url: `${baseUrl}/blog/${slug}`,
  lastModified: currentDate,
  changeFrequency: "monthly" as const,
  priority: 0.7,
}))

  // ✅ FINAL SITEMAP
  return [
    ...staticPages,
    ...seoPages,
    ...productPages,
    ...categoryPages,
    ...blogPages,
  ]
}