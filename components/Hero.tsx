"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform,} from "framer-motion"

/* ---------- TILT HOOK ---------- */
function useTilt() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-60, 60], [12, -12])
  const rotateY = useTransform(x, [-60, 60], [-12, 12])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    x.set(e.clientX - rect.left - centerX)
    y.set(e.clientY - rect.top - centerY)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return { rotateX, rotateY, handleMouseMove, reset }
}

/* ---------- TYPEWRITER ---------- */
function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i))
      i++
      if (i > text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return displayed
}

/* ---------- GLOW ---------- */
function useGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return { x, y, handleMove }
}

export default function Hero() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const heroImages = [
  "/images/home11.png",
  "/images/home2.png",
  "/images/home3.png",
]

const [currentImage, setCurrentImage] = useState(0)
  const typedText = useTypewriter(
    "Cutting-edge solutions for modern medical technology, designed to improve patient care and everyday comfort."
  )

  const tilt1 = useTilt()
  const tilt2 = useTilt()
  const tilt3 = useTilt()
  const tilt4 = useTilt()
  const tilt5 = useTilt()

  const glow = useGlow()

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }, 3000)

  return () => clearInterval(interval)
}, [])

  return (
    <section className="relative bg-linear-to-br from-blue-50 via-white to-blue-100 w-full overflow-visible">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-10 right-10 w-62.5 sm:w-125 h-62.5 sm:h-125 bg-blue-300 blur-[120px] opacity-30 rounded-full" />
      <div className="absolute bottom-10 left-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-blue-200 blur-[100px] opacity-30 rounded-full" />

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-24 grid lg:grid-cols-[1.1fr_1.4fr] gap-10 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif text-blue-600 leading-[1.15] text-center lg:text-left"  >
            Respishop <br /> Healthcare
          </motion.h1>

          <p className="mt-5 text-gray-600 text-[17px] sm:text-lg lg:text-xl leading-8 max-w-lg text-center lg:text-left min-h-[85px] mx-auto lg:mx-0">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

             <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  className="mt-8 w-full flex justify-center lg:justify-start"
>
  <div className="overflow-hidden rounded-3xl shadow-2xl">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroImages[currentImage]}
          alt="Medical Equipment"
          width={600}
          height={420}
          className="w-full max-w-[500px] sm:max-w-[560px] h-auto rounded-3xl"
        />
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>

              <Link
        href="/products/cpap/resmed-airsense-10-autoset-tripack"
        className="mt-8 mx-auto lg:mx-0 w-fit bg-blue-600 text-white px-8 py-4 rounded-full hover:scale-105 hover:bg-blue-700 transition shadow-xl"
      >
        Explore Now
      </Link>
        </div>

      {/* RIGHT */}
<div className="relative w-full">

{/* ✅ MOBILE VIEW */}
{/* <div className="lg:hidden mt-10 flex justify-center">
  <div className="grid grid-cols-2 gap-3 w-full max-w-sm">

    <div className="col-span-2 relative h-[170px] rounded-2xl overflow-hidden shadow-lg">
      <Image src="/images/hero12.png" fill alt="" className="object-cover" />
    </div>

    <div className="relative h-[120px] rounded-2xl overflow-hidden shadow-lg">
      <Image src="/images/hero13.png" fill alt="" className="object-cover" />
    </div>

    <div className="relative h-[120px] rounded-2xl overflow-hidden shadow-lg">
      <Image src="/images/hero11.png" fill alt="" className="object-cover" />
    </div>

    <div className="relative h-[120px] rounded-2xl overflow-hidden shadow-lg">
      <Image src="/images/hero14.png" fill alt="" className="object-cover" />
    </div>

    <div className="relative h-[120px] rounded-2xl overflow-hidden shadow-lg">
      <Image src="/images/hero14.png" fill alt="" className="object-cover" />
    </div>

  </div>
</div> */}

  {/* ✅ DESKTOP VIEW */}
  <div className="hidden lg:flex relative h-[820px] items-center justify-center">

    <div className="relative w-[780px] h-[820px]">

      {[
        { id: 1, img: "/images/hero12.png", cls: "top-0 left-16 w-[500px] h-[280px]", tilt: tilt1 },
        { id: 2, img: "/images/hero13.png", cls: "top-[260px] left-0 w-[320px] h-[260px]", tilt: tilt2 },
        { id: 3, img: "/images/hero11.png", cls: "top-[200px] left-[240px] w-[420px] h-[520px]", tilt: tilt3 },
        { id: 4, img: "/images/Blogs/best cpap.png", cls: "bottom-0 right-10 w-[360px] h-[240px]", tilt: tilt4 },

        // ✅ BIG BACKGROUND RECTANGLE
        {
          id: 5,
          img: "/images/hero14.png",
          cls: "top-[140px] right-[-120px] w-[600px] h-[360px]",
          tilt: tilt5,
        },

      ].map(({ id, img, cls, tilt }) => (
        <motion.div
          key={id}
          onMouseEnter={() => setActiveCard(id)}
          onMouseLeave={() => {
            setActiveCard(null)
            tilt.reset()
          }}
          onMouseMove={(e) => {
            tilt.handleMouseMove(e)
            glow.handleMove(e)
          }}
          style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
          animate={{ y: [0, -12 - id * 2, 0] }}
          transition={{ duration: 4 + id, repeat: Infinity }}
          className={`absolute ${cls} rounded-3xl overflow-hidden shadow-2xl transition-all
            ${
              activeCard === id
                ? "z-50 scale-105"
                : id === 5
                ? "z-10 opacity-95"
                : "z-20"
            }
          `}
        >

          {/* GLOW */}
          {activeCard === id && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(450px circle at ${glow.x.get()}px ${glow.y.get()}px, rgba(37,99,235,0.25), transparent 70%)`,
              }}
            />
          )}

          <Image src={img} fill alt="" className="object-cover" />
        </motion.div>
      ))}

    </div>
  </div>
</div>
      </div>
    </section>
  )
}