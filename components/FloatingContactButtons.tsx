"use client"

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Call Button */}
      <a
        href="tel:+919148733700"
        className="
          flex items-center gap-3
          bg-blue-600 hover:bg-blue-700
          text-white
          px-5 py-3
          rounded-full
          shadow-2xl
          transition-all duration-300
          hover:scale-105
        "
      >
        <span className="text-lg">📞</span>

        <span className="font-semibold hidden sm:block">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919148733700"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3
          bg-green-500 hover:bg-green-600
          text-white
          px-5 py-3
          rounded-full
          shadow-2xl
          transition-all duration-300
          hover:scale-105
        "
      >
        <span className="text-lg">💬</span>

        <span className="font-semibold hidden sm:block">
          WhatsApp
        </span>
      </a>

    </div>
  )
}