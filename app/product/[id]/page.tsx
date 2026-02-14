import { products } from '@/lib/products'

export default function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = products.find(
    (p) => p.id === params.id
  )

  if (!product) return <div>Product not found</div>

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full"
      />

      <div>
        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>
        <p className="text-green-600 text-xl mt-4">
          ₹{product.price}
        </p>

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
