export default function PrivacyPage() {
  return (
    <main className="pt-[120px] min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            At Respishop, we value your privacy and are committed
            to protecting your personal information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            1. Information We Collect
          </h2>
          <p>
            We may collect your name, email, phone number, and shipping
            address when you place an order or contact us.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            2. How We Use Information
          </h2>
          <p>
            Your information is used to process orders, provide customer
            support, and improve our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            3. Data Protection
          </h2>
          <p>
            We implement security measures to safeguard your personal data
            against unauthorized access.
          </p>
        </div>
      </div>
    </main>
  )
}
