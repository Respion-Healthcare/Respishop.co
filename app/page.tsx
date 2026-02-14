import BestSellingSection from "@/components/BestSellingSection"
import DealOfTheDay from "@/components/DealOfTheDaySection"
import Hero from "@/components/Hero"
import ProductBannerGrid from "@/components/ProductBannerGrid"
import ReviewsSection from "@/components/Review"

export default function Home() {
  return (
    <>
      <Hero />
       <ProductBannerGrid />
       <BestSellingSection />
       <DealOfTheDay />
      <ReviewsSection />
      
    </>
  )
}
