"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageSlider({images,name}:any){

const [active,setActive] = useState(0)

return(

<div>

<div className="border rounded-lg overflow-hidden">

<Image
src={images[active]}
alt={name}
width={500}
height={500}
className="w-full h-[420px] object-contain hover:scale-110 transition"
/>

</div>

<div className="flex gap-3 mt-4">

{images.map((img:any,i:number)=>(
<Image
key={i}
src={img}
alt=""
width={80}
height={80}
onClick={()=>setActive(i)}
className={`border cursor-pointer p-1 ${
active===i?"border-black":""
}`}
/>
))}

</div>

</div>

)
}