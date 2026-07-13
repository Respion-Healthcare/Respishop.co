import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { products } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

/* ---------------- SEO METADATA ---------------- */

export const metadata: Metadata = {
  title: "CPAP, BiPAP Machines, Masks & Oxygen Concentrators | Respishop",
  description:
    "Buy CPAP machines, BiPAP machines, oxygen concentrators, CPAP masks, accessories and rental devices online in India. Best prices from ResMed & top brands.",
  keywords: [
    "CPAP machine India",
    "BiPAP machine India",
    "oxygen concentrator",
    "CPAP mask",
    "ResMed AirSense",
    "sleep apnea machine",
    "CPAP accessories India",
    "BiPAP mask online",
  ],
  openGraph: {
    title: "Respishop - CPAP, BiPAP & Oxygen Therapy Devices",
    description:
      "Shop CPAP, BiPAP machines, oxygen concentrators, masks and accessories in India.",
    type: "website",
  },
}


/* ---------------- COMPONENT ---------------- */

function ProductSection({
  title,
  items,
  description,
}: {
  title: string
  items: any[]
  description?: string
}) {
  if (!items.length) return null

  return (
    <section className="mb-16">
      {/* SEO HEADING */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="text-slate-600 mt-2 mb-6 max-w-3xl">
          {description}
        </p>
      )}

      {/* PRODUCT GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((product) => {
          const finalPrice = getFinalPrice(product)

          return (
            <Link
              key={`${product.slug}-${product.id}`}
              href={`/products/${product.category}/${product.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-62.5 flex items-center justify-center bg-white p-5">
                <Image
                  src={product.images?.[0] || "/placeholder.webp"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="object-contain group-hover:scale-105 transition"
                />

                {product.offer && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.offer.type === "percentage"
                      ? `${product.offer.value}% OFF`
                      : `₹${product.offer.value} OFF`}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-2 flex gap-2 items-center">
                  <span className="text-[#0391B6] font-bold">
                    ₹{finalPrice.toLocaleString("en-IN")}
                  </span>

                  {product.offer && (
                    <span className="line-through text-sm text-gray-400">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

/* ---------------- PAGE ---------------- */

export default function ProductsPage() {
  return (
  <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
    
   <div className="text-center mb-8">
  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#0391B6] text-sm font-medium">
    Respiratory Care Solutions
  </span>

  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
    Find the Right Therapy Equipment
  </h2>
</div>
    <div className="max-w-7xl mx-auto px-4 py-12">

  {/* CATEGORY HIGHLIGHTS */}
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 mb-14">

  {[
    {
      name: "CPAP",
      href: "/products/cpap-machine",
      image: "/images/banner2.jpg",
    },
    {
      name: "BiPAP",
      href: "/products/bipap-machine",
      image: "/images/Devices/Bipap Machiene/BMC G3 B25vt BIPAP Device with Humidifier and Mask2.webp",
    },
    {
      name: "Oxygen",
      href: "/products/oxygen-concentrator",
      image: "/images/Oc/evox1.jpg",
    },
    {
      name: "Masks",
      href: "/category/mask",
      image: "/images/banner1.webp",
    },
    {
      name: "Accessories",
      href: "/category/accessory",
      image: "/images/hero12.png",
    },
    {
      name: "Rental",
      href: "/products/rental",
      image: "/images/P9.webp",
    },
    {
      name: "Sleep Therapy",
      href: "/sleeptherapy",
      image: "/images/blog2.webp",
    },
  ].map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="group flex flex-col items-center"
    >
      {/* Circle Image */}
      <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-[#BFEAF3] shadow-md transition duration-300 group-hover:scale-105 group-hover:border-blue-500">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name Below */}
      <h3 className="mt-3 text-center text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0391B6]">
        {item.name}
      </h3>
    </Link>
  ))}

</div>
    
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white mb-12">

  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

  <div className="relative z-10">
    <h2 className="text-2xl font-bold">
      India's Trusted Sleep Therapy Store
    </h2>

    <p className="mt-2 text-blue-100">
      CPAP, BiPAP, Oxygen Concentrators & Accessories from top brands.
    </p>

    <div className="flex flex-wrap gap-3 mt-5">
      <span className="bg-white/20 px-4 py-2 rounded-full">
        ✔ ResMed Authorized
      </span>

      <span className="bg-white/20 px-4 py-2 rounded-full">
        ✔ Fast Shipping
      </span>

      <span className="bg-white/20 px-4 py-2 rounded-full">
        ✔ Expert Support
      </span>
    </div>
  </div>

</div>
    {/* BEST SELLING PRODUCTS */}
  <div className="mt-10 pt-8 border-t border-[#BFEAF3]">

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Best Selling Products
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Most trusted sleep therapy & respiratory care products
                    </p>
                    </div>

                    <Link
                      href="/products"
                      className="text-[#0391B6] font-medium hover:underline"
                    >
                      View All →
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-4">

                    {[
                      {
                        name: "Resmed AirFit N20",
                        href: "/products/nasal-mask/resmed-airfit-n20-nasal-mask",
                      },
                      {
                        name: "AirSense 10 AutoSet",
                        href: "/products/cpap-machine/resmed-airsense-10-autoset-tripack",
                      },
                      {
                        name: "Lumis 100 VPAP ST",
                        href: "/products/bipap-machine/lumis-100-vpap-st",
                      },
                      {
                        name: "AirMini AutoSet",
                        href: "/products/cpap-machine/airmini-autoset-cpap-device",
                      },
                      {
                        name: "AirFit F20 Full Face",
                        href: "/products/full-face-mask/resmed-airfit-f20-full-face-mask",
                      },
                      {
                        name: "AirSense 11 AutoSet",
                        href: "/products/cpap-machine/airsense-11-autoset-single-pack",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="rounded-2xl border border-[#BFEAF3] bg-[#EAF8FC]/60 hover:bg-[#0391B6] hover:text-white transition-all duration-300 p-4 text-sm font-medium text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </div>
                </div>
    </div>
  </main>
)
}