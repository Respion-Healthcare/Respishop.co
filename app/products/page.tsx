import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing" // ✅ ADD THIS

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-10">All Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => {
          const finalPrice = getFinalPrice(product) // ✅ ADD THIS

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg"
              />

              <h2 className="mt-4 font-semibold">
                {product.name}
              </h2>

              {/* ✅ UPDATED PRICE DISPLAY */}
              <div className="mt-2">
                <p className="text-blue-600 font-bold">
                 ₹{finalPrice.toLocaleString('en-IN')}
                </p>

                {product.offer && (
                  <p className="text-gray-500 line-through text-sm">
                    ₹{product.price.toLocaleString()}
                  </p>
                )}
              </div>

              {/* ✅ OPTIONAL OFFER BADGE */}
              {product.offer?.type === "percentage" && (
                <span className="inline-block mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.offer.value}% OFF
                </span>
              )}

              {product.offer?.type === "flat" && (
                <span className="inline-block mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  ₹{product.offer.value} OFF
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}