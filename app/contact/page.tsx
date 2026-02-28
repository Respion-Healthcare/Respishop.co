"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="pt-[120px] min-h-screen bg-gray-100">

      {/* TOP SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          We're always eager to hear from you!
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          You can call us in working time or visit our office.
          All mails will get the response within 24 hours.
          <br />
          Love to hear from you!
        </p>

        {/* CONTACT INFO ROW */}
        <div className="grid md:grid-cols-3 gap-12 mt-16 text-left">

          {/* ADDRESS */}
          <a
            href="https://maps.google.com/?q=702,13th Cross Rd,J.P Nagar,Bengaluru,560078"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition"
          >
            <MapPin className="text-blue-500 w-7 h-7 mt-1 group-hover:scale-110 transition" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">
                702, 13th Cross Rd, 1st Phase, J.P Nagar, <br />
                Bengaluru, Karnataka, 560078
              </p>
            </div>
          </a>

          {/* CONTACT */}
          <a
            href="tel:+919148733700"
            className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition"
          >
            <Phone className="text-blue-500 w-7 h-7 mt-1 group-hover:scale-110 transition" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Contact
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                Mobile:{" "}
                <span className="font-medium text-gray-800 underline underline-offset-4">
                  +91 9148733700
                </span>
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:respishop.in@gmail.com"
            className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition"
          >
            <Mail className="text-blue-500 w-7 h-7 mt-1 group-hover:scale-110 transition" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                Email:{" "}
                <span className="font-medium text-gray-800 underline underline-offset-4">
                  respishop.in@gmail.com
                </span>
              </p>
            </div>
          </a>

        </div>
      </section>


      {/* FORM SECTION */}
    {/* FORM SECTION */}
<section className="relative max-w-5xl mx-auto px-6 pb-28">

  {/* Blue Background Glow */}
  <div className="absolute -top-24 left-1/2 -translate-x-1/2 
                  w-[750px] h-[350px] 
                  bg-blue-300/40 rounded-full blur-[120px] opacity-70">
  </div>

  <div className="relative">

    <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-14">
      Ask us anything here
    </h2>

    {/* Premium Gradient Border Wrapper */}
    <div className="relative rounded-3xl p-[2px] 
                    bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 
                    shadow-2xl shadow-blue-300/40">

      {/* Glass Card */}
      <div className="bg-white/90 backdrop-blur-2xl 
                      rounded-3xl p-10 md:p-14">

        <form className="space-y-8">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-white 
                         p-4 rounded-full 
                         border border-gray-300 
                         outline-none 
                         focus:ring-2 focus:ring-blue-400 
                         focus:border-blue-400 
                         transition-all duration-300"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-white 
                         p-4 rounded-full 
                         border border-gray-300 
                         outline-none 
                         focus:ring-2 focus:ring-blue-400 
                         focus:border-blue-400 
                         transition-all duration-300"
            />
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white 
                         p-4 rounded-full 
                         border border-gray-300 
                         outline-none 
                         focus:ring-2 focus:ring-blue-400 
                         focus:border-blue-400 
                         transition-all duration-300"
            />

            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-white 
                         p-4 rounded-full 
                         border border-gray-300 
                         outline-none 
                         focus:ring-2 focus:ring-blue-400 
                         focus:border-blue-400 
                         transition-all duration-300"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full bg-white 
                       p-6 rounded-2xl 
                       border border-gray-300 
                       outline-none 
                       focus:ring-2 focus:ring-blue-400 
                       focus:border-blue-400 
                       transition-all duration-300 resize-none"
          ></textarea>

          {/* BUTTON */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 
                         hover:from-blue-600 hover:to-blue-700 
                         text-white px-12 py-4 rounded-full 
                         shadow-lg shadow-blue-300/40 
                         transition-all duration-300 
                         hover:-translate-y-1 hover:shadow-xl"
            >
              Send Message
            </button>
          </div>

        </form>

      </div>
    </div>

  </div>

</section>
    </main>
  )
}