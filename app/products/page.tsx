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
                  <span className="text-blue-600 font-bold">
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
  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
    Respiratory Care Solutions
  </span>

  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
    Find the Right Therapy Equipment
  </h2>

  <p className="mt-3 text-slate-600">
    Browse our range of CPAP, BiPAP, oxygen therapy devices and accessories from trusted brands.
  </p>
</div>
    <div className="max-w-7xl mx-auto px-4 py-12">
     {/* CATEGORY HIGHLIGHTS */}
  {/* CATEGORY HIGHLIGHTS */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-12">

  {/* CPAP */}
  <Link
    href="/products/cpap-machine"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/banner2.jpg"
        alt="CPAP Machine"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">CPAP</h3>
      <p className="mt-1 text-sm text-gray-500">
        Sleep apnea therapy devices
      </p>
    </div>
  </Link>

  {/* BiPAP */}
  <Link
    href="/products/bipap-machine"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/Devices/Bipap Machiene/BMC G3 B25vt BIPAP Device with Humidifier and Mask2.webp"
        alt="BiPAP Machine"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">BiPAP</h3>
      <p className="mt-1 text-sm text-gray-500">
        Advanced respiratory support
      </p>
    </div>
  </Link>

  {/* Oxygen */}
  <Link
    href="/products/oxygen-concentrator"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/Oc/evox1.jpg"
        alt="Oxygen Concentrator"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">Oxygen</h3>
      <p className="mt-1 text-sm text-gray-500">
        Portable & Home Concentrators
      </p>
    </div>
  </Link>

  {/* Masks */}
  <Link
    href="/category/mask"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/banner1.webp"
        alt="CPAP Masks"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">Masks</h3>
      <p className="mt-1 text-sm text-gray-500">
        Nasal & Full Face Masks
      </p>
    </div>
  </Link>

  {/* Accessories */}
  <Link
    href="/category/accessory"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/hero12.png"
        alt="Accessories"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">Accessories</h3>
      <p className="mt-1 text-sm text-gray-500">
        Tubes, Filters & Cushions
      </p>
    </div>
  </Link>

  {/* Rental */}
  <Link
    href="/products/rental"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/P9.webp"
        alt="Rental"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">Rental</h3>
      <p className="mt-1 text-sm text-gray-500">
        CPAP & BiPAP Rentals
      </p>
    </div>
  </Link>

  {/* Sleep Therapy */}
  <Link
    href="/sleeptherapy"
    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="relative h-40 w-full">
      <Image
        src="/images/blog2.webp"
        alt="Sleep Therapy"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-blue-700">Sleep Therapy</h3>
      <p className="mt-1 text-sm text-gray-500">
        Sleep Therapy Diagnosis
      </p>
    </div>
  </Link>

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
  <div className="mt-10 pt-8 border-t border-blue-100">

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
                      className="text-blue-600 font-medium hover:underline"
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
                        className="rounded-2xl border border-blue-100 bg-blue-50/60 hover:bg-blue-600 hover:text-white transition-all duration-300 p-4 text-sm font-medium text-gray-700"
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