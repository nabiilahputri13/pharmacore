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
  { src: '/carousel.png', alt: 'Newest Office Phone Regulation', caption: 'Newest Office Phone Regulation', href: '/highlights' },
  { src: '/carousel-2.png', alt: 'Newest Storage Management', caption: 'Newest Storage Management', href: '/highlights' },
  // { src: '/carousel-3.png', alt: 'Newest Meeting Policy', caption: 'Newest Meeting Policy', href: '/highlights' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(1) // start di index 1 (karena ada clone di depan)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isLocked, setIsLocked] = useState(false) // lock klik pas transisi
  const containerRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // clone slides
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]]

  const nextSlide = () => {
    if (isLocked) return
    setIsLocked(true)
    setCurrent((prev) => prev + 1)
    setIsTransitioning(true)
  }

  const prevSlide = () => {
    if (isLocked) return
    setIsLocked(true)
    setCurrent((prev) => prev - 1)
    setIsTransitioning(true)
  }

  // auto slide
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  // handle looping
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (current === extendedSlides.length - 1) {
        // di clone first → lompat ke asli first
        setIsTransitioning(false)
        setCurrent(1)
      } else if (current === 0) {
        // di clone last → lompat ke asli last
        setIsTransitioning(false)
        setCurrent(slides.length)
      }
      setIsLocked(false) // buka lock setelah transisi selesai
    }

    const node = containerRef.current
    if (node) node.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      if (node) node.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [current, extendedSlides.length])

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <Link
            key={index}
            href={slide.href || '#'}
            className="w-full flex-shrink-0 relative aspect-[21/12]"
          >
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority />
            {slide.caption && (
              <div className="absolute bottom-8 left-8 text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                {slide.caption}
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prevSlide}
        disabled={isLocked}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition disabled:opacity-50"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        disabled={isLocked}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition disabled:opacity-50"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (isLocked) return
              setIsLocked(true)
              setCurrent(i + 1) // +1 karena ada clone di depan
              setIsTransitioning(true)
            }}
            className={`w-3 h-3 rounded-full transition ${
              i + 1 === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
