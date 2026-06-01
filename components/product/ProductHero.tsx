// components/product/ProductHero.tsx

type ProductHeroProps = {
  title: string
  description: string
}

export default function ProductHero({
  title,
  description,
}: ProductHeroProps) {

  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 py-14 md:px-12 md:py-20 text-white shadow-[0_20px_80px_rgba(37,99,235,0.35)]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover"></div>

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl">

        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-xl">
          Trusted Respiratory Care Solutions
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
          {description}
        </p>

        {/* TRUST BADGES */}
        <div className="mt-10 flex flex-wrap gap-4">

          <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
            Fast Delivery Across India
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
            Genuine Products
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
            Expert Respiratory Support
          </div>

        </div>

      </div>

    </section>
  )
}