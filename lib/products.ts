export type Product = {
  id: number
  slug: string
  name: string
  price: number
  description: string
  images: string[]
  category: string 

  offer?: {
    type: "percentage" | "flat"
    value: number
  }

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
    price: 5600,

    // ✅ Example offer added
    offer: {
      type: "percentage",
      value: 10
    },

    category: "face-mask",
    description: "Comfortable nasal mask for CPAP users.",
    images: ["/images/banner1.webp",
      "/images/Mask/Resmed AirFit™ N20 Nasal Mask/1.webp",
      "/images/Mask/Resmed AirFit™ N20 Nasal Mask/2.webp",
      "/images/Mask/Resmed AirFit™ N20 Nasal Mask/3.webp"
    ],
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
    offer: {
      type: "flat",
      value: 5000
    },
    category: "cpap-machine",
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
    offer: {
      type: "flat",
      value: 5000
    },
    category: "cpap-machine",
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
    offer: {
      type: "percentage",
      value: 10
    },
    category: "face-mask",
    description: "Full face CPAP mask with superior comfort.",
    images: ["/images/Product1.jpg",
      "/images/Mask/Resmed AirTouch™ F20 Full Face Mask.webp",
      "/images/Mask/Resmed AirFit™ F20 Full Face Mask.webp",
      "/images/All.webp"
    ],
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
    category: "cpap-machine",
    description: "Bi-level ventilation support device.",
    images: ["/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/1.webp",
      "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/2.webp",
      "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/3.webp",
      "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/4.webp"
    ],
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
    category: "cpap-machine",
    description: "Advanced VPAP ST device.",
    images: ["/images/Devices/Resmed Lumis™ 150 VPAP ST/2.webp",
      "/images/Devices/Resmed Lumis™ 150 VPAP ST/1.webp",
      "/images/Devices/Resmed Lumis™ 150 VPAP ST/3.webp",
      "/images/Devices/Resmed Lumis™ 150 VPAP ST/4.webp"
    ],
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
    category: "cpap-machine",
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
    category: "cpap-machine",
    description: "Next-generation CPAP device.",
    images: ["/images/Product5.webp",
      "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/7.webp",
      "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/5.webp",
      "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/6.webp"
    ],
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
    category: "cpap-machine",
    description: "Latest AirSense 11 CPAP.",
    images: ["/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/1.webp",
      "/images/Product6.jpg",
      "/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/3.webp",
      "/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/5.webp"
    ],
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
    category: "cpap-machine",
    description: "Portable CPAP device.",
    images: ["/images/Product4.webp",
      "/images/Devices/AirMini™ AutoSet CPAP Device/2.webp",
      "/images/Devices/AirMini™ AutoSet CPAP Device/5.webp",
      "/images/Devices/AirMini™ AutoSet CPAP Device/8.webp"
    ],
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
    category: "oxygen-concentrator",
    description: "Portable oxygen concentrator.",
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
    category: "oxygen-concentrator",
    description: "5LPM oxygen concentrator.",
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
    category: "oxygen-concentrator",
    description: "High capacity concentrator.",
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
    category: "oxygen-concentrator",
    description: "Home oxygen concentrator.",
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
    category: "accessory",
    description: "Setup pack for AirMini.",
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
    category: "face-mask",
    description: "Lightweight nasal pillow mask.",
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
    category: "oxygen-concentrator",
    description: "Standard oxygen mask.",
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
    category: "accessory",
    description: "Rental service.",
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
    category: "accessory",
    description: "Durable hose pipe.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 20,
    slug: "cpap-filter",
    name: "CPAP Filter",
    price: 300,
    category: "accessory",
    description: "Air filters.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 21,
    slug: "humidifier-bottle",
    name: "Humidifier Bottle",
    price: 1500,
    category: "accessory",
    description: "Humidifier bottle.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 22,
    slug: "mask-headgear",
    name: "Mask Headgear",
    price: 800,
    category: "accessory",
    description: "Adjustable headgear.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 23,
    slug: "mask-cushion",
    name: "Mask Cushion",
    price: 900,
    category: "accessory",
    description: "Comfort cushion.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 24,
    slug: "mask-clips",
    name: "Mask Clips",
    price: 400,
    category: "accessory",
    description: "Replacement clips.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 25,
    slug: "mask-frame",
    name: "Mask Frame & Vents",
    price: 1100,
    category: "accessory",
    description: "Mask frame.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 26,
    slug: "airsense-11-accessories",
    name: "AirSense 11 Accessories",
    price: 2000,
    category: "accessory",
    description: "Accessories for AirSense 11.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  },

  {
    id: 27,
    slug: "airmini-accessories",
    name: "AirMini Accessories",
    price: 1800,
    category: "accessory",
    description: "Accessories for AirMini.",
    images: ["/images/default.jpg"],
    specifications: [{ label: "Category", value: "Accessory" }]
  }
]