"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8fbff] border-t border-blue-100">

      {/* Soft Ambient Blue */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px]"></div>

      {/* Thin Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

      <div className="relative w-full px-10 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-3">

            <Link
              href="/"
              className="inline-block text-3xl font-serif font-semibold text-blue-700 tracking-wide"
            >
              Respishop
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Buy CPAP machines, BiPAP machines, oxygen concentrators,
              CPAP masks and sleep apnea equipment online in India with
              fast delivery and trusted respiratory care support.
            </p>

            <div className="flex gap-5 pt-2">

              <a
                href="https://www.facebook.com/profile.php?id=61576509153350"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Respishop Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Respishop YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/respishop_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Respishop Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-500 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold text-blue-800 mb-3 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/about"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products/cpap-machine"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  CPAP Machines
                </Link>
              </li>

              <li>
                <Link
                  href="/products/bipap-machine"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  BiPAP Machines
                </Link>
              </li>

              <li>
                <Link
                  href="/category/mask"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  CPAP Masks
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Our Company */}
          <div>

            <h3 className="text-lg font-semibold text-blue-800 mb-3 tracking-wide">
              Our Company
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/terms"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/return"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="block px-2 py-1 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  Our Blogs
                </Link>
              </li>

            </ul>
          </div>

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
                  href="tel:+919148733700"
                  className="hover:text-blue-700 transition duration-300"
                >
                  +91 9148733700
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-100 py-3 text-center text-sm text-gray-500 bg-[#f3f8ff]">
        © 2026 Respishop. All Rights Reserved.
      </div>
    </footer>
  )
}