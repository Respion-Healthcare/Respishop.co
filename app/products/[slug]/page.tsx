import { notFound } from "next/navigation"
import Image from "next/image"
import { products } from "@/lib/products"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params   // ✅ FIX HERE

  const product = products.find(p => p.slug === slug)

  if (!product) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT - Image */}
        <div>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-xl border"
          />
        </div>

        {/* CENTER - Info */}
        <div>
          <h1 className="text-2xl font-semibold">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-red-600 mt-4">
            ₹{product.price.toLocaleString()}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>
        </div>

        {/* RIGHT - Buy Box */}
        <div>
          <div className="border rounded-xl p-6 shadow-md sticky top-20">
            <button className="w-full bg-yellow-400 py-3 rounded-lg font-semibold">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}