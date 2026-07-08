import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params
if (!["mask", "accessory"].includes(slug)) {
  notFound()
}
  const formattedName = slug.replace(/-/g, " ")

if (slug === "mask") {
  return {
    title: "CPAP Masks & BiPAP Masks Online in India | Respishop",
    description:
      "Buy CPAP masks, BiPAP masks, full face masks, nasal masks and nasal pillow masks online in India from leading brands like ResMed, Philips and BMC.",
    keywords: [
      "CPAP mask",
      "BiPAP mask",
      "full face mask",
      "nasal mask",
      "ResMed mask",
      "CPAP mask India",
    ],
    alternates: {
      canonical: `https://www.respishop.in/category/${slug}`,
    },
    openGraph: {
      title: "CPAP Masks & BiPAP Masks Online in India | Respishop",
      description:
        "Buy CPAP masks, BiPAP masks, full face masks, nasal masks and nasal pillow masks online in India from leading brands.",
      url: `https://www.respishop.in/category/${slug}`,
      siteName: "Respishop",
      type: "website",
    },
  }
}

if (slug === "accessory") {
  return {
    title: "CPAP & BiPAP Accessories Online in India | Respishop",
    description:
      "Shop CPAP and BiPAP accessories including tubing, filters, humidifier chambers, mask cushions, headgear and replacement parts.",
    keywords: [
      "CPAP accessories",
      "BiPAP accessories",
      "CPAP tubing",
      "CPAP filter",
      "humidifier chamber",
      "sleep therapy accessories",
    ],
    alternates: {
      canonical: `https://www.respishop.in/category/${slug}`,
    },
    openGraph: {
      title: "CPAP & BiPAP Accessories Online in India | Respishop",
      description:
        "Shop CPAP and BiPAP accessories including tubing, filters, humidifier chambers, mask cushions and replacement parts.",
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

const filteredProducts =
  slug === "mask"
    ? products.filter((product) =>
        [
          "nasal-mask",
          "full-face-mask",
          "nasal-pillow-mask",
        ].includes(product.category)
      )
    : slug === "accessory"
    ? products.filter((product) =>
        [
          "tubes-and-connectors",
          "filters-cleaners",
          "humidifier-bottle",
          "mask-headgear",
          "mask-cushion",
          "mask-clips",
        ].includes(product.category)
      )
    : products.filter(
        (product) => product.category === slug
      )

console.log("Products Found:", filteredProducts.length)
  const categoryTitle = slug
  ? slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  : "Category"

  return (
    <div className="
min-h-screen
bg-linear-to-br
from-slate-50
via-blue-50
to-cyan-50
p-6
md:p-10
">
      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto">

      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-sky-500 to-cyan-400 p-10 md:p-16 mb-12">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

  <div className="relative z-10 max-w-3xl">
    <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
      Respishop Collection
    </span>

    <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white">
      {categoryTitle}
    </h1>

   <p className="mt-5 text-lg text-blue-50">
  {filteredProducts.length}+ genuine products available with fast delivery
  across India.
</p>
  </div>

  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

  <div className="rounded-2xl bg-white p-5 shadow-sm border border-blue-100">
    <p className="text-3xl font-bold text-blue-600">
      {filteredProducts.length}+
    </p>
    <p className="text-gray-600 text-sm">
      Products
    </p>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm border border-blue-100">
    <p className="text-3xl font-bold text-blue-600">
      100%
    </p>
    <p className="text-gray-600 text-sm">
      Genuine Products
    </p>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm border border-blue-100">
    <p className="text-3xl font-bold text-blue-600">
      PAN India
    </p>
    <p className="text-gray-600 text-sm">
      Delivery
    </p>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm border border-blue-100">
    <p className="text-3xl font-bold text-blue-600">
      Expert
    </p>
    <p className="text-gray-600 text-sm">
      Support
    </p>
  </div>

</div>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Explore premium quality {categoryTitle} products at Respishop.
          Genuine products, affordable prices, fast shipping and trusted
          respiratory care solutions across India.
        </p>

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <Link
                key={product.id}
                href={`/products/${product.category}/${product.slug}`}
               className="
group
relative
overflow-hidden
rounded-3xl
border border-blue-100
bg-white
p-3
transition-all
duration-500
hover:-translate-y-2
hover:border-blue-300
hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
">
                <div className="relative h-48 sm:h-52 overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50">
 <Image
  src={product.images[0]}
  alt={product.name}
  fill
  className="object-contain scale-125 transition duration-500 group-hover:scale-[1.35]"
/>
</div>

                <h2 className="mt-4 text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h2>

                <p className="mt-3 text-xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-cyan-600">
                  ₹{product.price > 0
                  ? `₹${product.price.toLocaleString()}`
                  : "Contact for Price"}
                                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    View Details
                  </span>

                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white transition-all duration-300 group-hover:bg-cyan-600">
                    Explore
                  </span>
                </div>
              </Link>

            ))}

          </div>
        )}

        {/* SEO CONTENT */}
        <div className="
              mt-20
              rounded-3xl
              border
              border-blue-100
              bg-linear-to-br
              from-white
              to-blue-50
              p-8
              md:p-12
              shadow-sm
              ">

 {/* MASK CATEGORY CONTENT */}
{slug === "mask" && (
  <div className="space-y-10">

    <div className="text-center max-w-4xl mx-auto">
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
        CPAP & BiPAP Masks
      </span>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        CPAP & BiPAP Masks Online in India
      </h2>

      <p className="mt-5 text-lg text-gray-600">
        Discover premium CPAP and BiPAP masks from leading brands including
        ResMed, Philips and BMC. Choose from full face masks, nasal masks
        and nasal pillow masks designed for effective and comfortable sleep
        therapy.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-blue-100">
        <div className="mb-4 text-4xl">😴</div>
        <h3 className="text-xl font-semibold mb-3">
          Better Sleep Comfort
        </h3>
        <p className="text-gray-600">
          Lightweight and ergonomic designs help you sleep comfortably
          throughout the night.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-blue-100">
        <div className="mb-4 text-4xl">💨</div>
        <h3 className="text-xl font-semibold mb-3">
          Improved Therapy
        </h3>
        <p className="text-gray-600">
          Advanced cushion technology provides a secure seal and effective
          airflow delivery.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-blue-100">
        <div className="mb-4 text-4xl">✔️</div>
        <h3 className="text-xl font-semibold mb-3">
          Trusted Quality
        </h3>
        <p className="text-gray-600">
          Genuine masks from globally trusted respiratory care brands.
        </p>
      </div>

    </div>

    <div className="rounded-3xl bg-linear-to-r from-blue-600 to-cyan-500 p-8 text-white">

      <h3 className="text-2xl font-bold mb-6">
        Popular Mask Types
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <h4 className="font-semibold mb-2">
            Full Face Masks
          </h4>
          <p className="text-sm text-blue-50">
            Covers nose and mouth for reliable therapy delivery.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <h4 className="font-semibold mb-2">
            Nasal Masks
          </h4>
          <p className="text-sm text-blue-50">
            Compact and comfortable option for everyday use.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <h4 className="font-semibold mb-2">
            Nasal Pillow Masks
          </h4>
          <p className="text-sm text-blue-50">
            Minimal-contact design for maximum freedom.
          </p>
        </div>

      </div>

    </div>

    <div className="rounded-3xl border border-blue-100 bg-white p-8">

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Complete Your Sleep Therapy Setup
      </h3>

      <p className="text-gray-600 mb-5">
        Pair your mask with compatible tubing, filters, humidifier chambers
        and replacement accessories for the best therapy experience.
      </p>

      <Link
        href="/category/accessory"
        className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Explore Accessories →
      </Link>

    </div>

  </div>
)}

{slug === "accessory" && (
  <div className="space-y-10">

    <div className="text-center max-w-4xl mx-auto">
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
        CPAP & BiPAP Accessories
      </span>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        Genuine CPAP & BiPAP Accessories Online in India
      </h2>

      <p className="mt-5 text-lg text-gray-600">
        Maintain peak sleep therapy performance with genuine CPAP and BiPAP
        accessories including tubing, filters, humidifier chambers,
        cushions, headgear and replacement components from trusted brands.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-blue-100">
        <div className="mb-4 text-4xl">🫧</div>
        <h3 className="font-semibold text-xl mb-3">
          Better Hygiene
        </h3>
        <p className="text-gray-600">
          Replace filters, cushions and tubing regularly to maintain
          cleanliness and improve therapy effectiveness.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-blue-100">
        <div className="mb-4 text-4xl">😴</div>
        <h3 className="font-semibold text-xl mb-3">
          Enhanced Comfort
        </h3>
        <p className="text-gray-600">
          Fresh cushions and headgear provide a better seal and a more
          comfortable sleep therapy experience.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-blue-100">
        <div className="mb-4 text-4xl">⚙️</div>
        <h3 className="font-semibold text-xl mb-3">
          Longer Equipment Life
        </h3>
        <p className="text-gray-600">
          Proper maintenance and timely replacement parts help extend the
          lifespan of your CPAP or BiPAP machine.
        </p>
      </div>

    </div>

    <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">

      <h3 className="text-2xl font-bold mb-6">
        Popular CPAP Accessories
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
          ✓ CPAP Tubing & Air Hoses
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
          ✓ Replacement Filters
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
          ✓ Humidifier Water Chambers
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
          ✓ Mask Cushions & Headgear
        </div>

      </div>

    </div>

    <div className="rounded-3xl border border-blue-100 bg-white p-8">

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Find Compatible Masks & Accessories
      </h3>

      <p className="text-gray-600 mb-5">
        Looking for replacement cushions, clips, headgear or mask parts?
        Browse our mask collection and find compatible accessories for your
        sleep therapy setup.
      </p>

      <Link
        href="/category/mask"
        className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Explore CPAP & BiPAP Masks →
      </Link>

    </div>

  </div>
)}
          {/* INTERNAL LINKS */}
         <div className="mt-10 border-t pt-8">

  {slug === "mask" && (
    <>
      <p className="mb-4">
        Explore our{" "}
        <Link
          href="/products/cpap-machine"
          className="text-blue-600 underline"
        >
          CPAP Machines Collection
        </Link>{" "}
        for complete sleep therapy solutions.
      </p>

      <p>
        Shop full face masks, nasal masks and nasal pillow masks from
        trusted brands including ResMed, Philips and BMC.
      </p>
    </>
  )}

  {slug === "accessory" && (
    <>
      <p className="mb-4">
        Browse our{" "}
        <Link
          href="/category/mask"
          className="text-blue-600 underline"
        >
          CPAP & BiPAP Masks Collection
        </Link>{" "}
        to find compatible replacement parts and accessories.
      </p>

      <p>
        Genuine CPAP tubing, filters, humidifier chambers, mask cushions
        and headgear available with fast delivery across India.
      </p>
    </>
  )}

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