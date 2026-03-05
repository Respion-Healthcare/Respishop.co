"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageSlider({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="flex gap-4">

      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="thumbnail"
            width={80}
            height={80}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer border rounded-md p-1 ${
              selectedImage === img
                ? "border-black"
                : "border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div>
        <Image
          src={selectedImage}
          alt={name}
          width={450}
          height={450}
          className="rounded-xl border"
        />
      </div>

    </div>
  )
}