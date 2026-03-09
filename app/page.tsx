import type { Metadata } from "next"
import BestSellingSection from "@/components/BestSellingSection"
import DealOfTheDay from "@/components/DealOfTheDaySection"
import Hero from "@/components/Hero"
import ProductBannerGrid from "@/components/ProductBannerGrid"
import ReviewsSection from "@/components/Review"
import Footer from "@/components/Footer"

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
      <BestSellingSection />
      <DealOfTheDay />
      <ReviewsSection />
      <Footer />
    </>
  )
}