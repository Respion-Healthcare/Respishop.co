"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  "/images/hero1.jpg",
  "/images/hero2.png",
  "/images/hero3.png",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white">
      <div className="relative w-full h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[85vh] overflow-hidden flex items-center justify-center">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Hero Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-blue-600 w-5 h-2"
                  : "bg-gray-400 w-2 h-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}