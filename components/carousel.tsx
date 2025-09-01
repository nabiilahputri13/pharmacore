'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  src: string
  alt: string
  caption?: string
  href?: string
}

const slides: Slide[] = [
  {
    src: '/carousel.png',
    alt: 'Newest Office Phone Regulation',
    caption: 'Newest Office Phone Regulation',
    href: '/highlights',
  },
  {
    src: '/carousel-2.png',
    alt: 'Newest Storage Management',
    caption: 'Newest Storage Management',
    href: '/highlights',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setPrev(current)
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setPrev(current)
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full aspect-[21/12]">
        {slides.map((slide, index) => {
          let position = 'translate-x-full'
          if (index === current) position = 'translate-x-0'
          else if (index === prev) position = '-translate-x-full'

          return (
            <Link
              key={index}
              href={slide.href || '#'}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-[900ms] ease-in-out ${position}`}
            >
              <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority />
              {slide.caption && (
                <div className="absolute bottom-8 left-8 text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                  {slide.caption}
                </div>
              )}
            </Link>
          )
        })}
      </div>

      {/* Prev button */}
      {slides.length > 1 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Next button */}
      {slides.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPrev(current)
                setCurrent(i)
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}