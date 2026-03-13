"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Sleep Apnea Machines",
    image: "/images/sleep apnea.webp",
    link: "/products/resmed-airsense-10-autoset-tripack",
  },
  {
    name: "CPAP Masks",
    image: "/images/cpapmasks.webp",
    link: "/products/resmed-airfit-n20-nasal-mask",
  },
  {
    name: "Nasal Pillow Mask",
    image: "/images/nasal pillow mask.jpg",
    link: "/products/resmed-airfit-n20-nasal-mask",
  },
  {
    name: "Accessories",
    image: "/images/accessories.jpg",
    link: "/products/airmini-autoset-cpap",
  },
  {
    name: "Mask Pad & Clips",
    image: "/images/mask pad.webp",
    link: "/products/resmed-airfit-f20-full-face-mask",
  },
  {
    name: "Best Selling Products",
    image: "/images/best selling products.webp",
    link: "/products/airsense-11-autoset-4g-tripack",
  },
]

export default function ShopCategories() {
  return (
    <section className="py-16 bg-gray-100 w-full">

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28">

        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Shop by categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center 
                         shadow-sm hover:shadow-lg transition-all duration-300 
                         border border-gray-200 hover:border-blue-500 hover:-translate-y-1"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm font-medium text-gray-700">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>

      </div>

    </section>
  )
}