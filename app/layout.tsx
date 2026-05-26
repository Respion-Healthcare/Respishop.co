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
    title: "Respishop | CPAP, BiPAP & Sleep Apnea Machines India",
    description:
      "Buy CPAP machines, BiPAP machines, oxygen concentrators and sleep apnea equipment online in India from Respishop.",
    url: "https://respishop.in",
    siteName: "Respishop",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Respishop CPAP Machines India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Respishop | CPAP & BiPAP Machines India",
    description:
      "Shop CPAP machines, BiPAP machines and sleep apnea equipment online.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          src="https://www.googletagmanager.com/gtag/js?id=G-91XR73J4XT"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-91XR73J4XT');
          `}
        </Script>

        {/* ✅ Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Respishop",
              "url": "https://respishop.in",
              "logo": "https://respishop.in/logo.png",
              "sameAs": [
                "https://www.instagram.com/",
                "https://www.facebook.com/"
              ]
            }
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