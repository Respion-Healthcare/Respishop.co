import ProductCard from "./ProductCard"

type ProductGridProps = {
  products: any[]
}

export default function ProductGrid({
  products,
}: ProductGridProps) {

  return (
    <section className="mt-20">

      <div className="flex items-center justify-between gap-6 mb-10">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Premium Collection
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Products
          </h2>

        </div>

        <div className="hidden md:flex items-center rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700">
          {products.length} Products Available
        </div>

      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))}

      </div>

    </section>
  )
}