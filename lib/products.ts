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
//cpap
{ id: 2, slug: "resmed-airsense-10-autoset-tripack", name: "Resmed AirSense 10 AutoSet Tripack", price: 88200, offer: { type: "flat", value: 2000 }, category: "cpap-machine", description: "Advanced CPAP machine with humidifier.", images: ["/images/Product5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }] },
{ id: 3, slug: "resmed-airstart10-auto-cpap", name: "Resmed Airstart10 Auto CPAP", price: 59000, offer: { type: "flat", value: 5000 }, category: "cpap-machine", description: "Reliable auto CPAP therapy device.", images: ["/images/Product4.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "CPAP" }] },
{ id: 5, slug: "resmed-lumis-100-vpap-st", name: "Resmed Lumis 100 VPAP ST", price: 105000, category: "cpap-machine", description: "Bi-level ventilation support device.", images: ["/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/1.webp", "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/2.webp", "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/3.webp", "/images/Devices/Lumis™ 100 VPAP ST Non- Invasive Ventilator/4.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "VPAP" }] },
{ id: 6, slug: "resmed-lumis-150-vpap-st", name: "Resmed Lumis 150 VPAP ST", price: 143000, category: "cpap-machine", description: "Advanced VPAP ST device.", images: ["/images/Devices/Resmed Lumis™ 150 VPAP ST/2.webp", "/images/Devices/Resmed Lumis™ 150 VPAP ST/1.webp", "/images/Devices/Resmed Lumis™ 150 VPAP ST/3.webp", "/images/Devices/Resmed Lumis™ 150 VPAP ST/4.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "VPAP ST" }] },
{ id: 7, slug: "airsense-11-autoset-4g-tripack", name: "AirSense 11 AutoSet 4G Tripack", price: 103100, offer: { type: "percentage", value: 18.23 }, category: "cpap-machine", description: "Next-generation CPAP device.", images: ["/images/Product5.webp", "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/7.webp", "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/5.webp", "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/6.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },
{ id: 8, slug: "airsense-11-autoset-single-pack", name: "AirSense 11 AutoSet (Single Pack)", price: 79700, category: "cpap-machine", description: "Latest AirSense 11 CPAP.", images: ["/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/1.webp", "/images/Product6.jpg", "/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/3.webp", "/images/Devices/AirSense™ 11 AutoSet™ (Single Pack)/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Model", value: "AirSense 11" }] },
{ id: 9, slug: "airmini-autoset-cpap-device", name: "AirMini™ AutoSet CPAP Device", price: 67300, offer: { type: "percentage", value: 19.76 }, category: "cpap-machine", description: "Portable CPAP device.", images: ["/images/Product4.webp", "/images/Devices/AirMini™ AutoSet CPAP Device/2.webp", "/images/Devices/AirMini™ AutoSet CPAP Device/5.webp", "/images/Devices/AirMini™ AutoSet CPAP Device/8.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }, { label: "Category", value: "CPAP Machine" }] },

//oc
{ id: 10, slug: "oxymed-portable-oxygen-concentrator", name: "Oxymed Portable Oxygen Concentrator", price: 132690, category: "oxygen-concentrator", description: "Portable oxygen concentrator.", images: ["/images/deal1.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Category", value: "Oxygen Concentrator" }] },
{ id: 11, slug: "oxymed-oxygen-concentrator-5lpm", name: "OxyMed Oxygen Concentrator Machine 5LPM", price: 34900, category: "oxygen-concentrator", description: "5LPM oxygen concentrator.", images: ["/images/deal2.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Capacity", value: "5LPM" }] },
{ id: 12, slug: "oxymed-10ltr-oxygen-concentrator", name: "OxyMed 10 Ltr Oxygen Concentrator", price: 51550, category: "oxygen-concentrator", description: "High capacity concentrator.", images: ["/images/deal3.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Capacity", value: "10LPM" }] },
{ id: 13, slug: "philips-everflo-oxygen-concentrator", name: "Philips EverFlo Home Oxygen (5 LPM)", price: 59000, category: "oxygen-concentrator", description: "Home oxygen concentrator.", images: ["/images/deal4.webp"], specifications: [{ label: "Brand", value: "Philips" }, { label: "Capacity", value: "5LPM" }] },
{ id: 16, slug: "oxygen-machines", name: "Oxygen machines", price: 500, category: "oxygen-concentrator", description: "Standard oxygen mask.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },


//accessories
{ id: 14, slug: "resmed-airmini-f30-setup-pack", name: "Resmed AirMini F30 Setup Pack", price: 2900, category: "accessory", description: "Setup pack for AirMini.", images: ["/images/deal5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "CPAP Accessory" }] },
{ id: 17, slug: "cpap-bipap-rental", name: "CPAP & BIPAP Rental Service", price: 0, category: "rental", description: "Rental service.", images: ["/images/default.jpg"], specifications: [{ label: "Type", value: "Rental" }] },
{ id: 18, slug: "cpap-hose-pipe", name: "CPAP Hose Pipe", price: 1200, category: "accessory", description: "Durable hose pipe.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 19, slug: "cpap-filter", name: "CPAP Filter", price: 300, category: "accessory", description: "Air filters.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 20, slug: "humidifier-bottle", name: "Humidifier Bottle", price: 1500, category: "humidifier-bottle", description: "Humidifier bottle.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 21, slug: "mask-headgear", name: "Mask Headgear", price: 800, category: "mask-headgear", description: "Adjustable headgear.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 22, slug: "mask-cushion", name: "Mask Cushion", price: 900, category: "mask-cushion", description: "Comfort cushion.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 23, slug: "mask-clips", name: "Mask Clips", price: 400, category: "mask-clips", description: "Replacement clips.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 24, slug: "mask-frame", name: "Mask Frame & Vents", price: 1100, category: "mask-frame", description: "Mask frame.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 25, slug: "airsense-11-accessories", name: "AirSense 11 Accessories", price: 2000, category: "airsense-11-accessories", description: "Accessories for AirSense 11.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 26, slug: "airmini-accessories", name: "AirMini Accessories", price: 1800, category: "airmini-accessories", description: "Accessories for AirMini.", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 27, slug: "hose-pipes-tubes", name: "Hose Pipes & Tubes", price: 1800, category: "hose-pipes-tubes", description: "Hose Pipes & Tubes", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 28, slug: "filters-cleaners", name: "Filters & Cleaners", price: 1800, category: "filters-cleaners", description: "Filters & Cleaners", images: ["/images/default.jpg"], specifications: [{ label: "Category", value: "Accessory" }] },

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







]