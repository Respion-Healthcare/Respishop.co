import type { Metadata } from "next"
import Link from "next/link"

import BestSellingSection from "@/components/BestSellingSection"
import DealOfTheDay from "@/components/DealOfTheDaySection"
import Hero from "@/components/Hero"
import ProductBannerGrid from "@/components/ProductBannerGrid"
import ReviewsSection from "@/components/Review"
import Footer from "@/components/Footer"
import ShopCategories from "@/components/ShopCategories"

export const metadata: Metadata = {
  title: "Buy CPAP & BiPAP Machines in India | Respishop",
  description:
    "Buy CPAP machines, BiPAP machines and oxygen concentrators online in India.",
  keywords: [
    "CPAP Machine India",
    "BiPAP Machine India",
    "Sleep Apnea Machine",
  ],
  openGraph: {
    title: "Respishop CPAP & BiPAP Machines",
    description: "Buy sleep apnea machines online in India",
    url: "https://respishop.co.in",
    siteName: "Respishop",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductBannerGrid />
      <ShopCategories />
      <BestSellingSection />
      <DealOfTheDay />

      {/* 🔥 NEW SEO SECTION (VERY IMPORTANT) */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          CPAP Machines Near You
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          
          <Link
            href="/cpap-machine/bhubaneswar"
            className="border p-4 rounded-lg hover:shadow transition"
          >
            CPAP Machine in Bhubaneswar
          </Link>

          <Link
            href="/cpap-machine/ranchi"
            className="border p-4 rounded-lg hover:shadow transition"
          >
            CPAP Machine in Ranchi
          </Link>

          <Link
            href="/cpap-machine/patna"
            className="border p-4 rounded-lg hover:shadow transition"
          >
            CPAP Machine in Patna
          </Link>

        </div>
      </section>

      <ReviewsSection />
      <Footer />
    </>
  )
}