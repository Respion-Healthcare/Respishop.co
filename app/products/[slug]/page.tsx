import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import ImageSlider from "./ImageSlider"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = products.find((p) => p.slug === slug)

  if (!product) return notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT - Image Slider */}
        <div>
          <ImageSlider images={product.images} name={product.name} />
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

          {/* Specifications */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Specifications</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT - Buy Box */}
        <div>
          <div className="border rounded-xl p-6 shadow-md sticky top-20">
            <p className="text-xl font-bold mb-4">
              ₹{product.price.toLocaleString()}
            </p>

            <button className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}