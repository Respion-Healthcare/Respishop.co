"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  ShieldCheck,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"
import { products as allProducts } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function DealOfTheDay() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [timeLeft, setTimeLeft] = useState(36000)

  /* -------------------------------- */
  /* PRODUCTS */
  /* -------------------------------- */

  const dealSlugs = [
    "oxymed-portable-oxygen-concentrator",
    "oxymed-oxygen-concentrator-5lpm",
    "oxymed-10ltr-oxygen-concentrator",
    "philips-everflo-oxygen-concentrator",
    "resmed-airmini-f30-setup-pack",
  ]

  const rightProducts = [
    "resmed-airfit-n20-nasal-mask",
    "resmed-airsense-10-autoset-tripack",
  ]

  /* -------------------------------- */
  /* TIMER */
  /* -------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0")

  const minutes = String(
    Math.floor((timeLeft % 3600) / 60)
  ).padStart(2, "0")

  const seconds = String(timeLeft % 60).padStart(2, "0")

  /* -------------------------------- */
  /* AUTO SLIDE */
  /* -------------------------------- */

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current

        const maxScrollLeft =
          container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          })
        } else {
          container.scrollBy({
            left: 320,
            behavior: "smooth",
          })
        }
      }
    }, 3500)

    return () => clearInterval(autoSlide)
  }, [])

  /* -------------------------------- */
  /* MANUAL SCROLL */
  /* -------------------------------- */

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-b from-[#f8fbff] via-[#eef6ff] to-[#f4f9ff]">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-200/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 blur-[140px] rounded-full" />

      <div className="relative z-10 px-6 lg:px-20">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">

          <div>

            <div className="flex items-center gap-2 mb-3">

              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1">
                <Flame size={14} />
                LIMITED TIME DEALS
              </span>

            </div>

            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
              Deals Of The Day
            </h2>

            <p className="mt-4 text-gray-600 text-base lg:text-lg max-w-3xl leading-relaxed">
              Discover premium CPAP, BiPAP, oxygen concentrators,
              masks, and respiratory healthcare equipment with
              exclusive limited-time pricing and fast delivery.
            </p>

          </div>

          {/* TIMER */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-2xl shadow-xl w-fit">

            <p className="text-xs uppercase tracking-widest opacity-80 mb-1">
              OFFER ENDS IN
            </p>

            <div className="text-3xl font-bold tracking-wider">
              {hours}:{minutes}:{seconds}
            </div>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.7fr_0.9fr] gap-8 items-start">

          {/* LEFT SLIDER */}
          <div className="relative rounded-[2.2rem] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-6 overflow-hidden">

            {/* TOP BAR */}
            <div className="flex items-center justify-between mb-6">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  className="text-blue-600"
                  size={20}
                />

                <p className="font-semibold text-gray-800">
                  Featured Respiratory Products
                </p>

              </div>

              {/* NAVIGATION */}
              <div className="flex gap-3">

                <button
                  onClick={() => scroll("left")}
                  className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            </div>

            {/* SLIDER */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
            >

              {dealSlugs.map((slug) => {
                const product = allProducts.find(
                  (p) => p.slug === slug
                )

                if (!product) return null

                const finalPrice =
                  getFinalPrice(product)

                return (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[300px]"
                  >

                    <Link
                      href={`/products/${product.category}/${product.slug}`}
                    >

                      <div className="group relative bg-white rounded-[2rem] p-5 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">

                        {/* OFFER */}
                        {product.offer && (
                          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium z-20">
                            {product.offer.type ===
                            "percentage"
                              ? `${product.offer.value}% OFF`
                              : `₹${product.offer.value} OFF`}
                          </span>
                        )}

                        {/* IMAGE */}
                        <div className="relative h-[240px] rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center overflow-hidden">

                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                          >

                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              width={220}
                              height={220}
                              className="object-contain"
                            />

                          </motion.div>

                        </div>

                        {/* CONTENT */}
                        <div className="mt-5">

                          <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold">
                            {product.category}
                          </p>

                          <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[56px]">
                            {product.name}
                          </h3>

                          {/* RATING */}
                          <div className="flex items-center gap-1 mt-3">

                            {[1, 2, 3, 4, 5].map(
                              (star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  className="fill-orange-400 stroke-orange-400"
                                />
                              )
                            )}

                            <span className="text-sm text-gray-500 ml-1">
                              (124)
                            </span>

                          </div>

                          {/* PRICE */}
                          <div className="flex items-center gap-3 mt-4 flex-wrap">

                            <span className="text-2xl font-bold text-blue-700">
                              ₹
                              {finalPrice.toLocaleString(
                                "en-IN"
                              )}
                            </span>

                            {product.offer && (
                              <span className="text-gray-400 line-through text-sm">
                                ₹
                                {product.price.toLocaleString(
                                  "en-IN"
                                )}
                              </span>
                            )}

                          </div>

                          {/* BUTTON */}
                          <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md">
                            View Product
                          </button>

                        </div>

                      </div>

                    </Link>

                  </motion.div>
                )
              })}

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col gap-6">

            {rightProducts.map((slug) => {

              const product = allProducts.find(
                (p) => p.slug === slug
              )

              if (!product) return null

              return (
                <motion.div
                  key={slug}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >

                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="group relative flex items-center justify-between gap-5 rounded-[2rem] bg-white/85 backdrop-blur-xl border border-white/60 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500 overflow-hidden"
                  >

                    {/* SIDE GLOW */}
                    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />

                    {/* CONTENT */}
                    <div className="flex-1 pl-3">

                      {/* CATEGORY */}
                      <span className="inline-flex bg-blue-100 text-blue-700 text-[11px] px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                        {product.category}
                      </span>

                      {/* NAME */}
                      <h3 className="mt-4 text-xl font-semibold leading-snug text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* RATING */}
                      <div className="flex items-center gap-1 mt-3">

                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={13}
                            className="fill-orange-400 stroke-orange-400"
                          />
                        ))}

                        <span className="text-sm text-gray-500 ml-1">
                          (96)
                        </span>

                      </div>

                      {/* PRICE */}
                      <div className="mt-4 flex items-center gap-3 flex-wrap">

                        <p className="text-3xl font-bold text-blue-700">
                          ₹
                          {getFinalPrice(
                            product
                          ).toLocaleString("en-IN")}
                        </p>

                        {product.offer && (
                          <span className="text-gray-400 line-through text-sm">
                            ₹
                            {product.price.toLocaleString(
                              "en-IN"
                            )}
                          </span>
                        )}

                      </div>

                      {/* BUTTON */}
                      <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md">
                        Shop Now
                      </button>

                    </div>

                    {/* IMAGE */}
                    <motion.div
                      whileHover={{
                        scale: 1.06,
                      }}
                      className="relative min-w-[130px] h-[130px] bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 shadow-md flex items-center justify-center"
                    >

                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={120}
                        height={120}
                        className="object-contain"
                      />

                    </motion.div>

                  </Link>

                </motion.div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}