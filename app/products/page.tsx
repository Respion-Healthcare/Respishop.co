import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-10">All Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
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

            <p className="text-blue-600 mt-2">
              ₹{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}