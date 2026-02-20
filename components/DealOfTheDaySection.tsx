"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const deals = [
  {
    id: 1,
    name: "Oxymed Portable Oxygen Concentrator",
    price: "₹139,690.00",
    oldPrice: "₹160,000.00",
    discount: "-13%",
    image: "/images/deal1.jpg",
  },
  {
    id: 2,
    name: "OxyMed Oxygen Concentrator Machine 5LPM",
    price: "₹34,900.00",
    oldPrice: "₹75,000.00",
    discount: "-53%",
    image: "/images/deal2.jpg",
  },
  {
    id: 3,
    name: "OxyMed 10 Ltr Oxygen Concentrator",
    price: "₹51,550.00",
    oldPrice: "₹85,000.00",
    discount: "-39%",
    image: "/images/deal3.jpg",
  },
  {
    id: 4,
    name: "Philips EverFlo Home Oxygen (5 LPM)",
    price: "₹59,000.00",
    oldPrice: "₹68,000.00",
    discount: "-13%",
    image: "/images/deal4.webp",
  },
  {
    id: 5,
    name: "Resmed AirMini F30 Setup Pack",
    price: "₹2,900.00",
    oldPrice: "₹5,000.00",
    discount: "-42%",
    image: "/images/deal5.webp",
  },
]

export default function DealOfTheDay() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // COUNTDOWN
  const [timeLeft, setTimeLeft] = useState(36000)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0")
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0")
  const seconds = String(timeLeft % 60).padStart(2, "0")

  // AUTO SLIDE
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current
        const maxScrollLeft =
          container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollBy({ left: 600, behavior: "smooth" })
        }
      }
    }, 3000)

    return () => clearInterval(autoSlide)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full px-10 lg:px-20 py-20 bg-gray-50">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">
          Daily Deal Of The Day
        </h2>

        <div className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium">
          End in: {hours} : {minutes} : {seconds}
        </div>
      </div>

      {/* 60 : 40 Layout */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* LEFT 60% */}
        <div className="lg:w-3/5 bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-10">

          <div className="relative">

            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:scale-110 transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:scale-110 transition"
            >
              <ChevronRight size={18} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
            >
              {deals.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[calc(50%-16px)] h-[420px] bg-white rounded-2xl p-6 relative shadow-md hover:shadow-xl transition flex flex-col"
                >
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.discount}
                  </span>

                  <div className="border border-gray-200 rounded-xl p-4 h-[200px] flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={180}
                      height={180}
                      className="object-contain max-h-[160px]"
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="text-base font-semibold text-gray-800 mb-3 leading-snug">
                      {item.name}
                    </h2>

                    <div className="flex gap-2 items-center">
                      <span className="text-red-500 font-semibold text-base">
                        {item.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      {/* RIGHT 40% */}
<div className="lg:w-2/5 flex flex-col gap-12">

  {/* Banner 1 */}
  <div className="flex-1 bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-10 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-600 uppercase mb-2">
        CPAP MASKS
      </p>
      <h3 className="text-lg font-semibold mb-3">
        Resmed AirFit™ N20 Nasal Mask
      </h3>
      <p className="text-red-500 text-lg font-semibold mb-4">
        ₹2,900.00
      </p>
      <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
        Shop now
      </button>
    </div>

    <Image
      src="/image/P6.webp"   // ✅ Correct
      alt="banner1"
      width={150}
      height={130}
      className="object-contain"
    />
  </div>

  {/* Banner 2 */}
  <div className="flex-1 bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-10 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-600 uppercase mb-2">
        CPAP MACHINES
      </p>
      <h3 className="text-lg font-semibold mb-3">
        AirSense™ 10 Autoset Tripack
      </h3>
      <p className="text-red-500 text-lg font-semibold mb-4">
        ₹49,900.00
      </p>
      <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
        Shop now
      </button>
    </div>

    <Image
      src="/image/banner2.png"   // ✅ Make sure file exists in public/image
      alt="banner2"
      width={160}
      height={140}
      className="object-contain"
    />
  </div>

</div>
      </div>
    </section>
  )
}