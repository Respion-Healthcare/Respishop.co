export default function TrustBadges() {
  return (
    <section className="py-10 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm">
          <div className="text-3xl mb-3">✅</div>

          <h3 className="font-semibold text-gray-900">
            Authorized Dealer
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Genuine Medical Equipment
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm">
          <div className="text-3xl mb-3">🧾</div>

          <h3 className="font-semibold text-gray-900">
            GST Invoice
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Tax Invoice Included
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm">
          <div className="text-3xl mb-3">💳</div>

          <h3 className="font-semibold text-gray-900">
            EMI Available
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Easy Payment Options
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm">
          <div className="text-3xl mb-3">🚚</div>

          <h3 className="font-semibold text-gray-900">
            PAN India Delivery
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Fast & Secure Shipping
          </p>
        </div>

      </div>
    </section>
  )
}