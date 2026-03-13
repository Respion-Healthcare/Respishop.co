"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WishlistPage() {

  const [wishlist, setWishlist] = useState<any[]>([])

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")

    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist))
    }
  }, [])

  const removeFromWishlist = (id:number) => {

    const updatedWishlist = wishlist.filter(item => item.id !== id)

    setWishlist(updatedWishlist)

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (

          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <p className="text-gray-500 text-lg">
              Your wishlist is empty.
            </p>

            <Link
              href="/products"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
          </div>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow-sm relative"
              >

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>

                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto object-contain h-[160px]"
                />

                <h3 className="mt-4 text-sm font-medium text-gray-800">
                  {product.name}
                </h3>

                <p className="text-red-500 font-semibold mt-2">
                  {product.price}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Product
                </Link>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  )
}