"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroSlides = [
  {
    image: "/images/homebanners/ban2.png",
    href: "/products/cpap-machine/resmed-airsense-10-autoset-tripack",
  },
  {
    image: "/images/homebanners/ban3.png",
    href: "/products/cpap-machine/airsense-10-autoset-tripack-4G",
  },
  {
    image: "/images/homebanners/ban1.png",
    href: "/products/cpap-machine/airstart-10-with-humidification-and-tube",
  },
  {
    image: "/images/homebanners/mask1.jpg",
    href: "/products/nasal-mask/airfit-n20-classic",
  },
  {
    image: "/images/homebanners/bipap1.jpg",
    href: "/products/bipap-machine/lumis-100-vpap-st",
  },
  {
    image: "/images/homebanners/bipap2.jpg",
    href: "/products/bipap-machine/resmed-lumis-150",
  },
  {
    image: "/images/homebanners/bipap3.jpg",
    href: "/products/bipap-machine/philips-bipap-pro",
  },
  {
    image: "/images/homebanners/mask4.jpg",
    href: "/products/full-face-mask/resmed-airfit-f20-full-face-mask",
  },
  {
    image: "/images/homebanners/cpap3.jpg",
    href: "/products/cpap-machine/philips-dreamstation",
  },
  {
    image: "/images/homebanners/mask5.jpg",
    href: "/products/full-face-mask/philips-amara",
  },
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
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
            <div className="block lg:hidden">
  <Link href={heroSlides[currentImage].href}>
    <Image
      src={heroSlides[currentImage].image}
      alt="Respishop"
      width={1920}
      height={850}
      priority
      sizes="100vw"
      className="w-full h-auto cursor-pointer"
    />
  </Link>
</div>

            <div className="relative hidden lg:block w-full h-[700px] bg-white">
  <Link href={heroSlides[currentImage].href}>
    <Image
      src={heroSlides[currentImage].image}
      alt="Respishop"
      fill
      priority
      sizes="100vw"
      className="object-contain object-center cursor-pointer"
    />
  </Link>
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