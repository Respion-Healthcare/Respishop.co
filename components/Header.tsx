"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from "lucide-react"

export default function Header() {
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[95px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-4xl font-serif font-semibold text-blue-700">
          Respishop
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium relative">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Products
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 top-full w-[900px] bg-white shadow-xl rounded-xl border p-8 opacity-0 scale-y-95 pointer-events-none transition-all duration-300 origin-top group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto">
              
              <div className="grid grid-cols-4 gap-10 text-sm">

                {/* Column 1 */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-700">
                    Resmed BIPAP/CPAP Devices
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link href="#">BIPAP Machines</Link></li>
                    <li><Link href="#">CPAP Machines</Link></li>
                    <li><Link href="#">Oxygen Machine</Link></li>
                  </ul>

                  <h3 className="font-semibold text-blue-700 pt-4">
                    CPAP & BIPAP Masks
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link href="#">Nasal Mask</Link></li>
                    <li><Link href="#">Nasal Pillow Mask</Link></li>
                    <li><Link href="#">Full Face Mask</Link></li>
                  </ul>

                  <h3 className="font-semibold text-blue-700 pt-4">
                    Rental Products
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link href="#">CPAP & BIPAP Rental</Link></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-700">
                    Accessories
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link href="#">Hose Pipes & Tubes</Link></li>
                    <li><Link href="#">Filters & Cleaners</Link></li>
                    <li><Link href="#">Humidifiers & Bottles</Link></li>
                    <li><Link href="#">Frames & Headgear</Link></li>
                    <li><Link href="#">Mask Cushions</Link></li>
                    <li><Link href="#">Mask Pad & Clips</Link></li>
                    <li><Link href="#">Mask Frame & Vents</Link></li>
                    <li><Link href="#">AirSense 11 Accessories</Link></li>
                    <li><Link href="#">AirMini Accessories</Link></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-700">
                    Hot & Best Selling Products
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link href="#">Resmed Airfit N20 Nasal Mask</Link></li>
                    <li><Link href="#">Resmed AirSense 10 Autoset Tripack</Link></li>
                    <li><Link href="#">Resmed Airstart10 Auto CPAP</Link></li>
                    <li><Link href="#">Resmed AirFit™ F20 Full Face Mask</Link></li>
                    <li><Link href="#">Resmed Lumis 100 VPAP ST</Link></li>
                    <li><Link href="#">Resmed Lumis™ 150 VPAP ST</Link></li>
                    <li><Link href="#">AirMini™ AutoSet CPAP</Link></li>
                    <li><Link href="#">AirSense™ 11 AutoSet™ 4G- Tripack</Link></li>
                    <li><Link href="#">AirSense™ 11 AutoSet™ (Single Pack)</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-blue-600 transition">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <Link href="/blogs" className="hover:text-blue-600 transition">
            Blogs
          </Link>
        </nav>

       {/* Search */}
<div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 h-[44px] w-[320px]">
  <input
    type="text"
    placeholder="Search..."
    className="flex-1 bg-transparent outline-none text-sm text-black placeholder:text-black"
  />
  <Search className="w-4 h-4 text-black" />
</div>


       {/* Icons */}
<div className="flex items-center gap-6 text-black">
  <Link href="/wishlist">
    <Heart className="w-6 h-6 text-black hover:text-blue-600 transition" />
  </Link>

  <Link href="/cart">
    <div className="relative">
      <ShoppingBag className="w-6 h-6 text-black hover:text-blue-600 transition" />
      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        0
      </span>
    </div>
  </Link>

  <Link href="/account">
    <User className="w-6 h-6 text-black hover:text-blue-600 transition" />
  </Link>


          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu className="w-6 h-6 lg:hidden" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] p-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/product">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>
    </header>
  )
}
