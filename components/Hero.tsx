// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { AnimatePresence, motion } from "framer-motion"

// export default function Hero() {
//   const heroImages = [
//     "/images/home01.jpg",
//     "/images/home02.jpg",
//     "/images/home03.jpg",
//     "/images/home04.jpg",
//   ]

//   const [currentImage, setCurrentImage] = useState(0)

// useEffect(() => {
//   console.log("Interval created")

//   const interval = setInterval(() => {
//     console.log("Changing image", new Date().toLocaleTimeString())

//     setCurrentImage((prev) => (prev + 1) % heroImages.length)
//   }, 15000)

//   return () => clearInterval(interval)
// }, [])

//   return (
//     <section className="w-full bg-white">
//       {/* Hero Slider */}
//       <div className="relative w-full overflow-hidden lg:px-8 xl:px-12">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImage}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Image
//   src={heroImages[currentImage]}
//   alt="Respishop Healthcare"
//   width={1920}
//   height={850}
//   priority
//   className="
//     w-full
//     h-auto
//     lg:h-[520px]
//     xl:h-[620px]
//     object-cover
//     rounded-none
//     lg:rounded-3xl
//   "
// />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Text */}
//       <div className="max-w-5xl mx-auto px-6 py-12 text-center">

//         <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600">
//           Cutting-edge solutions for modern medical technology, designed to
//           improve patient care and everyday comfort.
//         </p>
//       </div>
//     </section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck,
  Truck,
  PhoneCall,
  BadgeCheck,
} from "lucide-react"

const heroImages = [
  "/images/home01.jpg",
  "/images/home02.jpg",
  "/images/home03.jpg",
  "/images/home04.jpg",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Background Blur */}
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-200 blur-[140px] opacity-30" />
      <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Trusted Healthcare Store
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              India's Trusted
              <span className="block text-blue-600">
                CPAP, BiPAP &
              </span>
              Oxygen Concentrator Store
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Buy genuine CPAP machines, BiPAP machines, oxygen concentrators
              and respiratory accessories from trusted brands with fast
              delivery across India.
            </p>

          
          </motion.div>

          {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative order-1 lg:order-2"
>
  {/* Mobile */}
  <div className="-mx-6 lg:hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroImages[currentImage]}
          alt="Respishop"
          width={1200}
          height={700}
          priority
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Laptop/Desktop */}
  <div className="hidden lg:block overflow-hidden rounded-[35px] bg-white p-3 shadow-2xl">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroImages[currentImage]}
          alt="Respishop"
          width={1200}
          height={700}
          priority
          className="w-full h-auto rounded-3xl object-contain"
        />
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>

        </div>

      </div>

    </section>
  )
}