"use client"

import Image from "next/image"
import { getFinalPrice } from "@/lib/pricing"
import { Product } from "@/lib/products"

interface Props {
  product: Product
}

export default function ProductBannerCard({ product }: Props) {
  return (
    <div className="group bg-white rounded-3xl shadow-md 
                    hover:shadow-xl transition duration-300
                    px-8 py-6 flex items-center justify-between
                    min-h-[260px]">

      {/* Left Content */}
      <div className="max-w-[40%]">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {product.name}
        </h3>

        {/* ✅ DYNAMIC PRICE */}
        <div className="mt-3">
          <p className="text-lg font-bold text-blue-700">
            ₹{getFinalPrice(product).toLocaleString()}
          </p>

          {product.offer && (
            <p className="text-sm text-gray-400 line-through">
              ₹{product.price.toLocaleString()}
            </p>
          )}
        </div>

        <button className="mt-4 bg-blue-700 hover:bg-blue-800 
                           text-white text-sm px-5 py-2 rounded-full
                           transition">
          Shop now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-end w-[60%]">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={380}
          height={320}
          className="object-contain drop-shadow-2xl 
                     border-2 border-gray-200 rounded-2xl
                     transition duration-500 
                     group-hover:scale-105 
                     group-hover:border-blue-500"
        />
      </div>
    </div>
  )
}