"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { products } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  // ✅ FILTER FROM MAIN PRODUCTS
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-3xl font-semibold mb-4">
        Search Results
      </h1>

      <p className="mb-10 text-gray-600">
        Showing results for: <strong>{query}</strong>
      </p>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">

          {filteredProducts.map((product) => {

            const finalPrice = getFinalPrice(product)

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="border p-5 rounded-lg hover:shadow-md transition"
              >
                <h2 className="font-semibold mb-2">
                  {product.name}
                </h2>

                {/* ✅ PRICE FIXED */}
                <div className="flex items-center gap-2">
                  <p className="text-blue-600 font-medium">
                    ₹{finalPrice.toLocaleString()}
                  </p>

                  {product.offer && (
                    <p className="text-gray-400 line-through text-sm">
                      ₹{product.price.toLocaleString()}
                    </p>
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