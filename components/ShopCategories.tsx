"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

const categories = [
  {
    name: "Sleep Apnea Machine",
    image: "/images/aboutus.webp",
    link: "/category/cpap-machine",
  },
  {
    name: "Face Mask",
    image: "/images/banner1.webp",
    link: "/category/face-mask",
  },
  {
    name: "CPAP Machines",
    image: "/images/sleep apnea.webp",
    link: "/category/cpap-machine",
  },
  {
    name: "Accessories",
    image: "/images/accessories.jpg",
    link: "/category/accessory",
  },
  {
    name: "Oxygen Concentrator",
    image: "/images/deal3.jpg",
    link: "/category/oxygen-concentrator",
  },
  {
    name: "Mask Pad and Clips",
    image: "/images/mask pad.webp",
    link: "/category/accessory",
  },
]

/* 🔥 Smooth + Premium Animation */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // ✅ FIXED
    },
  },
}

export default function ShopCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28">

        {/* 🔷 HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-blue-700 tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Precision-crafted solutions for better breathing and sleep care
          </p>
        </div>

        {/* 🔷 GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >

          {categories.map((cat, index) => (
            <motion.div key={index} variants={item}>
              <Link
                href={cat.link}
                className="group block rounded-2xl overflow-hidden"
              >

                {/* IMAGE CARD */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm">

                  {/* Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* 🔥 Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition" />

                  {/* TEXT */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium tracking-wide">
                      {cat.name}
                    </p>
                  </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  )
}