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
    <div className="w-full pt-[95px]">
      {/* padding so it stays below fixed header */}

      <div className="relative w-full h-[90vh] overflow-hidden">
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-blue-600" : "bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
