"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import AddToCartButton from "./AddToCartButton"

export default function ProductOptions({ product }: any) {

  const [size, setSize] = useState("Medium")
  const [qty, setQty] = useState(1)
  const [wish, setWish] = useState(false)

  return (

    <div>

      {/* Wishlist */}
      <button
        onClick={() => setWish(!wish)}
        className="flex items-center gap-2 mt-4 text-gray-600 hover:text-red-500"
      >
        <Heart
          className={`w-5 h-5 ${wish ? "fill-red-500 text-red-500" : ""}`}
        />
        {wish ? "Wishlisted" : "Add to Wishlist"}
      </button>

      {/* Size */}
      <div className="mt-6">

        <h3 className="font-medium mb-2">Size</h3>

        <div className="flex gap-3">

          {["Small", "Medium", "Large"].map((s) => (

            <button
              key={s}
              onClick={() => setSize(s)}
              className={`border px-4 py-2 rounded ${
                size === s ? "bg-black text-white" : ""
              }`}
            >
              {s}
            </button>

          ))}

        </div>

      </div>

      {/* Quantity */}
      <div className="mt-6">

        <h3 className="font-medium mb-2">Quantity</h3>

        <div className="flex items-center border w-fit rounded">

          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-4 py-2"
          >
            -
          </button>

          <span className="px-4">{qty}</span>

          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-4 py-2"
          >
            +
          </button>

        </div>

      </div>

      {/* Add to cart */}
      <div className="mt-6">

        <AddToCartButton
          product={product}
          quantity={qty}
          size={size}
        />

      </div>

    </div>

  )
}