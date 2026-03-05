export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white rounded-xl shadow-sm p-10 text-center">
          <p className="text-gray-500 text-lg">
            Your cart is currently empty.
          </p>

          <a
            href="/products"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  )
}
