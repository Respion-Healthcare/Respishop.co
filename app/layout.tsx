import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://respishop.in"),

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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Respishop - CPAP & BiPAP Machines",
    description:
      "Buy CPAP, BiPAP machines and sleep apnea equipment online in India.",
    url: "https://respishop.in",
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
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>

      <body className="m-0 p-0">
        <CartProvider>
          <Header />

          <div className="pt-[70px] lg:pt-[95px]">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}