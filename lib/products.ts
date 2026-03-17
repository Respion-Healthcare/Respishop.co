export type Product = {
  id: number
  slug: string
  name: string
  price: number
  description: string
  images: string[]
  specifications: {
    label: string
    value: string
  }[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: "resmed-airfit-n20-nasal-mask",
    name: "Resmed Airfit N20 Nasal Mask",
    price: 4500,
    description: "Comfortable nasal mask for CPAP users.",
    images: ["/images/banner1.webp", "/images/P9.png"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Category", value: "Mask" }
    ]
  },

  {
    id: 2,
    slug: "resmed-airsense-10-autoset-tripack",
    name: "Resmed AirSense 10 AutoSet Tripack",
    price: 85000,
    description: "Advanced CPAP machine with humidifier.",
    images: ["/images/Product5.webp"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Type", value: "Auto CPAP" }
    ]
  },

  {
    id: 3,
    slug: "resmed-airstart10-auto-cpap",
    name: "Resmed Airstart10 Auto CPAP",
    price: 55000,
    description: "Reliable auto CPAP therapy device.",
    images: ["/images/Product4.webp"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Type", value: "CPAP" }
    ]
  },

  {
    id: 4,
    slug: "resmed-airfit-f20-full-face-mask",
    name: "Resmed AirFit F20 Full Face Mask",
    price: 6500,
    description: "Full face CPAP mask with superior comfort.",
    images: ["/images/Product1.jpg"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Category", value: "Full Face Mask" }
    ]
  },

  {
    id: 5,
    slug: "resmed-lumis-100-vpap-st",
    name: "Resmed Lumis 100 VPAP ST",
    price: 120000,
    description: "Bi-level ventilation support device.",
    images: ["/images/Product2.jpg"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Type", value: "VPAP" }
    ]
  },

  {
    id: 6,
    slug: "resmed-lumis-150-vpap-st",
    name: "Resmed Lumis 150 VPAP ST",
    price: 150000,
    description: "Advanced VPAP ST device with backup rate.",
    images: ["/images/Product3.webp"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Type", value: "VPAP ST" }
    ]
  },

  {
    id: 7,
    slug: "airmini-autoset-cpap",
    name: "AirMini AutoSet CPAP",
    price: 70000,
    description: "Compact and travel-friendly CPAP device.",
    images: ["/images/Product4.webp"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Type", value: "Portable CPAP" }
    ]
  },

  {
    id: 8,
    slug: "airsense-11-autoset-4g-tripack",
    name: "AirSense 11 AutoSet 4G Tripack",
    price: 95000,
    description: "Next-generation CPAP device with 4G connectivity.",
    images: ["/images/Product5.webp"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Connectivity", value: "4G Enabled" }
    ]
  },

  {
    id: 9,
    slug: "airsense-11-autoset-single-pack",
    name: "AirSense 11 AutoSet (Single Pack)",
    price: 90000,
    description: "Latest AirSense 11 CPAP single pack version.",
    images: ["/images/Product6.jpg"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Model", value: "AirSense 11" }
    ]
  },

  {
    id: 10,
    slug: "airmini-autoset-cpap-device",
    name: "AirMini™ AutoSet CPAP Device",
    price: 49900,
    description: "Portable AutoSet CPAP device designed for travel with advanced therapy support.",
    images: ["/images/Product4.webp"],
    specifications: [
      { label: "Brand", value: "ResMed" },
      { label: "Type", value: "Auto CPAP" },
      { label: "Category", value: "CPAP Machine" }
    ]
  },
  {
  id: 11,
  slug: "oxymed-portable-oxygen-concentrator",
  name: "Oxymed Portable Oxygen Concentrator",
  price: 139690,
  description: "Portable oxygen concentrator suitable for home and travel therapy.",
  images: ["/images/deal1.jpg"],
  specifications: [
    { label: "Brand", value: "Oxymed" },
    { label: "Category", value: "Oxygen Concentrator" }
  ]
},
{
  id: 12,
  slug: "oxymed-oxygen-concentrator-5lpm",
  name: "OxyMed Oxygen Concentrator Machine 5LPM",
  price: 34900,
  description: "5LPM oxygen concentrator for home oxygen therapy.",
  images: ["/images/deal2.jpg"],
  specifications: [
    { label: "Brand", value: "Oxymed" },
    { label: "Capacity", value: "5LPM" }
  ]
},
{
  id: 13,
  slug: "oxymed-10ltr-oxygen-concentrator",
  name: "OxyMed 10 Ltr Oxygen Concentrator",
  price: 51550,
  description: "High capacity oxygen concentrator for medical use.",
  images: ["/images/deal3.jpg"],
  specifications: [
    { label: "Brand", value: "Oxymed" },
    { label: "Capacity", value: "10LPM" }
  ]
},
{
  id: 14,
  slug: "philips-everflo-oxygen-concentrator",
  name: "Philips EverFlo Home Oxygen (5 LPM)",
  price: 59000,
  description: "Philips EverFlo reliable home oxygen concentrator.",
  images: ["/images/deal4.webp"],
  specifications: [
    { label: "Brand", value: "Philips" },
    { label: "Capacity", value: "5LPM" }
  ]
},
{
  id: 15,
  slug: "resmed-airmini-f30-setup-pack",
  name: "Resmed AirMini F30 Setup Pack",
  price: 2900,
  description: "Setup pack compatible with ResMed AirMini CPAP.",
  images: ["/images/deal5.webp"],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Category", value: "CPAP Accessory" }
  ]
},
{
  id: 16,
  slug: "nasal-pillow-mask",
  name: "Nasal Pillow Mask",
  price: 3500,
  description: "Lightweight nasal pillow CPAP mask.",
  images: ["/images/default.jpg"],
  specifications: [
    { label: "Category", value: "Mask" }
  ]
},
{
  id: 17,
  slug: "oxygen-machines",
  name: "Oxygen machines",
  price: 500,
  description: "Standard oxygen mask for respiratory therapy.",
  images: ["/images/default.jpg"],
  specifications: [
    { label: "Category", value: "Oxygen Accessory" }
  ]
},
{
  id: 18,
  slug: "cpap-bipap-rental",
  name: "CPAP & BIPAP Rental Service",
  price: 0,
  description: "Rental service for CPAP & BIPAP machines.",
  images: ["/images/default.jpg"],
  specifications: [
    { label: "Type", value: "Rental" }
  ]
},
{
  id: 19,
  slug: "cpap-hose-pipe",
  name: "CPAP Hose Pipe",
  price: 1200,
  description: "Durable hose pipe for CPAP machines.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 20,
  slug: "cpap-filter",
  name: "CPAP Filter",
  price: 300,
  description: "High-quality CPAP air filters.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 21,
  slug: "humidifier-bottle",
  name: "Humidifier Bottle",
  price: 1500,
  description: "Humidifier bottle for oxygen concentrators.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 22,
  slug: "mask-headgear",
  name: "Mask Headgear",
  price: 800,
  description: "Adjustable CPAP mask headgear.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 23,
  slug: "mask-cushion",
  name: "Mask Cushion",
  price: 900,
  description: "Comfortable CPAP mask cushion.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 24,
  slug: "mask-clips",
  name: "Mask Clips",
  price: 400,
  description: "Replacement clips for CPAP masks.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 25,
  slug: "mask-frame",
  name: "Mask Frame & Vents",
  price: 1100,
  description: "Mask frame with air vents.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 26,
  slug: "airsense-11-accessories",
  name: "AirSense 11 Accessories",
  price: 2000,
  description: "Accessories compatible with AirSense 11.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
},
{
  id: 27,
  slug: "airmini-accessories",
  name: "AirMini Accessories",
  price: 1800,
  description: "Accessories for AirMini CPAP.",
  images: ["/images/default.jpg"],
  specifications: [{ label: "Category", value: "Accessory" }]
}
]