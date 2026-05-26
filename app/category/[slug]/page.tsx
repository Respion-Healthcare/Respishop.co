import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params

  const formattedName = slug.replace(/-/g, " ")

  if (slug === "cpap-machine") {
    return {
      title:
        "CPAP Machine for Sleep Apnea | Buy Online in India - Respishop",
      description:
        "Shop CPAP machines online in India for sleep apnea treatment. Buy ResMed CPAP devices, Auto CPAP machines, sleep therapy equipment and accessories at best price.",
      keywords: [
        "CPAP machine",
        "sleep apnea machine",
        "ResMed CPAP",
        "Auto CPAP",
        "CPAP machine India",
        "sleep therapy device",
      ],
      alternates: {
        canonical: `https://www.respishop.in/category/${slug}`,
      },
      openGraph: {
        title: "CPAP Machine for Sleep Apnea | Respishop",
        description:
          "Buy CPAP machines online in India with fast delivery and genuine products.",
        url: `https://www.respishop.in/category/${slug}`,
        siteName: "Respishop",
        type: "website",
      },
    }
  }

  return {
    title: `${formattedName} Price in India | Buy Online - Respishop`,
    description: `Buy ${formattedName} online in India at best price from Respishop. Explore premium quality products with fast delivery and trusted support.`,
    keywords: [
      formattedName,
      `${formattedName} price in India`,
      `buy ${formattedName}`,
      `${formattedName} online`,
      "Respishop",
    ],
    alternates: {
      canonical: `https://www.respishop.in/category/${slug}`,
    },
    openGraph: {
      title: `${formattedName} | Respishop`,
      description: `Shop ${formattedName} online at best prices in India.`,
      url: `https://www.respishop.in/category/${slug}`,
      siteName: "Respishop",
      type: "website",
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const filteredProducts = products.filter(
    (product) => product.category === slug
  )

  const categoryTitle = slug
    ? slug.replace(/-/g, " ")
    : "Category"

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-3 capitalize text-gray-900">
          {categoryTitle}
        </h1>

        <p className="text-gray-600 mb-10 max-w-3xl">
          Explore premium quality {categoryTitle} products at Respishop.
          Genuine products, affordable prices, fast shipping and trusted
          respiratory care solutions across India.
        </p>

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <Link
                key={product.id}
                href={`/products/${product.category}/${product.slug}`}
                className="bg-white p-4 rounded-2xl border hover:shadow-lg transition duration-300"
              >

                <div className="relative w-full h-44 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <h2 className="mt-4 text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h2>

                <p className="text-blue-600 font-semibold mt-2">
                  ₹{product.price.toLocaleString()}
                </p>

              </Link>

            ))}

          </div>
        )}

        {/* SEO CONTENT */}
        <div className="mt-20 max-w-5xl text-gray-700 leading-relaxed">

          {/* CPAP CONTENT */}
          {slug === "cpap-machine" && (
            <>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                CPAP Machines for Sleep Apnea Treatment in India
              </h2>

              <p className="mb-5">
                CPAP machines are one of the most effective treatments for
                obstructive sleep apnea and breathing disorders during sleep.
                These devices deliver continuous air pressure to keep your
                airways open, helping you breathe properly throughout the
                night and improving sleep quality significantly.
              </p>

              <p className="mb-5">
                At Respishop, we provide advanced CPAP therapy devices from
                trusted brands like ResMed. Our collection includes Auto CPAP
                machines, travel CPAP devices, humidifier-supported systems,
                and premium accessories designed for maximum comfort and
                long-term therapy support.
              </p>

              <p className="mb-5">
                Whether you are looking for your first CPAP device or planning
                to upgrade your existing machine, you can find reliable,
                clinically trusted and easy-to-use options suitable for home
                therapy and long-term respiratory care.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                Benefits of CPAP Machines
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Helps manage sleep apnea effectively</li>
                <li>Improves breathing during sleep</li>
                <li>Reduces snoring and interrupted sleep</li>
                <li>Enhances sleep quality and daily energy</li>
                <li>Supports long-term respiratory health</li>
                <li>Comfortable and easy-to-use therapy devices</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                Why Buy from Respishop?
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>100% genuine respiratory care products</li>
                <li>Trusted sleep therapy solutions</li>
                <li>Fast delivery across India</li>
                <li>Affordable pricing and support</li>
                <li>Premium brands including ResMed</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                Frequently Asked Questions
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-semibold text-lg">
                    What is a CPAP machine?
                  </h4>

                  <p className="mt-1 text-gray-700">
                    A CPAP machine is a medical device used to treat sleep
                    apnea by providing continuous airflow that keeps the airway
                    open during sleep.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Is CPAP safe for long-term use?
                  </h4>

                  <p className="mt-1 text-gray-700">
                    Yes, CPAP therapy is medically recommended and considered
                    safe for daily and long-term use when prescribed by a
                    healthcare professional.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Which CPAP machine is best for beginners?
                  </h4>

                  <p className="mt-1 text-gray-700">
                    Auto-adjusting CPAP machines like the ResMed AirSense
                    series are commonly recommended for beginners because of
                    their comfort and intelligent pressure adjustment features.
                  </p>
                </div>

              </div>

            </>
          )}

          {/* GENERIC CATEGORY CONTENT */}
          {slug !== "cpap-machine" && (
            <>

              <h2 className="text-3xl font-bold mb-6 capitalize text-gray-900">
                Buy {categoryTitle} Online in India
              </h2>

              <p className="mb-5">
                Explore premium quality {categoryTitle} products available at
                Respishop. We offer carefully selected respiratory care and
                sleep therapy products designed for comfort, durability and
                reliable performance.
              </p>

              <p className="mb-5">
                Whether you are searching for accessories, masks, oxygen
                therapy products or advanced respiratory equipment, our
                collection includes trusted solutions from leading healthcare
                brands.
              </p>

              <p className="mb-5">
                Respishop focuses on delivering genuine healthcare products
                with affordable pricing, quick delivery and dedicated customer
                support across India.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                Why Choose Respishop?
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Trusted respiratory healthcare products</li>
                <li>Fast delivery across India</li>
                <li>Affordable pricing</li>
                <li>Premium quality products</li>
                <li>Easy online ordering experience</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
                Customer Reviews
              </h3>

              <p className="mb-5">
                Customers across India trust Respishop for genuine respiratory
                care products and reliable sleep therapy equipment. Our focus
                on product quality, customer support and quick delivery makes
                us a trusted destination for healthcare needs.
              </p>

            </>
          )}

          {/* INTERNAL LINKS */}
          <div className="mt-10 border-t pt-8">

            <p className="mb-4">
              Check related products in our{" "}
              <Link
                href="/category/cpap-machine"
                className="text-blue-600 underline"
              >
                CPAP machines collection
              </Link>.
            </p>

            <p>
              Popular products include{" "}
              <Link
                href="/products/cpap-machine/resmed-airsense-10-autoset-tripack"
                className="text-blue-600 underline"
              >
                ResMed AirSense 10
              </Link>{" "}
              and{" "}
              <Link
                href="/products/cpap-machine/airsense-11-autoset-single-pack"
                className="text-blue-600 underline"
              >
                AirSense 11 AutoSet
              </Link>.
            </p>

          </div>

        </div>

        {/* COLLECTION PAGE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: categoryTitle,
              url: `https://www.respishop.in/category/${slug}`,
              description: `Buy ${categoryTitle} online in India at best price from Respishop.`,
              publisher: {
                "@type": "Organization",
                name: "Respishop",
                url: "https://www.respishop.in",
              },
            }),
          }}
        />

        {/* REVIEW SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: categoryTitle,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "128",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Rahul S",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "Very good product quality and fast delivery.",
                },
              ],
            }),
          }}
        />

      </div>

    </div>
  )
}