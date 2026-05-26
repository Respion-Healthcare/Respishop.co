"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

const categories = [
  {
    name: "CPAP",
    image: "/images/aboutus.webp",
    link: "/category/cpap",
  },
  {
    name: "BIPAP",
    image: "/images/sleep apnea.webp",
    link: "/category/bipap",
  },
  {
    name: "Mask",
    image: "/images/banner1.webp",
    link: "/category/mask",
  },
  {
    name: "Oxygen Concentrator",
    image: "/images/Oc/deal3.jpg",
    link: "/category/oxygen-concentrator",
  },
  {
    name: "Accessories",
    image: "/images/accessories.jpg",
    link: "/category/accessory",
  },
]

/* ---------- PREMIUM ANIMATION ---------- */
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function ShopCategories() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/70 to-white overflow-hidden">

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-16">

          <span className="inline-block bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Browse Categories
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif text-blue-700 tracking-tight">
            Shop by Category
          </h2>

          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            Explore premium respiratory care products designed for
            comfort, performance, and reliable therapy support.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-7"
        >

          {categories.map((cat, index) => (
            <motion.div key={index} variants={item}>

              <Link
                href={cat.link}
                className="group block rounded-3xl overflow-hidden"
              >

                {/* CARD */}
                <div className="relative h-52 lg:h-60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-white/40">

                  {/* IMAGE */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-black/20 to-transparent opacity-90 transition duration-500" />

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500" />

                  {/* TEXT */}
                  <div className="absolute bottom-5 left-5 right-5">

                    <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide">
                      {cat.name}
                    </h3>

                    <div className="mt-2 w-10 h-[3px] rounded-full bg-blue-400 group-hover:w-16 transition-all duration-500" />

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