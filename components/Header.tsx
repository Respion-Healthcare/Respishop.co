"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {

  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accessoryOpen, setAccessoryOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  const { cart } = useCart()

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  /* Search handler */
  const handleSearch = () => {
    if (!searchQuery.trim()) return
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    setSearchQuery("")
  }

  /* Close dropdown when route changes */
  useEffect(() => {
    setProductsOpen(false)
    setAccessoryOpen(false)
  }, [pathname])

  /* Hide header on scroll */
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

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* Close dropdown when clicking outside */
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false)
        setAccessoryOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

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
        <nav
          ref={dropdownRef}
          className="hidden lg:flex items-center gap-8 text-gray-700 font-medium relative"
        >

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative">

            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Products
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (

              <div className="absolute left-0 top-full w-[900px] bg-white shadow-xl rounded-xl border p-8">

                <div className="grid grid-cols-2 grid-rows-2 gap-10 text-sm">

                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-700">
                      CPAP & BIPAP Masks
                    </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li><Link href="#">Nasal Mask</Link></li>
                      <li><Link href="#">Nasal Pillow Mask</Link></li>
                      <li><Link href="#">Full Face Mask</Link></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-700">
                      Resmed BIPAP/CPAP Devices
                    </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li><Link href="#">BIPAP Machines</Link></li>
                      <li><Link href="#">CPAP Machines</Link></li>
                      <li><Link href="#">Oxygen Machine</Link></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-700">
                      Rental Products
                    </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li><Link href="#">CPAP & BIPAP Rental</Link></li>
                    </ul>
                  </div>

                  <div className="space-y-4">

                    <button
                      onClick={() => setAccessoryOpen(!accessoryOpen)}
                      className="font-semibold text-blue-700 flex items-center gap-1"
                    >
                      Accessories
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          accessoryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {accessoryOpen && (

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

                    )}

                  </div>

                </div>

                {/* Best Selling */}
                <div className="pt-8 border-t mt-8">

                  <h3 className="font-semibold text-blue-700 mb-4">
                    Hot & Best Selling Products
                  </h3>

                  <ul className="grid grid-cols-3 gap-3 text-gray-600 text-sm">

                    <li><Link href="/products/resmed-airfit-n20-nasal-mask">Resmed Airfit N20 Nasal Mask</Link></li>
                    <li><Link href="/products/resmed-airsense-10-autoset-tripack">Resmed AirSense 10 AutoSet Tripack</Link></li>
                    <li><Link href="/products/resmed-airstart10-auto-cpap">Resmed Airstart10 Auto CPAP</Link></li>
                    <li><Link href="/products/resmed-airfit-f20-full-face-mask">Resmed AirFit F20 Full Face Mask</Link></li>
                    <li><Link href="/products/resmed-lumis-100-vpap-st">Resmed Lumis 100 VPAP ST</Link></li>
                    <li><Link href="/products/resmed-lumis-150-vpap-st">Resmed Lumis 150 VPAP ST</Link></li>
                    <li><Link href="/products/airmini-autoset-cpap">AirMini AutoSet CPAP</Link></li>
                    <li><Link href="/products/airsense-11-autoset-4g-tripack">AirSense 11 AutoSet 4G Tripack</Link></li>
                    <li><Link href="/products/airsense-11-autoset-single-pack">AirSense 11 AutoSet (Single Pack)</Link></li>

                  </ul>

                </div>

              </div>

            )}

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

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center bg-gray-100 border border-black rounded-full px-5 h-[44px] w-[320px]">

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch()
            }}
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-sm text-black placeholder:text-black"
          />

          <Search
            onClick={handleSearch}
            className="w-4 h-4 text-black cursor-pointer"
          />

        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6 text-black">

          <Link href="/wishlist">
            <Heart className="w-6 h-6 hover:text-blue-600 transition" />
          </Link>

          <Link href="/cart">
            <div className="relative">

              <ShoppingBag className="w-6 h-6 hover:text-blue-600 transition" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}

            </div>
          </Link>

          <Link href="/account">
            <User className="w-6 h-6 hover:text-blue-600 transition" />
          </Link>

        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-7 h-7 text-black" />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] p-6" : "max-h-0 overflow-hidden"
        }`}
      >

        <div className="flex flex-col gap-4 text-gray-700">

          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          <Link href="/products" onClick={closeMobileMenu}>Products</Link>
          <Link href="/about" onClick={closeMobileMenu}>About</Link>
          <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
          <Link href="/blogs" onClick={closeMobileMenu}>Blogs</Link>

        </div>

      </div>

    </header>
  )
}