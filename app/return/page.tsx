import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Return & Refund Policy | Respishop",
  description:
    "Read Respishop's return, replacement, and refund policy for CPAP machines, BiPAP machines, oxygen concentrators, masks, and accessories.",
}

export default function ReturnPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Return & Refund Policy
      </h1>

      <p className="mb-6 text-gray-600">
        Last Updated: June 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-7">

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Return Eligibility
          </h2>
          <p>
            We accept returns only for products that are damaged,
            defective, incorrectly delivered, or have missing parts.
            Return requests must be initiated within 7 days of delivery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Non-Returnable Products
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opened or used CPAP/BiPAP masks</li>
            <li>Opened hygiene-related products</li>
            <li>Products damaged by misuse</li>
            <li>Customized or special-order products</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Return Conditions
          </h2>
          <p>
            Returned products must be unused and in their original
            packaging with all accessories, manuals, invoices, and
            warranty cards included.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Return Process
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Contact our support team with your Order ID.</li>
            <li>Provide photos/videos of the issue.</li>
            <li>Our team will verify the request.</li>
            <li>Pickup or return instructions will be shared.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Refunds
          </h2>
          <p>
            Once the returned product is received and inspected,
            approved refunds will be processed to the original payment
            method within 5–7 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Replacements
          </h2>
          <p>
            Eligible products may be replaced instead of refunded,
            subject to stock availability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Contact Us
          </h2>
          <p>
            For return or refund assistance, please contact our support
            team.
          </p>

          <div className="mt-3">
            <p>Email: respishop.in@gmail.com</p>
            <p>Phone: +91 9148733700</p>
          </div>
        </section>

      </div>
    </main>
  )
}