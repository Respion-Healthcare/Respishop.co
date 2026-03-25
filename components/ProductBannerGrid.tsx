import Link from "next/link"
import ProductBannerCard from "./ProductBannerCard"
import { products as allProducts } from "@/lib/products"

export default function ProductBannerGrid() {

  // ✅ ONLY KEEP SLUGS (NO DUPLICATE DATA)
  const bannerProducts = [
    "resmed-airfit-f20-full-face-mask",
    "resmed-lumis-100-vpap-st",
    "resmed-lumis-150-vpap-st",
    "airmini-autoset-cpap-device",
    "airsense-11-autoset-4g-tripack",
    "airsense-11-autoset-single-pack",
  ]

  return (
    <section className="w-full px-10 lg:px-20 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {bannerProducts.map((slug, index) => {
          
          // ✅ GET REAL PRODUCT
          const product = allProducts.find((p) => p.slug === slug)

          if (!product) return null

          return (
            <Link
              key={index}
              href={`/products/${slug}`}
              className="block"
            >
              <ProductBannerCard product={product} />
            </Link>
          )
        })}

      </div>
    </section>
  )
}