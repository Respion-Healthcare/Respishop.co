export default function ShippingPage() {
  return (
    <main className="pt-[120px] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Shipping Policy
        </h1>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            We aim to deliver your orders quickly and safely across India.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            1. Processing Time
          </h2>
          <p>
            Orders are processed within 1–2 business days after payment
            confirmation.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            2. Delivery Time
          </h2>
          <p>
            Delivery usually takes 3–7 business days depending on your
            location.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            3. Shipping Charges
          </h2>
          <p>
            Shipping charges (if applicable) will be displayed during
            checkout before payment.
          </p>
        </div>
      </div>
    </main>
  )
}
