export default function TermsPage() {
  return (
    <main className="pt-[120px] min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Premium Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-14 space-y-12 text-gray-700 leading-relaxed">

          {/* Header */}
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              📜 Terms & Conditions
            </h1>
            <p className="text-gray-600 text-lg">
              <span className="mr-6">📅 13 January 2026</span>
              <span>🌐 https://respishop.in</span>
            </p>
          </div>

          {/* Intro */}
          <section>
            <p className="text-lg text-gray-800">
              By accessing or using <strong>Respishop</strong>, you agree to be
              legally bound by these Terms & Conditions, along with our Privacy,
              Cookie, Shipping, and Refund Policies. If you do not agree,
              please discontinue use of the platform.
            </p>
          </section>

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              🏢 Introduction
            </h2>
            <p>
              Respishop is a marketplace platform connecting buyers and vendors.
              We provide a digital platform for browsing and purchasing products.
              Unless explicitly stated, Respishop does not manufacture, stock,
              or directly ship products listed by vendors.
            </p>
          </section>

          {/* Account Registration */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              👤 Account Registration
            </h2>
            <ul className="space-y-3">
              <li>• You must be 18 years or older to create an account.</li>
              <li>• Provide accurate and complete registration details.</li>
              <li>• Maintain confidentiality of your login credentials.</li>
              <li>• Accounts violating policies may be suspended or terminated.</li>
            </ul>
          </section>

          {/* Responsibilities */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              🤝 Vendor & Buyer Responsibilities
            </h2>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Vendor Obligations</h3>
              <ul className="space-y-2">
                <li>• Ensure product accuracy, quality, and timely delivery.</li>
                <li>• Communicate delays or issues promptly.</li>
                <li>• Provide refund or alternate resolution if unable to fulfill orders.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Buyer Obligations</h3>
              <ul className="space-y-2">
                <li>• Complete payment for confirmed orders.</li>
                <li>• Communicate directly with vendors regarding issues.</li>
                <li>• Acknowledge that Respishop is not party to vendor contracts.</li>
              </ul>
            </div>
          </section>

          {/* Prohibited */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              🚫 Prohibited Activities
            </h2>
            <ul className="space-y-2">
              <li>• Violating applicable laws.</li>
              <li>• Posting misleading or illegal content.</li>
              <li>• Fraudulent or abusive conduct.</li>
              <li>• Interfering with platform systems.</li>
              <li>• Misusing personal data.</li>
            </ul>
            <p className="text-sm text-gray-500">
              Violations may result in suspension, termination, or legal action.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              © Intellectual Property
            </h2>
            <p>
              All Respishop branding, content, software, and design elements
              are protected under intellectual property laws. Commercial use
              without written permission is strictly prohibited.
            </p>
          </section>

          {/* Policies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              🍪 Cookie Policy
            </h2>
            <p>
              We use cookies and tracking technologies to enhance user experience
              and analyze website traffic. Disabling cookies may affect functionality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              💰 Refund Policy
            </h2>
            <p>
              Respishop does not directly provide refunds. All disputes must be
              resolved between buyer and vendor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              🚚 Shipping Policy
            </h2>
            <p>
              Vendors are solely responsible for shipping, logistics,
              and delivery timelines.
            </p>
          </section>

          {/* Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              ⚖ Limitation of Liability
            </h2>
            <p>
              Respishop is not liable for vendor performance, disputes,
              or third-party services. Use of the platform is at your own risk.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              🏛 Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India.
              Disputes shall fall under the jurisdiction of Indian courts.
            </p>
          </section>

          {/* Changes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              🔄 Changes to Terms
            </h2>
            <p>
              We may update these Terms at any time. Continued use of the
              platform indicates acceptance of changes.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📞 Contact Information
            </h2>
            <p>
              <strong>Respishop</strong> <br />
              Email: respishop.in@gmail.com <br />
              Phone: +91 9148733700 <br />
              Website: https://respishop.in <br />
              Working Hours: Monday – Friday (09:00 AM – 06:00 PM)
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}