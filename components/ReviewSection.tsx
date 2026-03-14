"use client"

import { useState } from "react"
import { Star } from "lucide-react"

export default function ReviewSection(){

const [rating,setRating] = useState(0)
const [review,setReview] = useState("")

return(

<div className="mt-6">

<h3 className="font-semibold mb-4">
Customer Reviews
</h3>

<div className="flex gap-1 mb-3">

{[1,2,3,4,5].map((s)=>(
<Star
key={s}
onClick={()=>setRating(s)}
className={`w-5 h-5 cursor-pointer ${
rating>=s
?"fill-yellow-400 text-yellow-400"
:"text-gray-300"
}`}
/>
))}

</div>

<textarea
value={review}
onChange={(e)=>setReview(e.target.value)}
className="w-full border p-3 rounded"
placeholder="Write your review..."
/>

<button
className="mt-3 bg-black text-white px-6 py-2 rounded"
>
Submit Review
</button>

</div>

)
}