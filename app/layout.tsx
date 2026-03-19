import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"

export const metadata: Metadata = {
  metadataBase: new URL("https://respishop.co.in"),
  title: {
    default: "Respishop | CPAP, BiPAP & Sleep Apnea Machines India",
    template: "%s | Respishop",
  },
  description:
    "Respishop provides CPAP machines, BiPAP machines, oxygen concentrators and sleep apnea equipment online in India.",
  keywords: [
    "CPAP Machine India",
    "BiPAP Machine India",
    "Sleep Apnea Machine",
    "Oxygen Concentrator India",
    "Respishop",
  ],

  openGraph: {
    title: "Respishop - CPAP & BiPAP Machines",
    description:
      "Buy CPAP, BiPAP machines and sleep apnea equipment online in India.",
    url: "https://respishop.co.in",
    siteName: "Respishop",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0">

        {/* Cart Provider Added */}
        <CartProvider>

          {/* <Header /> */}

          {/* Only offset content — NOT body */}
          <div className="pt-[70px] lg:pt-[95px]">
            {children}
          </div>
          {/* 
          <Footer /> */}

        </CartProvider>

      </body>
    </html>
  )
}