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
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
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

      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-[#EAF8FC]0/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/70 px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm font-semibold text-cyan-700 backdrop-blur-md">
            🤝 Authorized Medical Equipment Partners
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-[#0391B6] to-sky-600 bg-clip-text text-transparent">
              Authorized Partners for CPAP, BiPAP &
              <br />
              Oxygen Therapy Equipment
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 px-2 sm:px-0">
            Respishop is an authorized partner and trusted supplier of leading
            respiratory care brands including ResMed, Oxymed, BMC, Philips and
            Nidek. We provide genuine CPAP machines, BiPAP machines, oxygen
            concentrators, masks, accessories and sleep therapy solutions
            supported by manufacturer warranties and expert assistance.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-5 lg:gap-6 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`
                group relative overflow-hidden rounded-2xl sm:rounded-3xl
                border border-cyan-100/70
                bg-white/70
                p-4 sm:p-6 lg:p-8
                backdrop-blur-xl
                shadow-[0_10px_30px_rgba(14,165,233,0.08)]
                transition-all duration-500
                hover:-translate-y-2 lg:hover:-translate-y-3
                hover:border-cyan-300
                hover:shadow-[0_20px_60px_rgba(14,165,233,0.25)]
                ${partner.name === "Philips" ? "col-start-1 sm:col-auto" : ""}
                ${partner.name === "Nidek" ? "col-start-2 sm:col-auto" : ""}
              `}
            >
              {/* Animated Top Border */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full" />

              {/* Blue Spotlight */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>

              {/* Logo */}
              <div className="relative flex h-16 sm:h-20 lg:h-24 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Authorized Partner Logo - CPAP, BiPAP and Oxygen Therapy Equipment`}
                  width={180}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              {/* Partner Name */}
              <div className="relative mt-3 sm:mt-5 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-slate-700 transition-all duration-300 group-hover:text-cyan-600">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-10 sm:mt-14 lg:mt-16 flex justify-center">
          <div className="rounded-xl sm:rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 sm:px-8 py-4 sm:py-5 shadow-lg backdrop-blur-md">
            <p className="text-center text-xs sm:text-sm leading-relaxed text-slate-700">
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