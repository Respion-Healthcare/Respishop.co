"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  "/images/home01.jpg",
  "/images/home02.jpg",
  "/images/home03.jpg",
  "/images/home04.jpg",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full overflow-hidden">
      <div className="relative">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Mobile */}
            <div className="block lg:hidden">
              <Image
                src={heroImages[currentImage]}
                alt="Respishop"
                width={1920}
                height={850}
                priority
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>

            {/* Desktop */}
            <div className="relative hidden lg:block h-[calc(100vh-80px)]">
              <Image
                src={heroImages[currentImage]}
                alt="Respishop"
                fill
                priority
                sizes="100vw"
                className="object-contain object-top"
              />
            </div>
          </motion.div>
        </AnimatePresence>

       {/* Left Arrow - Desktop Only */}
<button
  onClick={prevSlide}
  className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition"
>
  <ChevronLeft className="h-7 w-7 text-gray-800" />
</button>

{/* Right Arrow - Desktop Only */}
<button
  onClick={nextSlide}
  className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition"
>
  <ChevronRight className="h-7 w-7 text-gray-800" />
</button>

      </div>
    </section>
  )
}