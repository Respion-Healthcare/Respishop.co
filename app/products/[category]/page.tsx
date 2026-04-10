import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

type Props = {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: Props) {

  const { category } = await params  // ✅ FIXED

  const filteredProducts = products.filter(
    (p) => p.category === category
  )

  if (filteredProducts.length === 0) {
    return <div className="p-10 text-center">No products found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category.replace("-", " ")}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => {

          const imageSrc = product.images[0]

          return (
            <Link
              key={product.slug}
              href={`/products/${product.category}/${product.slug}`}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="mt-4 font-semibold text-sm">
                {product.name}
              </h2>

              <p className="text-blue-600 font-bold mt-2">
                ₹{product.price}
              </p>

            </Link>
          )
        })}

      </div>
    </div>
  )
}