import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params

  const categoryName = slug.replace(/-/g, " ")

  return {
    title: `${categoryName} Price in India | Buy Online`,
    description: `Buy ${categoryName} online in India at best price. Check latest models, features, and offers. Fast delivery across India from Respishop.`,
    alternates: {
      canonical: `https://www.respishop.co.in/category/${slug}`,
    },
  }
}
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

    {/* ✅ SEO CONTENT (ADDED) */}
    <div className="mt-16 max-w-4xl">

      <h2 className="text-2xl font-semibold mb-4 capitalize">
        {slug.replace(/-/g, " ")} Price in India
      </h2>

      <p className="text-gray-700 mb-4">
        Explore the latest {slug.replace(/-/g, " ")} available in India at the best prices. At Respishop, we provide high-quality medical equipment with reliable performance and fast delivery across India.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Why choose our {slug.replace(/-/g, " ")}?
      </h3>

      <ul className="list-disc pl-5 text-gray-700">
        <li>Top brands and trusted quality</li>
        <li>Affordable pricing across India</li>
        <li>Fast and secure delivery</li>
        <li>Suitable for home and hospital use</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Buy {slug.replace(/-/g, " ")} online in India
      </h3>

      <p className="text-gray-700">
        Browse our wide range of {slug.replace(/-/g, " ")} and order online with doorstep delivery anywhere in India.
      </p>

    </div>

    {/* ✅ SCHEMA (ADDED) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: slug,
          url: `https://www.respishop.co.in/category/${slug}`,
          description: `Buy ${slug} online in India at best price`,
        }),
      }}
    />

  </div>
)
}