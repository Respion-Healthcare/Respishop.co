import type { MetadataRoute } from "next"
import { products as allProducts } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.respishop.co.in"

  // ✅ Existing static pages
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

  // ✅ SEO dynamic pages (your existing logic)
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

  // ✅ PRODUCT PAGES (IMPORTANT)
  const productPages = allProducts.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
  }))

  // ✅ CATEGORY PAGES
  const categories = [...new Set(allProducts.map((p) => p.category))]

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
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