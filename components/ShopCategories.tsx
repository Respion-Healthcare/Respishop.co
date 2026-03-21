"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Sleep Apnea Machiene",
    image: "/images/aboutus.webp",
    link: "/category/cpap-machine",
  },
  {
    name: "Face Mask",
    image: "/images/banner1.webp",
    link: "/category/face-mask",
  },
  {
    name: "CPAP Machines",
    image: "/images/sleep apnea.webp",
    link: "/category/cpap-machine",
  },
  {
    name: "Accessories",
    image: "/images/accessories.jpg",
    link: "/category/accessory",
  },
  {
    name: "Oxygen Concentrator",
    image: "/images/deal3.jpg",
    link: "/category/oxygen-concentrator",
  },
  {
    name: "Mask Pad and Clips",
    image: "/images/mask pad.webp",
    link: "/category/accessory",
  },
]

export default function ShopCategories() {
  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28">

        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Shop by categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              className="bg-white rounded-xl overflow-hidden 
                         shadow-sm hover:shadow-lg transition-all duration-300 
                         border border-gray-200 hover:border-blue-500 hover:-translate-y-1"
            >

              {/* ✅ BIG IMAGE */}
              <div className="relative w-full h-40">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ✅ TEXT */}
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-700">
                  {cat.name}
                </p>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}