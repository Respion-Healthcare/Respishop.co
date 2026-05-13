"use client"

import Image from "next/image"
import { getFinalPrice } from "@/lib/pricing"
import { Product } from "@/lib/products"

interface Props {
  product: Product
}

export default function ProductBannerCard({ product }: Props) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
        <div className="relative w-full h-[160px] sm:h-[200px] lg:h-auto lg:w-[60%] flex justify-center items-center bg-white">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={380}
            height={320}
            className="object-contain p-4 transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-3 sm:p-4 lg:p-6 flex flex-col justify-center lg:w-[40%]">

          {/* CATEGORY */}
          <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400 mb-1">
            {product.category}
          </p>

          {/* NAME */}
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* PRICE */}
          <div className="mt-2">
            <p className="text-blue-700 font-bold text-sm sm:text-base">
              ₹{getFinalPrice(product).toLocaleString("en-IN")}
            </p>

            {product.offer && (
              <p className="text-xs text-gray-400 line-through">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            )}
          </div>

          {/* BUTTON (smaller on mobile) */}
          <button className="mt-3 lg:mt-4 bg-blue-700 hover:bg-blue-800 
                             text-white text-xs sm:text-sm px-4 py-2 rounded-full
                             transition w-fit">
            Shop now
          </button>

        </div>
      </div>
    </div>
  )
}