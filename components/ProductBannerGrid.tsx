import Link from "next/link"
import ProductBannerCard from "./ProductBannerCard"

export default function ProductBannerGrid() {
  const products = [
    {
      category: "CPAP MASKS",
      title: "Resmed AirFit™ F20 Full Face Mask",
      slug: "resmed-airfit-f20-full-face-mask",
      price: "₹3,290.00",
      image: "/images/Product1.jpg",
    },
    {
      category: "BIPAP MACHINES",
      title: "Resmed Lumis 100 VPAP ST",
      slug: "resmed-lumis-100-vpap-st",
      price: "₹49,900.00",
      image: "/images/Product2.jpg",
    },
    {
      category: "BIPAP MACHINES",
      title: "Resmed Lumis™ 150 VPAP ST",
      slug: "resmed-lumis-150-vpap-st",
      price: "₹69,000.00",
      image: "/images/Product3.webp",
    },
    {
      category: "CPAP MACHINES",
      title: "AirMini™ AutoSet CPAP Device",
      slug: "airmini-autoset-cpap-device",
      price: "₹49,900.00",
      image: "/images/Product4.webp",
    },
    {
      category: "CPAP MACHINES",
      title: "AirSense™ 11 AutoSet™ 4G- Tripack",
      slug: "airsense-11-autoset-4g-tripack",
      price: "₹79,000.00",
      image: "/images/Product5.webp",
    },
    {
      category: "CPAP MACHINES",
      title: "AirSense™ 11 AutoSet™ (Single Pack)",
      slug: "airsense-11-autoset-single-pack",
      price: "₹69,000.00",
      image: "/images/Product6.jpg",
    },
  ]

  return (
    <section className="w-full px-10 lg:px-20 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/products/${product.slug}`}
            className="block"
          >
            <ProductBannerCard {...product} />
          </Link>
        ))}
      </div>
    </section>
  )
}