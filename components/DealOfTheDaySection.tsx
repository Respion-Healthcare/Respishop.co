"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const deals = [
  {
    id: 1,
    slug: "oxymed-portable-oxygen-concentrator",
    name: "Oxymed Portable Oxygen Concentrator",
    price: "₹139,690.00",
    oldPrice: "₹160,000.00",
    discount: "-13%",
    image: "/images/deal1.jpg",
  },
  {
    id: 2,
    slug: "oxymed-oxygen-concentrator-5lpm",
    name: "OxyMed Oxygen Concentrator Machine 5LPM",
    price: "₹34,900.00",
    oldPrice: "₹75,000.00",
    discount: "-53%",
    image: "/images/deal2.jpg",
  },
  {
    id: 3,
    slug: "oxymed-10ltr-oxygen-concentrator",
    name: "OxyMed 10 Ltr Oxygen Concentrator",
    price: "₹51,550.00",
    oldPrice: "₹85,000.00",
    discount: "-39%",
    image: "/images/deal3.jpg",
  },
  {
    id: 4,
    slug: "philips-everflo-oxygen-concentrator",
    name: "Philips EverFlo Home Oxygen (5 LPM)",
    price: "₹59,000.00",
    oldPrice: "₹68,000.00",
    discount: "-13%",
    image: "/images/deal4.webp",
  },
  {
    id: 5,
    slug: "resmed-airmini-f30-setup-pack",
    name: "Resmed AirMini F30 Setup Pack",
    price: "₹2,900.00",
    oldPrice: "₹5,000.00",
    discount: "-42%",
    image: "/images/deal5.webp",
  },
]

export default function DealOfTheDay() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState(36000)

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

              {deals.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="min-w-[280px]"
                >
                  <Link href={`/products/${item.slug}`}>

                    <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all relative">

                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                        {item.discount}
                      </span>

                      {/* ✅ IMAGE FIXED */}
                      <div className="mt-4 bg-gray-100 rounded-xl h-[200px] flex items-center justify-center overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className="flex items-center justify-center w-full h-full"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="object-contain max-h-[180px]"
                          />
                        </motion.div>
                      </div>

                      <h3 className="mt-4 text-sm font-semibold">
                        {item.name}
                      </h3>

                      <div className="flex gap-2 mt-2 items-center">
                        <span className="text-red-500 font-semibold">
                          {item.price}
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                          {item.oldPrice}
                        </span>
                      </div>

                    </div>

                  </Link>
                </motion.div>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-2/5 flex flex-col gap-6">

          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/products/resmed-airfit-n20-nasal-mask"
              className="flex justify-between items-center bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-6">

              <div>
                <p className="text-xs text-gray-600">CPAP MASKS</p>
                <h3 className="font-semibold">AirFit N20 Mask</h3>
                <p className="text-red-500 font-semibold">₹2,900</p>
              </div>

              <motion.div whileHover={{ rotate: 5 }} className="bg-white p-3 rounded-xl">
                <Image src="/images/banner1.webp" alt="" width={120} height={100} className="object-contain" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/products/resmed-airsense-10-autoset-tripack"
              className="flex justify-between items-center bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-6">

              <div>
                <p className="text-xs text-gray-600">CPAP MACHINES</p>
                <h3 className="font-semibold">AirSense 10</h3>
                <p className="text-red-500 font-semibold">₹49,900</p>
              </div>

              <motion.div whileHover={{ rotate: -5 }} className="bg-white p-3 rounded-xl">
                <Image src="/images/banner2.jpg" alt="" width={120} height={100} className="object-contain" />
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}