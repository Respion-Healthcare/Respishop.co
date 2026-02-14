"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react"

export default function Header() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down
        setVisible(false)
      } else {
        // Scrolling Up
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#f3f3f3] border-b transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-4xl font-serif font-semibold text-blue-700">
          Respishop
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-6 py-3 w-[500px] shadow-sm">
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 outline-none text-gray-600"
          />
          <Search className="text-teal-600 w-5 h-5" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          
          <Heart className="w-6 h-6 text-gray-700 cursor-pointer" />

          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <User className="w-6 h-6 text-gray-700 cursor-pointer" />

          <Menu className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>

      </div>
    </header>
  )
}
