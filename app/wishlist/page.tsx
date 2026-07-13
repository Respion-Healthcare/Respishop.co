"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([])

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")

    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist))
      } catch {
        setWishlist([])
      }
    }
  }, [])

  const removeFromWishlist = (slug: string) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.slug !== slug
    )

    setWishlist(updatedWishlist)

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    )
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
              className="inline-block mt-6 bg-[#0391B6] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div
                key={product.slug}
                className="bg-white p-6 rounded-xl shadow-sm relative"
              >
                <button
                  onClick={() =>
                    removeFromWishlist(product.slug)
                  }
                  className="absolute top-3 right-3 text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>

               {product.images?.[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name || "Product"}
                            width={200}
                            height={200}
                            className="mx-auto object-contain h-[160px]"
                          />
                        ) : (
                  <div className="mx-auto h-[160px] flex items-center justify-center bg-gray-100 rounded">
                    No Image Available
                  </div>
                )}

                <h3 className="mt-4 text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-red-500 font-semibold mt-2">
                  {product.price}
                </p>

                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="mt-4 flex items-center gap-3 border rounded-lg p-3 hover:shadow-md transition"
                >
                  <div>
                    <p className="text-sm font-medium">
                      View Product
                    </p>

                    <p className="text-xs text-[#0391B6] mt-1">
                      Open →
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}