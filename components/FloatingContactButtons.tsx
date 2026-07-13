"use client"

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Call Button */}
      <a
        href="tel:+919148733700"
        className="
          flex items-center gap-3
          bg-[#0391B6] hover:bg-[#027A99]
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
  bg-[#25D366] hover:bg-[#1DA851]
  text-white
  px-5 py-3
  rounded-full
  shadow-2xl
  transition-all duration-300
  hover:scale-105 hover:shadow-[0_10px_30px_rgba(37,211,102,0.35)]
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