import type { MetadataRoute } from "next"
import { products as allProducts } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.respishop.co.in"

  // ✅ Existing static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // ✅ PRODUCTS
  const products = [
    "cpap-machine",
    "bipap-machine",
    "oxygen-concentrator",
  ]

  // 🔥 EXPANDED LOCATIONS (50+ cities)
  const locations = [
    "india",
    "bhubaneswar", "patna", "ranchi",
    "delhi", "mumbai", "kolkata", "chennai", "bangalore", "hyderabad",
    "pune", "ahmedabad", "jaipur", "lucknow", "kanpur",
    "nagpur", "indore", "bhopal", "visakhapatnam", "vadodara",
    "ludhiana", "agra", "nashik", "faridabad", "meerut",
    "rajkot", "varanasi", "srinagar", "aurangabad", "dhanbad",
    "amritsar", "allahabad", "howrah", "coimbatore",
    "jabalpur", "gwalior", "vijayawada", "jodhpur", "madurai",
    "raipur", "kota", "guwahati", "chandigarh", "solapur",
    "hubli", "tiruchirappalli", "bareilly", "mysore", "tiruppur"
  ]

  // ✅ SEO PAGES (150+ URLs)
  const seoPages = products.flatMap((product) =>
    locations.map((location) => ({
      url: `${baseUrl}/${product}/${location}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: location === "india" ? 1 : 0.8,
    }))
  )

  // ✅ PRODUCT PAGES
  const productPages = allProducts.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // ✅ CATEGORY PAGES
  const categories = [...new Set(allProducts.map((p) => p.category))]

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // ✅ BLOG PAGES
  const blogSlugs = [
    "best-cpap-machine-in-india",
    "cpap-machine-price-in-bhubaneswar",
    "oxygen-concentrator-price-in-india",
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // ✅ FINAL RETURN
  return [
    ...staticPages,
    ...seoPages,
    ...productPages,
    ...categoryPages,
    ...blogPages,
  ]
}