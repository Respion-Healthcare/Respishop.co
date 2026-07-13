"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent successfully ✅")

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        alert("Failed to send ❌")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong ❌")
    }
  }

  return (
    <main className="pt-[120px] min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100">

      {/* SEO CONTENT + FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block bg-[#EAF8FC] text-[#0391B6] px-5 py-2 rounded-full text-sm font-medium mb-6">
              Contact Respishop
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Let’s Connect With You
            </h1>

            <p className="text-gray-600 leading-relaxed text-lg mb-10 max-w-xl">
              Have questions about CPAP machines, BiPAP machines, oxygen
              concentrators, sleep apnea therapy, or respiratory care products?
              Our expert team is ready to help you choose the right medical
              equipment and provide complete support for your respiratory health
              needs.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-8">

              {/* ADDRESS */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#0391B6] w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Address
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    702, 13th Cross Rd, 1st Phase,
                    <br />
                    J.P Nagar, Bengaluru,
                    <br />
                    Karnataka 560078
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="text-[#0391B6] w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Call Us
                  </h2>

                  <p className="text-gray-600 mb-1">
                    Speak directly with our support team
                  </p>

                  <a
                    href="tel:+919148733700"
                    className="text-[#0391B6] font-semibold text-lg hover:underline"
                  >
                    +91 9148733700
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="text-[#0391B6] w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Email Us
                  </h2>

                  <p className="text-gray-600 mb-1">
                    We usually reply within 24 hours
                  </p>

                  <a
                    href="mailto:respishop.in@gmail.com"
                    className="text-[#0391B6] font-semibold hover:underline break-all"
                  >
                    respishop.in@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* SEO TEXT */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted Respiratory Care & Sleep Therapy Solutions
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Respishop provides premium CPAP machines, BiPAP devices,
                oxygen concentrators, masks, humidifiers, and sleep therapy
                accessories across India. Our respiratory care specialists
                assist patients with sleep apnea treatment, home respiratory
                support, and advanced breathing care solutions.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-300/20 blur-3xl rounded-full" />

            {/* FORM CARD */}
            <div className="relative bg-white border border-gray-200 shadow-2xl rounded-[32px] p-8 md:p-10">

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h2>

                <p className="text-gray-500 text-sm">
                  Fill out the form below and our team will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full h-12 px-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full h-12 px-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full h-12 px-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-12 px-5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full p-5 rounded-2xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 
                             hover:scale-[1.02] transition-all duration-300
                             text-white font-semibold py-4 rounded-2xl shadow-lg"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>
    </main>
  )
}