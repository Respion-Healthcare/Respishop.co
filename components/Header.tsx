"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  ChevronDown,
} from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [masksOpen, setMasksOpen] = useState(true)
  const [sleepOpen, setSleepOpen] = useState(true)
  const [accessoryOpen, setAccessoryOpen] = useState(true)
  const [rentalOpen, setRentalOpen] = useState(true)

  const [productsOpen, setProductsOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  const { cart } = useCart()

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const handleSearch = () => {
    if (!searchQuery.trim()) return

    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    setSearchQuery("")
  }

  useEffect(() => {
    setProductsOpen(false)
  }, [pathname])

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

    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
  }, [])

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-[#BFEAF3] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-[74px] flex items-center justify-between">

        {/* LOGO */}
        <Link
  href="/"
  aria-label="Respishop Home"
  className="text-4xl font-serif font-semibold text-[#0391B6] tracking-tight"
>
  <span className="sr-only">
    Respishop - CPAP & BiPAP Machines India
  </span>

  Respishop
</Link>
        {/* DESKTOP NAV */}
        <nav
  aria-label="Main Navigation"
          ref={dropdownRef}
          className="hidden lg:flex items-center gap-8 text-gray-700 font-medium relative"
        >
          <Link
            href="/"
            className="hover:text-[#0391B6] transition"
          >
            Home
          </Link>

          {/* PRODUCTS */}
          <div className="relative">
            <button
              onClick={() =>
                setProductsOpen(!productsOpen)
              }
              className="flex items-center gap-1 hover:text-[#0391B6] transition"
            >
              Products

              <ChevronDown
                className={`w-4 h-4 transition ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[58px] w-[980px] rounded-[32px] border border-[#BFEAF3] bg-white/95 backdrop-blur-2xl shadow-[0_20px_80px_rgba(37,99,235,0.15)] p-10">

                {/* TOP GRID */}
                <div className="grid grid-cols-4 gap-10">

                  {/* MASKS */}
                  <div>
                    <button
                      onClick={() =>
                        setMasksOpen(!masksOpen)
                      }
                      className="flex items-center justify-between w-full mb-5"
                    >
                      <h3 className="font-semibold text-[#0391B6] text-lg">
                        Masks
                      </h3>

                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          masksOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {masksOpen && (
                      <ul className="space-y-3 text-[15px] text-gray-600">
                        <li>
                          <Link
                            href="/products/nasal-mask"
                            className="hover:text-[#0391B6] transition"
                          >
                            Nasal Mask
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/nasal-pillow-mask"
                            className="hover:text-[#0391B6] transition"
                          >
                            Nasal Pillow Mask
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/full-face-mask"
                            className="hover:text-[#0391B6] transition"
                          >
                            Full Face Mask
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* SLEEP APNEA DEVICES */}
                  <div>
                    <button
                      onClick={() =>
                        setSleepOpen(!sleepOpen)
                      }
                      className="flex items-center justify-between w-full mb-5"
                    >
                      <h3 className="font-semibold text-[#0391B6] text-lg">
                        Sleep Apnea Devices
                      </h3>

                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          sleepOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {sleepOpen && (
                      <ul className="space-y-3 text-[15px] text-gray-600">
                        <li>
                          <Link
                            href="/products/cpap-machine"
                            className="hover:text-[#0391B6] transition"
                          >
                            CPAP Machines
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/bipap-machine"
                            className="hover:text-[#0391B6] transition"
                          >
                            BiPAP Machines
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/oxygen-concentrator"
                            className="hover:text-[#0391B6] transition"
                          >
                            Oxygen Concentrators
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* ACCESSORIES */}
                  <div>
                    <button
                      onClick={() =>
                        setAccessoryOpen(!accessoryOpen)
                      }
                      className="flex items-center justify-between w-full mb-5"
                    >
                      <h3 className="font-semibold text-[#0391B6] text-lg">
                        Accessories
                      </h3>

                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          accessoryOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {accessoryOpen && (
                      <ul className="space-y-3 text-[15px] text-gray-600">
                        <li>
                          <Link
                            href="/products/tubes-and-connectors"
                            className="hover:text-[#0391B6] transition"
                          >
                          Tubes & Connectors 
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/filters-cleaners"
                            className="hover:text-[#0391B6] transition"
                          >
                            Filters & Cleaners
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/humidifier-bottle"
                            className="hover:text-[#0391B6] transition"
                          >
                            Humidifiers & Bottles
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/mask-headgear"
                            className="hover:text-[#0391B6] transition"
                          >
                            Frames & Headgear
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/mask-cushion"
                            className="hover:text-[#0391B6] transition"
                          >
                            Mask Cushions
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/mask-clips"
                            className="hover:text-[#0391B6] transition"
                          >
                            Mask Pad & Clips
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* RENTAL */}
                  <div>
                    <button
                      onClick={() =>
                        setRentalOpen(!rentalOpen)
                      }
                      className="flex items-center justify-between w-full mb-5"
                    >
                      <h3 className="font-semibold text-[#0391B6] text-lg">
                        CPAP / BiPAP Rental
                      </h3>

                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          rentalOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {rentalOpen && (
                      <ul className="space-y-3 text-[15px] text-gray-600">
                        <li>
                          <Link
                            href="/products/rental"
                            className="hover:text-[#0391B6] transition"
                          >
                            CPAP Rental
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/rental"
                            className="hover:text-[#0391B6] transition"
                          >
                            BiPAP Rental
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>

                {/* BEST SELLERS */}
                <div className="mt-10 pt-8 border-t border-[#BFEAF3]">

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Best Selling Products
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Most trusted sleep therapy &
                        respiratory care products
                      </p>
                    </div>

                    <Link
                      href="/products"
                      className="text-[#0391B6] font-medium hover:underline"
                    >
                      View All →
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-4">

                    {[
                      {
                        name: "Resmed AirFit N20",
                        href: "/products/nasal-mask/resmed-airfit-n20-nasal-mask",
                      },
                      {
                        name: "AirSense 10 AutoSet",
                        href: "/products/cpap-machine/resmed-airsense-10-autoset-tripack",
                      },
                      {
                        name: "Lumis 100 VPAP ST",
                        href: "/products/bipap-machine/lumis-100-vpap-st",
                      },
                      {
                        name: "AirMini AutoSet",
                        href: "/products/cpap-machine/airmini-autoset-cpap-device",
                      },
                      {
                        name: "AirFit F20 Full Face",
                        href: "/products/full-face-mask/resmed-airfit-f20-full-face-mask",
                      },
                      {
                        name: "AirSense 11 AutoSet",
                        href: "/products/cpap-machine/airsense-11-autoset-single-pack",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="rounded-2xl border border-[#BFEAF3] bg-[#EAF8FC]/60 hover:bg-[#0391B6] hover:text-white transition-all duration-300 p-4 text-sm font-medium text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="hover:text-[#0391B6] transition"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#0391B6] transition"
          >
            Contact
          </Link>

          <Link
            href="/blog"
            className="hover:text-[#0391B6] transition"
          >
            Blogs
          </Link>
        </nav>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center bg-gray-100/80 border border-gray-200 rounded-full px-5 h-[46px] w-[320px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && handleSearch()
            }
            placeholder="Search CPAP machines, BiPAP machines, masks..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700"
          />

          <Search
            onClick={handleSearch}
            className="w-4 h-4 cursor-pointer text-gray-500"
          />
        </div>

        {/* ICONS */}
        <div className="hidden lg:flex items-center gap-6">

          <Link
            href="/wishlist"
            className="hover:text-[#0391B6] transition"
          >
            <Heart className="w-6 h-6" />
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-[#0391B6] transition"
          >
            <ShoppingBag className="w-6 h-6" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#0391B6] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/account"
            className="hover:text-[#0391B6] transition"
          >
            <User className="w-6 h-6" />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[74px] left-0 w-full bg-white border-t shadow-xl z-50">

          <div className="px-5 py-5 space-y-5">

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 h-[44px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleSearch()
                }
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm"
              />

              <Search
                onClick={handleSearch}
                className="w-4 h-4 text-gray-500"
              />
            </div>

            {/* LINKS */}
            <div className="flex flex-col text-[15px] font-medium text-gray-800">

              <Link
                href="/"
                onClick={closeMobileMenu}
                className="py-3 border-b"
              >
                Home
              </Link>

              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="py-3 border-b"
              >
                Products
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="py-3 border-b"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="py-3 border-b"
              >
                Contact
              </Link>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="py-3"
              >
                Blogs
              </Link>
            </div>

            {/* ICONS */}
            <div className="flex justify-around pt-5 border-t">

              <Link href="/wishlist">
                <Heart className="w-5 h-5" />
              </Link>

              <Link
                href="/cart"
                className="relative"
              >
                <ShoppingBag className="w-5 h-5" />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#0391B6] text-white text-xs px-1 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link href="/account">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}