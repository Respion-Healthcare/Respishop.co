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

//masks
//nasal
{ id: 1, slug: "resmed-airfit-n20-nasal-mask", name: "AirFit™ N20", price: 5600, offer: { type: "percentage", value: 25 }, category: "nasal-mask", description: "Comfortable nasal mask for CPAP users.", images: ["/images/banner1.webp", "/images/Mask/Resmed AirFit™ N20 Nasal Mask/1.webp", "/images/Mask/Resmed AirFit™ N20 Nasal Mask/2.webp", "/images/Mask/Resmed AirFit™ N20 Nasal Mask/3.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Mask" }] },
{ id: 29, slug: "airfit-n20-classic", name: "AirFit™ N20 Classic", price: 4200, offer: { type: "percentage", value: 25 }, category: "nasal-mask", description: "Classic nasal mask with forehead support for stable and comfortable therapy.", images: ["/images/Mask/Resmed AirFit™ N20 Classic Mask/1.webp", "/images/Mask/Resmed AirFit™ N20 Classic Mask/2.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Mask" }] },
{ id: 30, slug: "airfit-n30i", name: "AirFit™ N30i", price: 7200, offer: { type: "flat", value: 1200 }, category: "nasal-mask", description: "Top-of-head tube nasal mask designed for flexible sleeping positions.", images: ["/images/Mask/Resmed AirFit™ N30i Nasal Mask.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Mask" }] },
{ id: 31, slug: "best-fit-2-nasal-mask", name: "BEST FIT 2 NASAL MASK", price: 4500, offer: { type: "percentage", value: 10 }, category: "nasal-mask", description: "Lightweight and comfortable nasal mask for daily CPAP therapy.", images: ["/images/Mask/Resmed Best Fit 2 Nasal Mask.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Nasal Mask" }] },

//Full Face Mask
{ id: 4, slug: "resmed-airfit-f20-full-face-mask", name: "Resmed AirFit F20 Full Face Mask", price: 7300, offer: { type: "percentage", value: 25 }, category: "full-face-mask", description: "Full face CPAP mask with superior comfort.", images: ["/images/Product1.jpg", "/images/Mask/Resmed AirTouch™ F20 Full Face Mask.webp", "/images/Mask/Resmed AirFit™ F20 Full Face Mask.webp", "/images/All.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
// { id: 32, slug: "airfit-f30", name: "AirFit™ F30", price: 7800, offer: { type: "percentage", value: 15 }, category: "full-face-mask", description: "Minimal-contact full face mask designed for comfort and freedom.", images: ["/images/Mask/AirFit-F30/1.webp", "/images/Mask/AirFit-F30/2.webp", "/images/Mask/AirFit-F30/3.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 33, slug: "airfit-f30i", name: "AirFit™ F30i", price: 8500, offer: { type: "flat", value: 1000 }, category: "full-face-mask", description: "Top-of-head tube full face mask for flexible sleep movement.", images: ["/images/Mask/Resmed AirFit F30i Full Face Mask/1.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/2.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/3.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/4.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 34, slug: "airtouch-f20", name: "AirTouch™ F20", price: 9200, offer: { type: "percentage", value: 20 }, category: "full-face-mask", description: "UltraSoft memory foam cushion full face CPAP mask.", images: ["/images/Mask/Resmed AirTouch™ F20 Full Face Mask.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 35, slug: "bestfit-2-full-face-mask", name: "BestFit 2 Full Face Mask", price: 4800, offer: { type: "percentage", value: 10 }, category: "full-face-mask", description: "Comfortable and reliable full face CPAP mask for daily therapy.", images: ["/images/Mask/Resmed Best Fit 2 Full Face Mask.jpg","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 36, slug: "acucare-f1-0", name: "AcuCare™ F1-0", price: 3900, category: "full-face-mask", description: "Lightweight full face CPAP mask with secure fit and comfort.", images: ["/images/Mask/AcuCare™ F1-0.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 37, slug: "acucare-f1-4", name: "AcuCare™ F1-4", price: 4100, category: "full-face-mask", description: "Soft cushion full face mask designed for stable CPAP therapy.", images: ["/images/Mask/AcuCare™ F1-4.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },

//nasal pillow mask
{ id: 15, slug: "nasal-pillow-mask", name: "AirFit™ P30i Nasal Pillow Mask", price: 3500, category: "nasal-pillow-mask", description: "Lightweight nasal pillow mask.", images: ["/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/1.webp", "/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/2.webp", "/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/3.webp", "/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/4.webp","/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/5.webp",], specifications: [{ label: "Category", value: "Mask" }] },
{ id: 38, slug: "airfit-p10", name: "AirFit™ P10", price: 5400, offer: { type: "percentage", value: 15 }, category: "nasal-pillow-mask", description: "Ultra-lightweight nasal pillow mask for quiet and comfortable CPAP therapy.", images: ["/images/Mask/Resmed AirFit™ P10 Nasal Pillow Mask.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Pillow Mask" }] },
{ id: 39, slug: "airfit-p10-for-airmini", name: "AirFit™ P10 for AirMini™", price: 6200, offer: { type: "flat", value: 800 }, category: "nasal-pillow-mask", description: "Compact nasal pillow mask specially designed for AirMini travel CPAP.", images: ["/images/Mask/Resmed AirFit™ P10 for AirMini™.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Pillow Mask" }] },


//-------------------------------------------------------------------------------------------------------------


//cpap
{ id: 2, slug: "resmed-airsense-10-autoset-tripack", name: "AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube", price: 84300, offer: { type: "flat", value: 2000 }, category: "cpap-machine", description: "Advanced CPAP machine with humidifier.", 
        images: ["/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/2.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/3.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/4.webp"
        ], 
        specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }] },

{ id: 3, slug: "AirSense™ 10 Elite -Tripack 3G", name: "AirSense™ 10 Elite -Tripack 3G", price: 59000, offer: { type: "flat", value: 5000 }, category: "cpap-machine", description: "Reliable auto CPAP therapy device.",
 images: ["/images/Devices/AirSense™ 10 Elite -Tripack 3G.webp"],
  specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "CPAP" }] },

 { id: 5, slug: "airSense™10-autoset™-for-her", name: "AirSense™ 10 AutoSet™ for Her CPAP Machine 4G", price: 105000, category: "cpap-machine", description: "Bi-level ventilation support device.", 
  images: ["/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/1.webp",
     "/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/2.webp",
      "/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/3.webp", 
      "/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/4.webp"], 
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "VPAP" }] },

{ id: 6, slug: "airsense™-10-autoset™-tripack-4G", name: "AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir", price: 143000, category: "cpap-machine", description: "Advanced VPAP ST device.",
   images: ["/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/1.webp",
   "/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/2.webp",
    "/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/3.webp", 
    "/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/4.webp"], 
    specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "VPAP ST" }] },


{ id: 7, slug: "aircurve™-11", name: "AirCurve™ 10 VAuto 4G Tripack With Humidifier and ClimateLineAir™ Tube", price: 75800, offer: { type: "percentage", value: 18.23 }, category: "cpap-machine", description: "Next-generation CPAP device.",
 images: ["/images/Devices/AirCurve™ 10 VAuto 4G Tripack With Humidifier and ClimateLineAir™ Tube/1.webp",
   "/images/Devices/AirCurve™ 10 VAuto 4G Tripack With Humidifier and ClimateLineAir™ Tube/2.webp",
    "/images/Devices/AirCurve™ 10 VAuto 4G Tripack With Humidifier and ClimateLineAir™ Tube/3.webp",
     "/images/Devices/AirCurve™ 10 VAuto 4G Tripack With Humidifier and ClimateLineAir™ Tube/4.webp"],
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },

{ id: 8, slug: "airsense-11-autoset-single-pack", name: "AirSense™ 11 AutoSet™ (Single Pack)", price: 79700, category: "cpap-machine", description: "Latest AirSense 11 CPAP.", 
  images: ["/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/1.webp", 
    "/images/Product6.jpg", 
    "/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/3.webp",
     "/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/5.webp"],
   specifications: [{ label: "Brand", value: "ResMed" }, { label: "Model", value: "AirSense 11" }] },

{ id: 9, slug: "airmini-autoset-cpap-device", name: "AirMini™ AutoSet CPAP Device", price: 54000, offer: { type: "percentage", value: 19.76 }, category: "cpap-machine", description: "Portable CPAP device.",
 images: ["/images/Product4.webp", "/images/Devices/AirMini™ AutoSet CPAP Device/2.webp",
   "/images/Devices/AirMini™ AutoSet CPAP Device/5.webp", 
   "/images/Devices/AirMini™ AutoSet CPAP Device/8.webp"], 
   specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }, { label: "Category", value: "CPAP Machine" }] },

{ id: 40, slug: "airstart™ 10-with-humidification-and-tube", name: "AirStart™ 10 APAP with humidification and tube", price: 29300, offer: { type: "percentage", value: 18.23 }, category: "cpap-machine", description: "Next-generation CPAP device.",
 images: ["/images/Devices/AirStart™ 10 APAP with humidification and tube/1.webp",
   "/images/Devices/AirStart™ 10 APAP with humidification and tube/2.webp",
    "/images/Devices/AirStart™ 10 APAP with humidification and tube/3.webp",
     "/images/Devices/AirStart™ 10 APAP with humidification and tube/4.webp"],
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//Bipap
{ 
  id: 41, slug: "lumis-100-vpap-st", name: "Lumis™ 100 VPAP ST Non- Invasive Ventilator", price: 68500, offer: { type: "percentage", value: 12 }, category: "bipap-machine",
  description: "Advanced bilevel device designed for non-invasive ventilation support.",
  images: [
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/1.webp",
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/2.webp",
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/3.webp",
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/4.webp"
  ],
  specifications: [
    { label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }]},

{ 
  id: 42, slug: "resmed-lumis™-150",
  name: "Resmed Lumis™ 150 VPAP ST", price: 74200, offer: { type: "percentage", value: 15 }, category: "bipap-machine", description: "Auto-adjusting bilevel therapy device for personalized sleep apnea treatment.",
  images: [
    "/images/Devices/Resmed Lumis™ 150 VPAP ST/1.webp",
    "/images/Devices/Resmed Lumis™ 150 VPAP ST/2.webp",
    "/images/Devices/Resmed Lumis™ 150 VPAP ST/3.webp",
    "/images/Devices/Resmed Lumis™ 150 VPAP ST/4.webp"
  ],
  specifications: [
    { label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "Wireless Enabled" }
  ]
},

{ 
  id: 43,
  slug: "lumis™-150-invasive-ventilator",
  name: "Lumis™ 150 VPAP ST-A Non- Invasive Ventilator",
  price: 89500,
  offer: { type: "percentage", value: 10 },
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: [
    "/images/Devices/Lumis™ 150 VPAP ST-A Non- Invasive Ventilator.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

//----------------------------------------------------------------------------------------------------------------------------------------------------------


//oc
{ id: 10, slug: "oxymed-portable-oxygen-concentrator", name: "Oxymed Portable Oxygen Concentrator", price: 132690, category: "oxygen-concentrator", description: "Portable oxygen concentrator.", images: ["/images/Oc/deal1.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Category", value: "Oxygen Concentrator" }] },
{ id: 11, slug: "oxymed-oxygen-concentrator-5lpm", name: "OxyMed Oxygen Concentrator Machine 5LPM", price: 34900, category: "oxygen-concentrator", description: "5LPM oxygen concentrator.", images: ["/images/Oc/deal2.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Capacity", value: "5LPM" }] },
{ id: 12, slug: "oxymed-10ltr-oxygen-concentrator", name: "OxyMed 10 Ltr Oxygen Concentrator", price: 51550, category: "oxygen-concentrator", description: "High capacity concentrator.", images: ["/images/Oc/deal3.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Capacity", value: "10LPM" }] },
{ id: 13, slug: "philips-everflo-oxygen-concentrator", name: "Philips EverFlo Home Oxygen (5 LPM)", price: 59000, category: "oxygen-concentrator", description: "Home oxygen concentrator.", images: ["/images/Oc/deal4.webp"], specifications: [{ label: "Brand", value: "Philips" }, { label: "Capacity", value: "5LPM" }] },
{ id: 16, slug: "oxygen-machines", name: "Oxymed Inteli 5LPM Auto Flow Oxygen Concentrator", price: 500, category: "oxygen-concentrator", description: "Standard oxygen mask.",
   images: ["/images/Oc/1.jpg", "/images/Oc/2.jpg", "/images/Oc/3.jpg","/images/Oc/5.jpg"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//accessories
//connector and tubes 
{ id: 18, slug: "tubes-and-connectors", name: "ClimateLineAir™ heated tube", price: 1200, category: "tubes-and-connectors", description: "Durable hose pipe.", images: ["/images/Accesories/Connector tubes/ClimateLineAir™ heated tube.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 44, slug: "slimline-tubes", name: "SLIMLINE TUBING™", price: 1200, category: "tubes-and-connectors", description: "Durable hose pipe.", images: ["/images/Accesories/Connector tubes/SLIMLINE TUBING™.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 45, slug: "grey-tubing", name: "Grey Tubing - Cuffed, STD tubing", price: 1200, category: "tubes-and-connectors", description: "Durable hose pipe.", images: ["/images/Accesories/Connector tubes/Grey Tubing - Cuffed, STD tubing.webp", "/images/Accesories/Connector tubes/Grey Tubing - Cuffed, STD tubing2.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 46, slug: "airoxy-tubes", name: "Resmed ClimateLine™ Air Oxy Heated Tubing", price: 1200, category: "tubes-and-connectors", description: "Durable hose pipe.", images: ["/images/Accesories/Connector tubes/Resmed ClimateLine™ Air Oxy Heated Tubing.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 47, slug: "maxoxy-tubes", name: "Resmed ClimateLine™ Max Oxy Heated Tubing", price: 1200, category: "tubes-and-connectors", description: "Durable hose pipe.", images: ["/images/Accesories/Connector tubes/Resmed ClimateLine™ Max Oxy Heated Tubing.webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//filter
{ id: 28, slug: "airsense-filters-cleaners", name: "S9 / AirSense Filters (Pack of 6)", price: 1800, category: "filters-cleaners", description: "Filters & Cleaners", images: ["/images/Accesories/Filter/S9  AirSense Filters (Pack of 6).webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 48, slug: "airmini-filters-cleaners", name: "Resmed AirMini Filters (Pack of 6)", price: 1800, category: "filters-cleaners", description: "Filters & Cleaners", images: ["/images/Accesories/Filter/Resmed AirMini Filters (Pack of 6).jpg"], specifications: [{ label: "Category", value: "Accessory" }] },

//humidifire and bottles
{ id: 20, slug: "humidifier-pack-of-3", name: "Humid™ X Plus - Pack of 3 (2 Units)", price: 1500, category: "humidifier-bottle", description: "Humidifier bottle.",
   images: ["/images/Accesories/Humidifier/Humid™ X Plus - Pack of 3 (2 Units)/1.webp",
    "/images/Accesories/Humidifier/Humid™ X Plus - Pack of 3 (2 Units)/2.webp",
    "/images/Accesories/Humidifier/Humid™ X Plus - Pack of 3 (2 Units)/3.webp",
    "/images/Accesories/Humidifier/Humid™ X Plus - Pack of 3 (2 Units)/4.webp",
   ], 
   specifications: [{ label: "Category", value: "Accessory" }] },

{ id: 49, slug: "humidifier-pack-of-6", name: "Humid™ X - Pack of 6", price: 1500, category: "humidifier-bottle", description: "Humidifier bottle.",
   images: ["/images/Accesories/Humidifier/Humid™ X - Pack of 6/1.webp",
"/images/Accesories/Humidifier/Humid™ X - Pack of 6/2.webp",
"/images/Accesories/Humidifier/Humid™ X - Pack of 6/3.webp",
"/images/Accesories/Humidifier/Humid™ X - Pack of 6/4.webp"
], specifications: [{ label: "Category", value: "Accessory" }] },

{ id: 50, slug: "heated-humidifier", name: "Resmed H4i Heated Humidifier FOR STELLAR", price: 1500, category: "humidifier-bottle", description: "Humidifier bottle.", images: ["/images/Accesories/Humidifier/Resmed H4i Heated Humidifier FOR STELLAR.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 51, slug: "humidifier-clenable", name: "HumidAir™ Cleanable II", price: 1500, category: "humidifier-bottle", description: "Humidifier bottle.", images: ["/images/Accesories/Humidifier/HumidAir™ Cleanable II.webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//frame and headgear
{ id: 21, slug: "airfit-headgear", name: "Resmed AirFit™ F30 Headgear", price: 800, category: "mask-headgear", description: "Adjustable headgear.", images: ["/images/Accesories/Headgear/Resmed AirFit™ F30 Headgear.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 24, slug: "f30i-headgear", name: "Resmed AirFit™ F30i Headgear", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Headgear/Resmed AirFit™ F30i Headgear.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 52, slug: "n20-headgear", name: "Resmed AirFit™ N20 Headgear", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Headgear/Resmed AirFit™ N20 Headgear.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 53, slug: "p10-headgear", name: "Resmed AirFit™ P10 Headgear", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Headgear/Resmed AirFit™ P10 Headgear.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 54, slug: "p30i-n30i-headgear", name: "Resmed AirFit™ P30i N30i Headgear", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Headgear/Resmed AirFit™ P30i N30i Headgear.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 59, slug: "vent-airfit-headgear", name: "QuietAir vent for AirFit™ Mask", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Mask frame and vents/QuietAir vent for AirFit™ Mask.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 60, slug: "sys-headgear", name: "Resmed AirFit™ F20 Frame SYS", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Mask frame and vents/Resmed AirFit™ F20 Frame SYS.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 61, slug: "n20-sys-headgear", name: "Resmed AirFit™ N20 Frame SYS", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Mask frame and vents/Resmed AirFit™ N20 Frame SYS.webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//mask and cushion
{ id: 22, slug: "airfit-cushion", name: "Resmed AirFit™ F20 Cushion", price: 900, category: "mask-cushion", description: "Comfort cushion.", images: ["/images/Accesories/Cushion/Resmed AirFit™ F20 Cushion.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 27, slug: "f30-cushion", name: "Resmed AirFit™ F30 Cushion", price: 1800, category: "mask-cushion", description: "Hose Pipes & Tubes", images: ["/images/Accesories/Cushion/Resmed AirFit™ F30 Cushion.webp", "/images/Accesories/Cushion/Resmed AirFit™ F30 Cushion2.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 23, slug: "f30i-cushion", name: "Resmed AirFit™ F30i Cushion", price: 400, category: "mask-cushion", description: "Replacement clips.", images: ["/images/Accesories/Cushion/Resmed AirFit™ F30i Cushion.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 14, slug: "n20-cushion", name: "Resmed AirFit™ N20 Cushion", price: 2900, category: "mask-cushion", description: "Setup pack for AirMini.", images: ["/images/Accesories/Cushion/Resmed AirFit™ N20 Cushion.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "CPAP Accessory" }] },
{ id: 17, slug: "n30i-cushion", name: "Resmed AirFit™ N30i Cushion", price: 0, category: "mask-cushion", description: "Rental service.", images: ["/images/Accesories/Cushion/Resmed AirFit™ N30i Cushion.webp"], specifications: [{ label: "Type", value: "Rental" }] },
{ id: 19, slug: "p30i-cushion", name: "Resmed AirFit™ P30i Cushion", price: 300, category: "mask-cushion", description: "Air filters.", images: ["/images/Accesories/Cushion/Resmed AirFit™ P30i Cushion.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 25, slug: "airtouch-f20", name: "Resmed AirTouch F20 Cushion (Pack of 2)", price: 2000, category: "mask-cushion", description: "Accessories for AirSense 11.", images: ["/images/Accesories/Cushion/Resmed AirTouch F20 Cushion (Pack of 2).webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//Mask pad clip
{ id: 26, slug: "n20-accessories", name: "Resmed N20 Mask Magnet Clips (2PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/1.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 55, slug: "p10-accessories", name: "Resmed P10 Mask Headgear Clips (10PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/2.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 57, slug: "n20pk-accessories", name: "Resmed N20 Mask Magnet Clips (2PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/3.webp", "/images/Accesories/Mask Pad Clips/4.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 58, slug: "airmini-accessories", name: "Resmed N20 Mask Magnet Clips (2PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/5.webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Rental
{ id: 61, slug: "rental-airsence", name: "Rental AirSense™ 11 AutoSet™ Tripack 4G with 1 Mask", price: 4500, category: "rental", description: "Mask frame.", 
  images: ["/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/1.webp",
    "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/2.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/3.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/4.webp"
  ], specifications: [{ label: "Category", value: "Accessory" }] },

{ id: 62, slug: "lumis-100", name: "Lumis™ 100 VPAP ST Non- Invasive Ventilator", price: 4500, category: "rental", description: "Mask frame.", 
  images: [  
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/1.webp",
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/2.webp",
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/3.webp",
    "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/4.webp"
  ], specifications: [{ label: "Category", value: "Accessory" }] },


]