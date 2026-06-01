// components/product/ProductCard.tsx

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { getFinalPrice } from "@/lib/pricing"

type ProductCardProps = {
  product: any
}

export default function ProductCard({
  product,
}: ProductCardProps) {

  const finalPrice = getFinalPrice(product)

  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
    >

      {/* OFFER BADGE */}
      {product.offer && (
        <div className="absolute left-4 top-4 z-20 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {product.offer.type === "percentage"
            ? `${product.offer.value}% OFF`
            : `₹${product.offer.value} OFF`}
        </div>
      )}

      {/* IMAGE */}
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50 to-white">

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-5 transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* CONTENT */}
      <div className="mt-6">

        <div className="flex items-start justify-between gap-4">

          <h3 className="line-clamp-2 text-base font-semibold leading-relaxed text-gray-800">
            {product.name}
          </h3>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-300 group-hover:rotate-45">
            <ArrowUpRight size={18} />
          </div>

        </div>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold text-blue-700">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>

          {product.offer && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          )}

        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {product.description}
        </p>

      </div>

    </Link>
  )
}