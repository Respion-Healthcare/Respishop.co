import ProductBannerCard from "./ProductBannerCard"

export default function ProductBannerGrid() {
  const products = [
    {
      category: "CPAP MASKS",
      title: "Resmed AirFit™ F20 Full Face Mask",
      price: "₹3,290.00",
      image: "/images/Product1.jpg",
    },
    {
      category: "BIPAP MACHINES",
      title: "Resmed Lumis 100 VPAP ST",
      price: "₹49,900.00",
      image: "/images/product2.jpg",
    },
    {
      category: "BIPAP MACHINES",
      title: "Resmed Lumis™ 150 VPAP ST",
      price: "₹69,000.00",
      image: "/images/product3.webp",
    },
    {
      category: "CPAP MACHINES",
      title: "AirMini™ AutoSet CPAP Device",
      price: "₹49,900.00",
      image: "/images/product4.webp",
    },
    {
      category: "CPAP MACHINES",
      title: "AirSense™ 11 AutoSet™ 4G- Tripack",
      price: "₹79,000.00",
      image: "/images/product5.webp",
    },
    {
      category: "CPAP MACHINES",
      title: "AirSense™ 11 AutoSet™ (Single Pack)",
      price: "₹69,000.00",
      image: "/images/product6.jpg",
    },
  ]

  return (
    <section className="w-full px-10 lg:px-20 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <ProductBannerCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}
