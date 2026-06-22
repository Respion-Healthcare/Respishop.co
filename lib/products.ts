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
  stock?: string
  delivery?: string
  warranty?: string
  returnPolicy?: string

  badges?: string[]

  features?: {
    title: string
    value: string
  }[]

  longDescription?: string[]

  videos?: {
    title: string
    url: string
  }[]

  serviceCenters?: {
    city: string
    address: string
  }[]

  faqs?: {
    question: string
    answer: string
  }[]

}

export const products: Product[] = [

//masks
//nasal
{
  id: 1, slug: "resmed-airfit-n20-nasal-mask", name: "AirFit™ N20", price: 2490, category: "nasal-mask", description: "The ResMed AirFit™ N20 Nasal Mask is one of the most popular CPAP masks designed for comfort, performance, and ease of use. Featuring ResMed's advanced InfinitySeal™ cushion technology, the AirFit N20 provides a secure seal across a wide range of facial shapes and sizes, helping reduce air leaks and improve sleep therapy effectiveness. Its soft, flexible frame sits comfortably below the eyes, allowing users to read, watch TV, or wear glasses before sleep. The plush headgear and magnetic clips make fitting and removal quick and effortless, while the lightweight design minimizes facial pressure for all-night comfort. Ideal for patients with obstructive sleep apnea (OSA), the AirFit N20 is compatible with most CPAP, APAP, and BiPAP machines available in India. Whether you are a new CPAP user or looking to upgrade your current mask, the ResMed AirFit N20 delivers reliable therapy, enhanced comfort, and a restful sleep experience. Buy the ResMed AirFit N20 Nasal Mask online at the best price with fast delivery, genuine manufacturer warranty, and expert support.",
   images: ["/images/banner1.webp", "/images/Mask/Resmed AirFit™ N20 Nasal Mask/1.webp",
     "/images/Mask/Resmed AirFit™ N20 Nasal Mask/2.webp", "/images/Mask/Resmed AirFit™ N20 Nasal Mask/3.webp"],
     specifications: [{ label: "Brand", value: "ResMed" }, { label: "Mask Type", value: "Nasal Mask" },{ label: "Material", value: "Silicone Cushion" }, { label: "Compatibility", value: "All CPAP & BiPAP Machines" }, { label: "Sizes Available", value: "Small, Medium, Large" }, { label: "Country of Origin", value: "Australia" }, { label: "Warranty", value: "90 Days" }, { label: "Ideal For", value: "Sleep Apnea Therapy" }, { label: "Weight", value: "250 g" },{ label: "Package Includes", value: "Mask Frame, Cushion, Headgear" }, { label: "Category", value: "Mask" }] }, 

{ id: 29, slug: "airfit-n20-classic", name: "AirFit™ N20 Classic", price: 4200, offer: { type: "percentage", value: 25 }, category: "nasal-mask",
 description: "The AirFit™ N20 Classic Nasal Mask is designed to provide reliable CPAP therapy with exceptional comfort and stability. Featuring a traditional forehead support design, this mask offers enhanced balance and reduced movement during sleep, making it an excellent choice for users who prefer a more secure fit. The soft silicone cushion creates an effective seal to minimize air leaks while maintaining comfort throughout the night. Its adjustable headgear ensures a personalized fit for different facial structures, helping improve therapy compliance and sleep quality. Compatible with most CPAP, APAP, and BiPAP machines, the AirFit N20 Classic is ideal for sleep apnea patients seeking dependable performance, easy maintenance, and long-lasting durability. Whether you are new to CPAP therapy or replacing an existing mask, the AirFit N20 Classic delivers consistent airflow, comfort, and effective sleep apnea treatment. Buy the AirFit N20 Classic Nasal Mask online at the best price in India with genuine quality assurance and fast delivery.", 
 images: ["/images/Mask/Resmed AirFit™ N20 Classic Mask/1.webp", "/images/Mask/Resmed AirFit™ N20 Classic Mask/2.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Mask" }] },

{
  id: 30,
  slug: "airfit-n30i", name: "AirFit™ N30i", price: 7200, offer: { type: "flat", value: 1200 }, category: "nasal-mask",
  description: "The AirFit™ N30i Nasal Cradle Mask is engineered for CPAP users who want maximum freedom of movement and an unobtrusive sleep therapy experience. Featuring an innovative top-of-the-head tube connection, the N30i keeps the air tubing out of sight and out of the way, allowing users to comfortably sleep on their side, back, or stomach without feeling restricted. Its lightweight nasal cradle cushion sits gently beneath the nose, reducing facial contact and helping prevent pressure marks, irritation, and discomfort. The SpringFit™ frame adapts naturally to different facial shapes, providing a secure and personalized fit throughout the night. Designed for active sleepers, the AirFit N30i delivers effective airflow while maintaining comfort and flexibility. Compatible with most CPAP and Auto CPAP machines, this minimal-contact mask is an excellent choice for users seeking a modern, lightweight, and travel-friendly sleep apnea solution. Experience enhanced comfort, quieter therapy, and greater sleeping freedom with the AirFit N30i Nasal Cradle CPAP Mask.",
images: ["/images/Mask/Resmed AirFit™ N30i Nasal Mask.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Mask" }] },

{
  id: 31,          
  slug: "best-fit-2-nasal-mask",name: "BEST FIT 2 NASAL MASK",price: 4500,offer: { type: "percentage", value: 10 },category: "nasal-mask",description: "The BMC Best Fit 2 Nasal Mask is designed to provide a comfortable, reliable, and effective CPAP therapy experience for patients with obstructive sleep apnea (OSA). Built with an ergonomic design and soft silicone cushion, this nasal mask delivers a secure seal while minimizing pressure points and air leakage during sleep. Its lightweight frame and adjustable headgear ensure a personalized fit for a wide range of facial structures, making it suitable for both new and experienced CPAP users. The streamlined design offers an open field of vision, allowing users to read, watch television, or relax comfortably before bedtime. Engineered for long-term durability and easy daily maintenance, the Best Fit 2 Nasal Mask supports consistent airflow delivery and enhanced therapy compliance. Compatible with most CPAP, APAP, and BiPAP machines, this mask is an excellent choice for users seeking dependable performance, comfort, and value. Whether for home use or regular sleep apnea management, the BMC Best Fit 2 Nasal Mask helps promote restful sleep and effective respiratory therapy night after night.",
  images: ["/images/Mask/Resmed Best Fit 2 Nasal Mask.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"],specifications: [{ label: "Brand", value: "BMC" },{ label: "Category", value: "Nasal Mask" }
  ]
},
 { id: 77, slug: "philips-nasal-mask", name: "Philips Comfrotgel Nasal Mask", price: 3400, offer: { type: "percentage", value: 10 }, category: "nasal-mask",
    description: "The Philips ComfortGel Nasal Mask is designed to provide exceptional comfort and stability for CPAP therapy users. Featuring Philips' advanced gel cushion technology, this mask adapts to the contours of the face to create a secure seal while reducing pressure points and skin irritation. The soft forehead support and premium headgear help maintain mask stability throughout the night, minimizing leaks and improving therapy effectiveness. Its durable construction and user-friendly design make cleaning and maintenance simple for daily use. Ideal for individuals with obstructive sleep apnea, the ComfortGel Nasal Mask delivers reliable airflow, enhanced comfort, and consistent sleep therapy performance. Compatible with most CPAP, APAP, and BiPAP machines, it is a trusted choice for users seeking a comfortable and dependable nasal CPAP mask."
, images: ["/images/Mask/Philips mask/Philips Comfrotgel Nasal Mask1.webp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Nasal Mask" }] },

{ id: 78, slug: "philips-dream-nasal-mask", name: "Philips Dream Wisp Nasal Mask", price: 5000, offer: { type: "percentage", value: 10 }, category: "nasal-mask",
description: "The Philips DreamWisp Nasal Mask combines the comfort of a traditional nasal mask with the freedom of a top-of-head tubing connection. Designed for active sleepers, the innovative hose placement keeps tubing out of the way, allowing users to sleep comfortably in multiple positions. Its low-profile cushion provides a secure seal while maintaining an open field of vision for reading, watching television, or using mobile devices before sleep. The lightweight frame and soft headgear help reduce facial pressure and improve overall comfort during therapy. Perfect for CPAP users seeking flexibility and freedom of movement, the DreamWisp Nasal Mask offers effective sleep apnea treatment, improved comfort, and enhanced therapy compliance.",
 images: ["/images/Mask/Philips mask/Philips Dream Wisp Nasal Mask1.webp","/images/Mask/Philips mask/Philips Dream Wisp Nasal Mask2.jpg","/images/Mask/Philips mask/Philips Dream Wisp Nasal Mask4.jpg","/images/Mask/Philips mask/Philips Dream Wisp Nasal Mask3.webp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Nasal Mask" }] },

{ id: 79, slug: "philips-dreamware-nasal-mask", name: "Philips Dreamware Nasal Mask", price: 4100, offer: { type: "percentage", value: 10 }, category: "nasal-mask", 
 description: "The Philips DreamWear Nasal Mask features an innovative under-the-nose cushion and hollow frame design that delivers airflow through the sides of the mask, creating a lightweight and comfortable CPAP therapy experience. Designed to reduce facial contact and eliminate pressure on the nasal bridge, the DreamWear helps users sleep naturally while maintaining effective therapy. Its top-of-head tubing connection allows unrestricted movement throughout the night, making it ideal for side sleepers and active sleepers. The soft silicone frame adapts comfortably to facial contours while providing a secure fit and reliable seal. Compatible with most CPAP and Auto CPAP machines, the DreamWear Nasal Mask is a popular choice for users seeking comfort, freedom, and modern sleep apnea therapy solutions.", images: ["/images/Mask/Philips mask/Philips Dreamware Nasal Mask1.webp", "/images/Mask/Philips mask/Philips Dreamware Nasal Mask2.webp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Nasal Mask" }] },

{ id: 80, slug: "philips-pico-nasal-mask", name: "Philips Pico Nasal Mask", price: 2200, offer: { type: "percentage", value: 10 }, category: "nasal-mask",
  description: "The Philips Pico Nasal Mask is a compact and lightweight CPAP mask designed to deliver effective sleep apnea therapy with minimal facial contact. Its simple, user-friendly design combines a soft dual-wall cushion with a slim forehead-free frame, providing a secure seal without unnecessary bulk. The lightweight headgear and minimal-contact structure help reduce pressure marks and enhance comfort during extended therapy sessions. Easy to fit, clean, and maintain, the Pico Nasal Mask is an excellent option for first-time CPAP users and experienced patients alike. Compatible with most CPAP, APAP, and BiPAP machines, it offers dependable performance, comfortable airflow delivery, and excellent value for daily sleep therapy.",
  images: ["/images/Mask/Philips mask/Philips Pico Nasal Mask1.webp", "/images/Mask/Philips mask/Philips Pico Nasal Mask2.jpg", "/images/Mask/Philips mask/Philips Pico Nasal Mask3.bmp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Nasal Mask" }] },


//Full Face Mask
{ id: 4, slug: "resmed-airfit-f20-full-face-mask", name: "Resmed AirFit F20 Full Face Mask", price: 7300, offer: { type: "percentage", value: 25 }, category: "full-face-mask", description: "Full face CPAP mask with superior comfort.", images: ["/images/Product1.jpg", "/images/Mask/Resmed AirTouch™ F20 Full Face Mask.webp", "/images/Mask/Resmed AirFit™ F20 Full Face Mask.webp", "/images/All.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
// { id: 32, slug: "airfit-f30", name: "AirFit™ F30", price: 7800, offer: { type: "percentage", value: 15 }, category: "full-face-mask", description: "Minimal-contact full face mask designed for comfort and freedom.", images: ["/images/Mask/AirFit-F30/1.webp", "/images/Mask/AirFit-F30/2.webp", "/images/Mask/AirFit-F30/3.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 33, slug: "airfit-f30i", name: "AirFit™ F30i", price: 8500, offer: { type: "flat", value: 1000 }, category: "full-face-mask", description: "Top-of-head tube full face mask for flexible sleep movement.", images: ["/images/Mask/Resmed AirFit F30i Full Face Mask/1.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/2.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/3.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/4.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 34, slug: "airtouch-f20", name: "AirTouch™ F20", price: 3900, category: "full-face-mask", description: "UltraSoft memory foam cushion full face CPAP mask.", images: ["/images/Mask/Resmed AirTouch™ F20 Full Face Mask.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 35, slug: "bestfit-2-full-face-mask", name: "BestFit 2 Full Face Mask", price: 4800, offer: { type: "percentage", value: 10 }, category: "full-face-mask", description: "Comfortable and reliable full face CPAP mask for daily therapy.", images: ["/images/Mask/Resmed Best Fit 2 Full Face Mask.jpg","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "BMC" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 36, slug: "acucare-f1-0", name: "AcuCare™ F1-0", price: 3900, category: "full-face-mask", description: "Lightweight full face CPAP mask with secure fit and comfort.", images: ["/images/Mask/AcuCare™ F1-0.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 37, slug: "acucare-f1-4", name: "AcuCare™ F1-4", price: 4100, category: "full-face-mask", description: "Soft cushion full face mask designed for stable CPAP therapy.", images: ["/images/Mask/AcuCare™ F1-4.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 74, slug: "philips-amara", name: "Philips Amara Full Face Mask", price: 4000, category: "full-face-mask", description: "Soft cushion full face mask designed for stable CPAP therapy.", images: ["/images/Mask/Philips mask/philips amara1.webp", "/images/Mask/Philips mask/philips amara2.webp", "/images/Mask/Philips mask/philips amara4.webp", "/images/Mask/Philips mask/philips amara3.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 75, slug: "philips-amara-gel", name: "PHILIPS Unisex Respironics Amara Gel Full Face Mask- Medium,Transparent", price: 5567, category: "full-face-mask", description: "Soft cushion full face mask designed for stable CPAP therapy.", images: [ "/images/Mask/Philips mask/philips amara gel2.jpg","/images/Mask/Philips mask/philips amara gel1.jpg", "/images/Mask/Philips mask/philips amara gel3.jpg", "/images/Mask/Philips mask/philips amara gel4.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },
{ id: 76, slug: "philips-dreamware", name: "Philips Dreamware Full Face mask", price: 4250, category: "full-face-mask", description: "Soft cushion full face mask designed for stable CPAP therapy.", images: [ "/images/Mask/Philips mask/Philips Respironics Dreamwear Full Face Mask1.jpg","/images/Mask/Philips mask/Philips Respironics Dreamwear Full Face Mask2.jpg", "/images/Mask/Philips mask/Philips Respironics Dreamwear Full Face Mask3.jpg", "/images/Mask/Philips mask/Philips Respironics Dreamwear Full Face Mask4.jpg"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Full Face Mask" }] },


//nasal pillow mask
{ id: 15, slug: "nasal-pillow-mask", name: "AirFit™ P30i Nasal Pillow Mask", price: 3500, category: "nasal-pillow-mask", description: "Lightweight nasal pillow mask.", images: ["/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/1.webp", "/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/2.webp", "/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/3.webp", "/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/4.webp","/images/Mask/Resmed AirFit™ P30i Nasal Pillow Mask/5.webp",], specifications: [{ label: "Category", value: "Mask" }] },
{ id: 38, slug: "airfit-p10", name: "AirFit™ P10", price: 3900, offer: { type: "percentage", value: 15 }, category: "nasal-pillow-mask", description: "Ultra-lightweight nasal pillow mask for quiet and comfortable CPAP therapy.", images: ["/images/Mask/Resmed AirFit™ P10 Nasal Pillow Mask.webp","/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Pillow Mask" }] },
{ id: 39, slug: "airfit-p10-for-airmini", name: "AirFit™ P10 for AirMini™", price: 6200, offer: { type: "flat", value: 800 }, category: "nasal-pillow-mask", description: "Compact nasal pillow mask specially designed for AirMini travel CPAP.", images: ["/images/Mask/Resmed AirFit™ P10 for AirMini™.webp", "/images/Mask/Resmed AirFit F30i Full Face Mask/5.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "Nasal Pillow Mask" }] },

//-------------------------------------------------------------------------------------------------------------

//cpap
{ id: 2, slug: "resmed-airsense-10-autoset-tripack", name: "AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube", price: 71000, offer: { type: "flat", value: 2000 }, category: "cpap-machine", description: "Advanced CPAP machine with humidifier.", 
        images: ["/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/2.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/3.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/4.webp"
        ], 
        specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }] },

{ id: 3, slug: "airsense-10", name: "AirSense™ 10 Elite -Tripack 3G", price: 59000, offer: { type: "flat", value: 5000 }, category: "cpap-machine", description: "Reliable auto CPAP therapy device.",
 images: ["/images/Devices/AirSense™ 10 Elite -Tripack 3G.webp"],
  specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "CPAP" }] },


{ id: 68, slug: "philips-dreamstation", name: "Philips Respironics DreamStation Auto CPAP", price: 52499, category: "cpap-machine",
   description: "Philips Respironics DreamStation Auto CPAP sleep therapy devices are designed to be as comfortable and easy to experience as sleep is intended to be. Connecting patients and care teams, DreamStation devices empower users to embrace their care with confidence and enable care teams to practice efficient and effective patient management.",
 images: ["/images/Devices/Philips Respironics DreamStation Auto CPAP/DREAM-STATION.webp",
   "/images/Devices/Philips Respironics DreamStation Auto CPAP/DREAM-STATION1.webp"],
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },


 { id: 5, slug: "airsense-10-for-her", name: "AirSense™ 10 AutoSet™ for Her CPAP Machine 4G", price: 59000, category: "cpap-machine", description: "Bi-level ventilation support device.", 
  images: ["/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/1.webp",
     "/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/2.webp",
      "/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/3.webp", 
      "/images/Devices/AirSense™ 10 AutoSet™ for Her CPAP Machine 4G/4.jpg"], 
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "VPAP" }] },

{ id: 6, slug: "airsense-10-autoset-tripack-4G", name: "AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir", price: 49000, category: "cpap-machine", description: "Advanced VPAP ST device.",
   images: ["/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/1.webp",
   "/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/2.webp",
    "/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/3.webp", 
    "/images/Devices/AirSense™ 10 Autoset™ Tripack 4G CPAP Device with HumidAir and ClimateLineAir/4.webp"], 
    specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "VPAP ST" }] },


{ id: 7,slug: "aircurve-10-vauto-4g-tripack", name: "AirCurve™ 10 VAuto 4G Tripack With Humidifier and ClimateLineAir™ Tube", price: 67000, category: "cpap-machine", description: "Next-generation CPAP device.",
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

{ id: 9, slug: "airmini-autoset-cpap-device", name: "AirMini™ AutoSet CPAP Device", price: 45500, category: "cpap-machine", description: "Portable CPAP device.",
 images: ["/images/Product4.webp", "/images/Devices/AirMini™ AutoSet CPAP Device/2.webp",
   "/images/Devices/AirMini™ AutoSet CPAP Device/5.webp", 
   "/images/Devices/AirMini™ AutoSet CPAP Device/8.webp"], 
   specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }, { label: "Category", value: "CPAP Machine" }] },

{ id: 40, slug: "airstart-10-with-humidification-and-tube", name: "AirStart™ 10 APAP with humidification and tube", price: 24990, category: "cpap-machine", description: "Next-generation CPAP device.",
 images: ["/images/Devices/AirStart™ 10 APAP with humidification and tube/1.webp",
   "/images/Devices/AirStart™ 10 APAP with humidification and tube/2.webp",
    "/images/Devices/AirStart™ 10 APAP with humidification and tube/3.webp",
     "/images/Devices/AirStart™ 10 APAP with humidification and tube/4.webp"],
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },

{ id: 66, slug: "oxymed-sleepeasy", name: "OxyMed SleepEasy Auto CPAP", price: 29000, category: "cpap-machine", description: "Next-generation CPAP device.",
 images: ["/images/Devices/OxyMed SleepEasy Auto CPAP/1.webp",
   "/images/Devices/OxyMed SleepEasy Auto CPAP/2.webp",
    "/images/Devices/OxyMed SleepEasy Auto CPAP/3.webp",
     "/images/Devices/OxyMed SleepEasy Auto CPAP/4.webp"],
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },


// -----------------------------------------------------------------------------------------------------------------------------------------------------

//Bipap
{ 
  id: 41, slug: "lumis-100-vpap-st", name: "Lumis™ 100 VPAP ST Non- Invasive Ventilator", price: 49000, category: "bipap-machine",
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
  id: 67, slug: "oxymed-airsmart",
  name: "Oxymed AirSmart BPAP ST", price: 45000, category: "bipap-machine", description: "Auto-adjusting bilevel therapy device for personalized sleep apnea treatment.",
  images: [
    "/images/Devices/Oxymed AirSmart BPAP ST/1.jpg",
     "/images/Devices/Oxymed AirSmart BPAP ST/4.jpg",
    "/images/Devices/Oxymed AirSmart BPAP ST/3.jpg",
    "/images/Devices/Oxymed AirSmart BPAP ST/2.jpg"
  ],
  specifications: [
    { label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "Wireless Enabled" }
  ]
},

{ 
  id: 42, slug: "resmed-lumis-150",
  name: "Resmed Lumis™ 150 VPAP ST", price: 68000, category: "bipap-machine", description: "Auto-adjusting bilevel therapy device for personalized sleep apnea treatment.",
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
  id: 69,
  slug: "philips-auto-bipap",
  name: "Philips Dreamstation Auto BiPAP",
  price: 69500,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: [
    "/images/Devices/Bipap Machiene/Philips Dreamstation Auto BiPAP1.webp",
     "/images/Devices/Bipap Machiene/Philips Dreamstation Auto BiPAP2.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 70,
  slug: "philips-avaps",
  name: "Philips DreamStation AVAPS 30 AAM-AE",
  price: 83999,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: [
    "/images/Devices/Bipap Machiene/Philips DreamStation AVAPS 30 AAM-AE1.webp",
     "/images/Devices/Bipap Machiene/Philips DreamStation AVAPS 30 AAM-AE2.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 71,
  slug: "philips-dreamStation-bipap",
  name: "Philips DreamStation BiPAP AVAPS 25",
  price: 68000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: [
    "/images/Devices/Bipap Machiene/Philips DreamStation BiPAP AVAPS 1.webp",
     "/images/Devices/Bipap Machiene/Philips DreamStation BiPAP AVAPS 2.webp",
     "/images/Devices/Bipap Machiene/Philips DreamStation BiPAP AVAPS 3.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 43,
  slug: "lumis-150-invasive-ventilator",
  name: "Resmed AirCurve 10 VAuto BIPAP – Best Auto BIPAP",
  price: 66800,
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

{ 
  id: 72,
  slug: "philips-bipap-pro",
  name: "Philips DreamStation BiPAP Pro",
  price: 65000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: [
    "/images/Devices/Bipap Machiene/Philips DreamStation BiPAP Pro1.webp",
     "/images/Devices/Bipap Machiene/Philips DreamStation BiPAP Pro2.webp",
     "/images/Devices/Bipap Machiene/Philips DreamStation BiPAP Pro3.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 73,
  slug: "philips-bipap-st-25",
  name: "Philips Respironics DreamStation BiPAP S/T 25",
  price: 64000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: [
    "/images/Devices/Bipap Machiene/Philips Respironics DreamStation BiPAP1.webp",
     "/images/Devices/Bipap Machiene/Philips Respironics DreamStation BiPAP2.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 83,
  slug: "bmc-bipap",
  name: "BMC G2S B30VT BIPAP",
  price: 23000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: ["/images/Devices/Bipap Machiene/BMC G2S B30VT BIPAP2.jpg",
    "/images/Devices/Bipap Machiene/BMC G2S B30VT BIPAP1.jpg",
     "/images/Devices/Bipap Machiene/BMC G2S B30VT BIPAP3.webp",
     "/images/Devices/Bipap Machiene/BMC G2S B30VT BIPAP4.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},
{ 
  id: 84,
  slug: "loewenstein-bipap",
  name: "Loewenstein Prisma 25ST BIPAP",
  price: 73500,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: ["/images/Devices/Bipap Machiene/Loewenstein Prisma 25ST BIPAP3.webp",
    "/images/Devices/Bipap Machiene/Loewenstein Prisma 25ST BIPAP4.webp",
     "/images/Devices/Bipap Machiene/Loewenstein Prisma 25ST BIPAP1.webp",
     "/images/Devices/Bipap Machiene/Loewenstein Prisma 25ST BIPAP2.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},
{ 
  id: 85,
  slug: "loewenstein-bipap-st",
  name: "Loewenstein Prisma 30ST BIPAP",
  price: 83300,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: ["/images/Devices/Bipap Machiene/Loewenstein Prisma 30ST BIPAP3.webp", "/images/Devices/Bipap Machiene/Loewenstein Prisma 30ST BIPAP1.webp",
    "/images/Devices/Bipap Machiene/Loewenstein Prisma 30ST BIPAP2.webp"
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 86,
  slug: "bmc-b30-bipap-st",
  name: "BMC G3 B30vt BIPAP Device with Humidifier and Mask",
  price: 40000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: ["/images/Devices/Bipap Machiene/BMC G3 B30vt BIPAP Device with Humidifier and Mask1.jpg",
     "/images/Devices/Bipap Machiene/BMC G3 B30vt BIPAP Device with Humidifier and Mask2.jpg",
    "/images/Devices/Bipap Machiene/BMC G3 B30vt BIPAP Device with Humidifier and Mask3.jpg"
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},
{ 
  id: 87,
  slug: "loewenstein-bipap-prisma",
  name: "Lowenstein PrismaLab Bipap",
  price: 188000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: ["/images/Devices/Bipap Machiene/Lowenstein PrismaLab Bipap1.webp","/images/Devices/Bipap Machiene/Lowenstein PrismaLab Bipap2.webp",
    "/images/Devices/Bipap Machiene/Lowenstein PrismaLab Bipap3.webp","/images/Devices/Bipap Machiene/Lowenstein PrismaLab Bipap4.webp",
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},

{ 
  id: 88,
  slug: "bmc-bipap-g3",
  name: "BMC G3 B25vt BIPAP Device with Humidifier and Mask",
  price: 40000,
  category: "bipap-machine",
  description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support.",
  images: ["/images/Devices/Bipap Machiene/BMC G3 B25vt BIPAP Device with Humidifier and Mask1.webp","/images/Devices/Bipap Machiene/BMC G3 B25vt BIPAP Device with Humidifier and Mask2.webp",
    "/images/Devices/Bipap Machiene/BMC G3 B25vt BIPAP Device with Humidifier and Mask3.webp"
  ],
  specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }
  ]
},
//----------------------------------------------------------------------------------------------------------------------------------------------------------


//oc
{ id: 10, slug: "oxymed-portable-oxygen-concentrator", name: "Oxymed Portable Oxygen Concentrator", price: 145000, category: "oxygen-concentrator", description: "Portable oxygen concentrator.", images: ["/images/Oc/deal1.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Category", value: "Oxygen Concentrator" }] },
{ id: 65, slug: "evox", name: "Evox 5 LPM", price: 35000, category: "oxygen-concentrator", description: "Standard oxygen mask.",
   images: ["/images/Oc/evox1.jpg", "/images/Oc/evox2.jpg", "/images/Oc/evox3.jpg"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },
{ id: 11, slug: "oxymed-oxygen-concentrator-5lpm", name: "OxyMed Oxygen Concentrator Machine 5LPM", price: 41500, category: "oxygen-concentrator", description: "5LPM oxygen concentrator.", images: ["/images/Oc/deal2.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Capacity", value: "5LPM" }] },
{ id: 13, slug: "philips-everflo-oxygen-concentrator", name: "Philips EverFlo Home Oxygen (5 LPM)", price: 69000, category: "oxygen-concentrator", description: "Home oxygen concentrator.", images: ["/images/Oc/deal4.webp"], specifications: [{ label: "Brand", value: "Philips" }, { label: "Capacity", value: "5LPM" }] },
{ id: 12, slug: "oxymed-10ltr-oxygen-concentrator", name: "OxyMed 10 Ltr Oxygen Concentrator", price: 55000, category: "oxygen-concentrator", description: "High capacity concentrator.", images: ["/images/Oc/deal3.jpg"], specifications: [{ label: "Brand", value: "Oxymed" }, { label: "Capacity", value: "10LPM" }] },
{ id: 64, slug: "nidek", name: "Nidek Nuvo Lite 5 LPM", price: 65000, category: "oxygen-concentrator", description: "Standard oxygen mask.",
   images: ["/images/Oc/nidek1.jpg", "/images/Oc/nidek2.jpg", "/images/Oc/nidek3.jpg","/images/Oc/nidek4.jpg"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },
{ id: 16, slug: "oxygen-machines", name: "Oxymed Inteli 5LPM Auto Flow Oxygen Concentrator", price: 55500, category: "oxygen-concentrator", description: "Standard oxygen mask.",
   images: ["/images/Oc/1.jpg", "/images/Oc/2.jpg", "/images/Oc/3.jpg","/images/Oc/5.jpg"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },
{ id: 81, slug: "philipsgo-oxygen-machines", name: "Philips Simply Go Oxygen Concentrator", price: 190000, category: "oxygen-concentrator", description: "Standard oxygen mask.",
   images: ["/images/Oc/Philips Simply Go Oxygen Concentrator1.webp", "/images/Oc/Philips Simply Go Oxygen Concentrator2.webp"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },
{ id: 82, slug: "simply-go-oxygen-machines", name: "Simply Go Mini Oxygen Concentrator", price: 228000, category: "oxygen-concentrator", description: "Standard oxygen mask.",
   images: ["/images/Oc/Simply Go Mini Oxygen Concentrator1.webp", "/images/Oc/Simply Go Mini Oxygen Concentrator2.webp"], specifications: [{ label: "Category", value: "Oxygen Accessory" }] },

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
{ id: 63, slug: "n20-sys-headgear", name: "Resmed AirFit™ N20 Frame SYS", price: 1100, category: "mask-headgear", description: "Mask frame.", images: ["/images/Accesories/Mask frame and vents/Resmed AirFit™ N20 Frame SYS.webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//mask and cushion
{ id: 22, slug: "airfit-cushion", name: "Resmed AirFit™ F20 Cushion", price: 900, category: "mask-cushion", description: "Comfort cushion.", images: ["/images/Accesories/Cushion/Resmed AirFit™ F20 Cushion.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 27, slug: "f30-cushion", name: "Resmed AirFit™ F30 Cushion", price: 1800, category: "mask-cushion", description: "Hose Pipes & Tubes", images: ["/images/Accesories/Cushion/Resmed AirFit™ F30 Cushion.webp", "/images/Accesories/Cushion/Resmed AirFit™ F30 Cushion2.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 23, slug: "f30i-cushion", name: "Resmed AirFit™ F30i Cushion", price: 400, category: "mask-cushion", description: "Replacement clips.", images: ["/images/Accesories/Cushion/Resmed AirFit™ F30i Cushion.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 14, slug: "n20-cushion", name: "Resmed AirFit™ N20 Cushion", price: 2900, category: "mask-cushion", description: "Setup pack for AirMini.", images: ["/images/Accesories/Cushion/Resmed AirFit™ N20 Cushion.webp"], specifications: [{ label: "Brand", value: "ResMed" }, { label: "Category", value: "CPAP Accessory" }] },
{ id: 17, slug: "n30i-cushion", name: "Resmed AirFit™ N30i Cushion", price: 3500, category: "mask-cushion", description: "Rental service.", images: ["/images/Accesories/Cushion/Resmed AirFit™ N30i Cushion.webp"], specifications: [{ label: "Type", value: "Rental" }] },
{ id: 19, slug: "p30i-cushion", name: "Resmed AirFit™ P30i Cushion", price: 300, category: "mask-cushion", description: "Air filters.", images: ["/images/Accesories/Cushion/Resmed AirFit™ P30i Cushion.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 25, slug: "airtouch-f20I", name: "Resmed AirTouch F20 Cushion (Pack of 2)", price: 2000, category: "mask-cushion", description: "Accessories for AirSense 11.", images: ["/images/Accesories/Cushion/Resmed AirTouch F20 Cushion (Pack of 2).webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//Mask pad clip
{ id: 26, slug: "n20-accessories", name: "Resmed N20 Mask Magnet Clips (2PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/1.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 55, slug: "p10-accessories", name: "Resmed P10 Mask Headgear Clips (10PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/2.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 57, slug: "n20pk-accessories", name: "Resmed N20 Mask Magnet Clips (2PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/3.webp", "/images/Accesories/Mask Pad Clips/4.webp"], specifications: [{ label: "Category", value: "Accessory" }] },
{ id: 58, slug: "airmini-accessories", name: "Resmed N20 Mask Magnet Clips (2PK)", price: 1800, category: "mask-clips", description: "Accessories for Resmed N20 Mask ", images: ["/images/Accesories/Mask Pad Clips/5.webp"], specifications: [{ label: "Category", value: "Accessory" }] },

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Rental
{ id: 61, slug: "rental-airsence", name: "Rental AirSense™ 11 AutoSet™ Tripack 4G with 1 Mask", price: 6900, category: "rental", description: "Mask frame.", 
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

{ id: 89, slug: "lumis-150", name: "Resmed AirCurve 10 VAuto BIPAP – Best Auto BIPAP", price: 5900, category: "rental", description: "Intelligent bilevel ventilator with backup rate and advanced respiratory support..", 
   images: [
    "/images/Devices/Lumis™ 150 VPAP ST-A Non- Invasive Ventilator.webp",
  ], specifications: [
    { label: "Brand", value: "ResMed" },
    { label: "Connectivity", value: "Cloud Connected" }]
  },

{ id: 90, slug: "airsense-10", name: "AirSense™ 11 AutoSet™ 4G Tripack", price: 4900, category: "rental", description: "Advanced CPAP machine", 
  images: ["/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/2.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/3.1.webp",
          "/images/Devices/AirSense™ 11 AutoSet™ 4G Tripack - With Humidifier and ClimateLineAir™ Tube/4.webp"
        ], 
        specifications: [{ label: "Brand", value: "ResMed" }, { label: "Type", value: "Auto CPAP" }] 
      },

  { id: 91, slug: "airstart-10", name: "AirStart™ 10 APAP", price: 3900, category: "rental", description: "Advanced CPAP machine", 
  images: ["/images/Devices/AirStart™ 10 APAP with humidification and tube/1.webp",
   "/images/Devices/AirStart™ 10 APAP with humidification and tube/2.webp",
    "/images/Devices/AirStart™ 10 APAP with humidification and tube/3.webp",
     "/images/Devices/AirStart™ 10 APAP with humidification and tube/4.webp"],
      specifications: [{ label: "Brand", value: "ResMed" }, { label: "Connectivity", value: "4G Enabled" }] },


]
// LAST 91