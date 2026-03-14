
"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "ResMed AirSense 11 AutoSet CPAP Machine",
    price: "₹69,000",
    slug: "airsense-11-autoset-single-pack",
  },
  {
    id: 2,
    name: "ResMed Lumis 100 VPAP ST BiPAP Machine",
    price: "₹95,000",
    slug: "resmed-lumis-100-vpap-st",
  },
  {
    id: 3,
    name: "ResMed Lumis 150 VPAP ST BiPAP Machine",
    price: "₹1,05,000",
    slug: "resmed-lumis-150-vpap-st",
  },
  {
    id: 4,
    name: "ResMed AirFit F20 Full Face Mask",
    price: "₹12,000",
    slug: "resmed-airfit-f20-full-face-mask",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

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

          {filteredProducts.map((product) => (

            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="border p-5 rounded-lg hover:shadow-md transition"
            >
              <h2 className="font-semibold mb-2">
                {product.name}
              </h2>

              <p className="text-blue-600 font-medium">
                {product.price}
              </p>

            </Link>

          ))}

        </div>
      )}

    </div>
  )
}