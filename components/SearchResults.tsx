"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Search Results
        </h1>

        <p className="mt-2 text-gray-600">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found for{" "}
          <span className="font-semibold text-blue-600">
            "{query}"
          </span>
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-gray-50 border rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">
            No products found
          </h2>

          <p className="text-gray-500">
            Try searching for CPAP, BiPAP, Oxygen Concentrator,
            Masks, or Accessories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const finalPrice = getFinalPrice(product)

            return (
              <Link
                key={product.id}
                href={`/products/${product.category}/${product.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-52 bg-gray-50">
                  <Image
                  src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full mb-3 capitalize">
                    {product.category.replace("-", " ")}
                  </span>

                  <h2 className="font-semibold text-gray-900 line-clamp-2 min-h-12">
                    {product.name}
                  </h2>

                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-lg font-bold text-blue-600">
                      ₹{finalPrice.toLocaleString("en-IN")}
                    </p>

                    {product.offer && (
                      <p className="text-gray-400 line-through text-sm">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>
                    )}
                  </div>

                  {product.offer && (
                    <div className="mt-2 text-green-600 text-sm font-medium">
                      Save {product.offer.value}%
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}