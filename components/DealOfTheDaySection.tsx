"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { products as allProducts } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function DealOfTheDay() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState(36000)

  // ✅ ONLY SLUGS (NO DUPLICATE DATA)
  const dealSlugs = [
    "oxymed-portable-oxygen-concentrator",
    "oxymed-oxygen-concentrator-5lpm",
    "oxymed-10ltr-oxygen-concentrator",
    "philips-everflo-oxygen-concentrator",
    "resmed-airmini-f30-setup-pack",
  ]

  // ⏱ TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0")
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0")
  const seconds = String(timeLeft % 60).padStart(2, "0")

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current
        const maxScrollLeft =
          container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" })
        }
      }
    }, 3000)

    return () => clearInterval(autoSlide)
  }, [])

  // 👉 MANUAL SCROLL
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    })
  }

  return (
    <section className="w-full px-6 lg:px-20 py-16 bg-gray-50">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Daily Deals Of The Day</h2>

        <div className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm">
          {hours}:{minutes}:{seconds}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT SLIDER */}
        <div className="lg:w-3/5 bg-gradient-to-r from-blue-300 to-blue-200 rounded-3xl p-6">

          <div className="relative">

            <button onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10">
              <ChevronLeft />
            </button>

            <button onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10">
              <ChevronRight />
            </button>

            <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar">

              {dealSlugs.map((slug) => {
                const product = allProducts.find(p => p.slug === slug)
                if (!product) return null

                const finalPrice = getFinalPrice(product)

                return (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[280px]"
                  >
                    <Link href={`/products/${product.slug}`}>

                      <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all relative">

                        {/* ✅ DISCOUNT BADGE */}
                        {product.offer?.type === "percentage" && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                            {product.offer.value}% OFF
                          </span>
                        )}

                        {product.offer?.type === "flat" && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                            ₹{product.offer.value} OFF
                          </span>
                        )}

                        {/* IMAGE */}
                        <div className="mt-4 bg-gray-100 rounded-xl h-[200px] flex items-center justify-center overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            className="flex items-center justify-center w-full h-full"
                          >
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="object-contain max-h-[180px]"
                            />
                          </motion.div>
                        </div>

                        <h3 className="mt-4 text-sm font-semibold">
                          {product.name}
                        </h3>

                        {/* ✅ PRICE */}
                        <div className="flex gap-2 mt-2 items-center">
                         <span className="text-red-500 font-semibold">
  ₹{finalPrice.toLocaleString('en-IN')}
</span>

                          {product.offer && (
                            <span className="text-gray-400 line-through text-sm">
                              ₹{product.price.toLocaleString()}
                            </span>
                          )}
                        </div>

                      </div>

                    </Link>
                  </motion.div>
                )
              })}

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-2/5 flex flex-col gap-6">

          {["resmed-airfit-n20-nasal-mask", "resmed-airsense-10-autoset-tripack"].map((slug, i) => {
            const product = allProducts.find(p => p.slug === slug)
            if (!product) return null

            return (
              <motion.div key={slug} whileHover={{ scale: 1.02 }}>
                <Link href={`/products/${slug}`}
                  className="flex justify-between items-center bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-6">

                  <div>
                    <p className="text-xs text-gray-600">{product.category}</p>
                    <h3 className="font-semibold">{product.name}</h3>
                   <p className="text-lg font-bold text-blue-700">
  ₹{getFinalPrice(product).toLocaleString('en-IN')}
</p>
                  </div>

                  <motion.div whileHover={{ rotate: i === 0 ? 5 : -5 }} className="bg-white p-3 rounded-xl">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={120}
                      height={100}
                      className="object-contain"
                    />
                  </motion.div>

                </Link>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}