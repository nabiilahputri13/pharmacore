'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  title: string
  desc: string
  img: string
}

interface CarouselProps {
  items: NewsItem[]
}

export default function Carousel2({ items }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + items.length) % items.length)
  const next = () => setIndex((index + 1) % items.length)

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mt-2">{items[index].title}</h2>

      <div className="relative mt-4 flex justify-center">
        <Image
          src={items[index].img}
          alt={items[index].title}
          width={500}
          height={300}
          className=""
        />
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      <p className="text-gray-500 mt-4">
        {items[index].desc}{" "}
        <button className="text-blue-600 font-medium hover:underline">View More</button>
      </p>
    </div>
  )
}
