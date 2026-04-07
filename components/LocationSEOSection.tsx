'use client'

import Link from "next/link"

const locations = [
  { name: "Bhubaneswar", slug: "bhubaneswar" },
  { name: "Cuttack", slug: "cuttack" },
  { name: "Ranchi", slug: "ranchi" },
  { name: "Patna", slug: "patna" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Delhi", slug: "delhi" },
  { name: "Mumbai", slug: "mumbai" },
]

export default function LocationSEOSection() {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          CPAP Machines Near You
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/cpap-machine/${loc.slug}`}
              className="px-4 py-2 bg-white border rounded-full hover:bg-black hover:text-white transition text-sm"
            >
              {loc.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}