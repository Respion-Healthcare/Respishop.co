"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import ProductBannerCard from "./ProductBannerCard"
import { products as allProducts } from "@/lib/products"

/* ---------- ANIMATIONS ---------- */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function ProductBannerGrid() {
  const bannerProducts = [
  "resmed-airfit-f20-full-face-mask",
  "lumis-100-vpap-st",
  "resmed-lumis™-150",
  "airmini-autoset-cpap-device",
  "resmed-airsense-10-autoset-tripack",
  "airsense-11-autoset-single-pack",
]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-16 lg:py-24 bg-[#f5fbff] overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-10 lg:mb-16"
      >
        <span className="inline-block bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Featured Collection
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Featured Medical Equipment
        </h2>

        <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
          Explore our most trusted CPAP, BiPAP, and respiratory care products
          designed for reliability, comfort, and advanced performance.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
      >
        {bannerProducts.map((slug, index) => {
          const product = allProducts.find((p) => p.slug === slug)

          if (!product) return null

          return (
            <motion.div
              key={product.slug}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="will-change-transform"
            >
              <Link
                href={`/products/${product.category}/${product.slug}`}
                className="block h-full"
              >
                <ProductBannerCard product={product} />
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

    </section>
  )
}