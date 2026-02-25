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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12 lg:py-20 bg-gray-50">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 text-center md:text-left">
          Daily Deals Of The Day
        </h2>

        <div className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium text-sm md:text-base">
          Ends in: {hours} : {minutes} : {seconds}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="lg:w-3/5 bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-6 md:p-10">

          <div className="relative">

            {/* Arrows Hidden on Mobile */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            >
              <ChevronRight size={18} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
            >
              {deals.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[85%] sm:w-[48%] h-[380px] bg-white rounded-2xl p-5 relative shadow-md flex flex-col"
                >
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.discount}
                  </span>

                  <div className="border border-gray-200 rounded-xl p-4 h-[180px] flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={160}
                      height={160}
                      className="object-contain max-h-[150px]"
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-3 leading-snug">
                      {item.name}
                    </h2>

                    <div className="flex gap-2 items-center">
                      <span className="text-red-500 font-semibold text-sm md:text-base">
                        {item.price}
                      </span>
                      <span className="text-gray-400 line-through text-xs md:text-sm">
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-2/5 flex flex-col gap-6 lg:gap-12">

          {/* Banner 1 */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-6 md:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xs uppercase mb-2 text-gray-600">
                CPAP MASKS
              </p>
              <h3 className="text-base md:text-lg font-semibold mb-2">
                Resmed AirFit™ N20 Nasal Mask
              </h3>
              <p className="text-red-500 font-semibold mb-3">
                ₹2,900.00
              </p>
              <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
                Shop now
              </button>
            </div>

            <Image
              src="/images/banner1.webp"
              alt="banner1"
              width={130}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Banner 2 */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl p-6 md:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xs uppercase mb-2 text-gray-600">
                CPAP MACHINES
              </p>
              <h3 className="text-base md:text-lg font-semibold mb-2">
                AirSense™ 10 Autoset Tripack
              </h3>
              <p className="text-red-500 font-semibold mb-3">
                ₹49,900.00
              </p>
              <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
                Shop now
              </button>
            </div>

            <Image
              src="/images/banner2.jpg"
              alt="banner2"
              width={140}
              height={120}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}