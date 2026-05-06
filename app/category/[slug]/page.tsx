import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params

  if (slug === "cpap-machine") {
    return {
      title: "CPAP Machine for Sleep Apnea | Buy Online in India - Respishop",
      description:
        "Shop CPAP machines online in India for sleep apnea treatment. Improve sleep quality and breathing with trusted devices.",
      alternates: {
        canonical: `https://www.respishop.in/category/${slug}`,
      },
    }
  }

  const categoryName = slug.replace(/-/g, " ")

  return {
    title: `${categoryName} Price in India | Buy Online`,
    description: `Buy ${categoryName} online in India at best price from Respishop.`,
    alternates: {
      canonical: `https://www.respishop.in/category/${slug}`,
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
            href={`/products/${product.category}/${product.slug}`}
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
   <div className="mt-16 max-w-4xl text-gray-700">

  {/* 🔥 SPECIAL CONTENT FOR CPAP */}
  {slug === "cpap-machine" && (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        CPAP Machines for Sleep Apnea Treatment in India
      </h2>

      <p className="mb-4">
        CPAP (Continuous Positive Airway Pressure) machines are essential for treating sleep apnea and improving breathing during sleep. These devices provide continuous airflow to keep airways open, ensuring better sleep quality and overall health.
      </p>

      <p className="mb-4">
        At Respishop, we offer high-quality CPAP machines designed for comfort, durability, and long-term therapy. Whether you are starting CPAP treatment or upgrading your device, you will find reliable options here.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Benefits of CPAP Machines
      </h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Improves sleep quality and reduces fatigue</li>
        <li>Helps manage sleep apnea effectively</li>
        <li>Reduces snoring and breathing interruptions</li>
        <li>Ensures proper oxygen flow during sleep</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        FAQs
      </h3>

      <p><strong>What is a CPAP machine?</strong><br/>
      A CPAP machine is used to treat sleep apnea by keeping airways open during sleep.</p>

      <p><strong>Is CPAP safe for daily use?</strong><br/>
      Yes, it is medically recommended and safe for long-term use.</p>
    </>
  )}

  {/* ✅ GENERIC CONTENT FOR OTHER CATEGORIES */}
  {slug !== "cpap-machine" && (
    <>
      <h2 className="text-2xl font-semibold mb-4 capitalize">
        {slug.replace(/-/g, " ")} Price in India
      </h2>

      <p className="mb-4">
        Explore the latest {slug.replace(/-/g, " ")} available in India at the best prices. Respishop offers high-quality products with fast delivery.
      </p>
    </>
  )}

<p className="mt-4">
  Check related products in our{" "}
  <Link href="/category/cpap-machine" className="text-blue-600 underline">
    CPAP machines collection
  </Link>.
</p>

</div>

<p className="mt-4">
  Popular products include{" "}
  <Link href="/products/cpap-machine/resmed-airsense-10-autoset-tripack" className="text-blue-600 underline">
    ResMed AirSense 10
  </Link>{" "}
  and{" "}
  <Link href="/products/cpap-machine/airsense-11-autoset-4g-tripack" className="text-blue-600 underline">
    AirSense 11 AutoSet
  </Link>.
</p>
    {/* ✅ SCHEMA (ADDED) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: slug,
          url: `https://www.respishop.in/category/${slug}`,
          description: `Buy ${slug} online in India at best price`,
        }),
      }}
    />

  </div>
)
}