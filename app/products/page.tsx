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

/* ---------------- FILTERS ---------------- */

const cpapProducts = products.filter(
  (p) => p.category === "cpap-machine"
)

const bipapProducts = products.filter(
  (p) => p.category === "bipap-machine"
)

const maskProducts = products.filter(
  (p) =>
    p.category === "nasal-mask" ||
    p.category === "full-face-mask" ||
    p.category === "nasal-pillow-mask"
)

const oxygenProducts = products.filter(
  (p) => p.category === "oxygen-concentrator"
)

const accessoryProducts = products.filter(
  (p) =>
    p.category === "tubes-and-connectors" ||
    p.category === "filters-cleaners" ||
    p.category === "humidifier-bottle" ||
    p.category === "mask-headgear" ||
    p.category === "mask-cushion" ||
    p.category === "mask-clips"
)

const rentalProducts = products.filter(
  (p) => p.category === "rental"
)

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
              <div className="relative h-[250px] flex items-center justify-center bg-white p-5">
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
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* HERO SECTION (NEW PREMIUM LOOK) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 mb-14 shadow-xl">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]"></div>

        <h1 className="text-3xl md:text-5xl font-bold relative z-10">
          CPAP, BiPAP & Oxygen Therapy Devices
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100 relative z-10">
          Premium respiratory care equipment including CPAP machines, BiPAP ventilators,
          oxygen concentrators, masks and accessories — trusted by hospitals & home users.
        </p>

        <div className="mt-6 flex gap-4 relative z-10">
          <div className="bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm">
            ✔ Trusted Brands
          </div>
          <div className="bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm">
            ✔ Fast Delivery
          </div>
          <div className="bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm">
            ✔ Medical Grade
          </div>
        </div>
      </div>

      {/* SECTIONS WRAPPED IN CARDS */}
      <div className="space-y-10">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <ProductSection
            title="CPAP Machines"
            description="Automatic CPAP devices for sleep apnea treatment and breathing therapy."
            items={cpapProducts}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <ProductSection
            title="BiPAP Machines"
            description="Advanced BiPAP ventilators for respiratory support and therapy."
            items={bipapProducts}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <ProductSection
            title="CPAP & BiPAP Masks"
            description="Nasal masks, full face masks and nasal pillow masks for CPAP therapy."
            items={maskProducts}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <ProductSection
            title="Oxygen Concentrators"
            description="Portable and home oxygen concentrators for medical oxygen therapy."
            items={oxygenProducts}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <ProductSection
            title="CPAP Accessories"
            description="Tubes, filters, humidifiers, cushions, headgear and mask parts."
            items={accessoryProducts}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <ProductSection
            title="Rental Devices"
            description="CPAP and BiPAP machines available for rent in India."
            items={rentalProducts}
          />
        </div>

      </div>
    </div>
  </main>
)
}