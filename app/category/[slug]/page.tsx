import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // ✅ NEW CLEAN FILTER
  const filteredProducts = products.filter(
    (product) => product.category === slug
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <h1 className="text-2xl md:text-3xl font-semibold mb-8 capitalize">
        {slug ? slug.replace(/-/g, " ") : "Category"}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="bg-white p-4 rounded-lg border hover:shadow-md transition"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="mt-3 text-sm font-medium">
                {product.name}
              </h2>

              <p className="text-blue-600 font-semibold mt-1">
                ₹{product.price}
              </p>
            </Link>
          ))}

        </div>
      )}
    </div>
  )
}