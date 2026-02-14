"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative mt-14 overflow-hidden bg-[#f8fbff] border-t border-blue-100">

      {/* Soft Ambient Blue */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px]"></div>

      {/* Thin Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

      {/* Content */}
      <div className="relative w-full px-10 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-semibold text-blue-700 tracking-wide">
              Respishop
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Trusted respiratory healthcare products designed for comfort,
              precision, and modern medical living.
            </p>

            <div className="flex gap-5 pt-2">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "Quick Links",
              links: ["About Us", "BIPAP Machines", "CPAP Masks", "Accessories", "Contact Us"]
            },
            {
              title: "Our Company",
              links: ["Terms & Conditions", "Privacy Policy", "Shipping Policy", "Our Blogs", "Sitemap"]
            }
          ].map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-blue-800 mb-3 tracking-wide">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="block px-2 py-1 rounded-md text-gray-600 transition-all duration-300
                                 hover:text-blue-700 hover:bg-blue-50"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3 tracking-wide">
              Contact Us
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <li>
                702, 13th Cross Rd, 1st Phase, J.P Nagar,
                Bengaluru, Karnataka, 560078
              </li>
              <li>
                <a
                  href="mailto:respishop.in@gmail.com"
                  className="hover:text-blue-700 transition duration-300"
                >
                  respishop.in@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917077720507"
                  className="hover:text-blue-700 transition duration-300"
                >
                  +91 7077720507
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-100 py-3 text-center text-sm text-gray-500 bg-[#f3f8ff]">
        © 2026 Respishop. Crafted with precision.
      </div>
    </footer>
  )
}
