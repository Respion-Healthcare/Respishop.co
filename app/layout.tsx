import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <Header />
        {/* Only offset content — NOT body */}
        <div className="pt-[70px] lg:pt-[95px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}