import Image from "next/image"

const partners = [
  {
    name: "ResMed",
    logo: "/images/Authorised partner/resmed.jpg",
  },
  {
    name: "Oxymed",
    logo: "/images/Authorised partner/oxymed.jpg",
  },
  {
    name: "BMC",
    logo: "/images/Authorised partner/bmc.png",
  },
  {
    name: "Philips",
    logo: "/images/Authorised partner/philips.png",
  },
  {
    name: "Nidek",
    logo: "/images/Authorised partner/nidek.png",
  },
]

export default function AuthorizedPartners() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Respishop",
    description:
      "Authorized supplier of CPAP machines, BiPAP machines, oxygen concentrators and respiratory care equipment.",
    partner: partners.map((partner) => ({
      "@type": "Organization",
      name: partner.name,
    })),
  }

  return (
    <section className="relative overflow-hidden py-24">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Bluish Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-100" />

      <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-sm font-semibold text-cyan-700 backdrop-blur-md">
            🤝 Authorized Medical Equipment Partners
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
              Authorized Partners for CPAP, BiPAP &
              <br />
              Oxygen Therapy Equipment
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
            Respishop is an authorized partner and trusted supplier of leading
            respiratory care brands including ResMed, Oxymed, BMC, Philips and
            Nidek. We provide genuine CPAP machines, BiPAP machines, oxygen
            concentrators, masks, accessories and sleep therapy solutions
            supported by manufacturer warranties and expert assistance.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                group relative overflow-hidden rounded-3xl
                border border-cyan-100/70
                bg-white/70
                p-8
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(14,165,233,0.08)]
                transition-all duration-500
                hover:-translate-y-3
                hover:border-cyan-300
                hover:shadow-[0_20px_60px_rgba(14,165,233,0.25)]
              "
            >
              {/* Animated Top Border */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full" />

              {/* Blue Spotlight */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>

              {/* Logo */}
              <div className="relative flex h-24 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Authorized Partner Logo - CPAP, BiPAP and Oxygen Therapy Equipment`}
                  width={180}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              {/* Partner Name */}
              <div className="relative mt-5 text-center">
                <h3 className="font-semibold text-slate-700 transition-all duration-300 group-hover:text-cyan-600">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 flex justify-center">
          <div className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-5 shadow-lg backdrop-blur-md">
            <p className="text-center text-sm text-slate-700">
              Trusted supplier of
              <span className="mx-2 font-bold text-cyan-600">
                CPAP Machines, BiPAP Machines, Oxygen Concentrators &
                Respiratory Care Equipment
              </span>
              from leading global manufacturers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}