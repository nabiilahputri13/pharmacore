'use client'

import { useEffect, useState } from 'react'
import Carousel from '@/components/carousel'
import Image from 'next/image'
import Card from '@/components/card'
import Carousel2 from '@/components/carousel-2'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  const news = [
    {
      title: "Wardah Skin Science Academy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      img: "/carousel2.png", // ganti dengan gambar beneran
    },
    {
      title: "Event 2",
      desc: "Deskripsi event kedua...",
      img: "/event2.png",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kiri: Title + Desc */}
          <div className="flex flex-col items-start gap-4">
            {/* Baris 1: Welcome to */}
            <h1
              className={`text-2xl md:text-3xl font-semibold text-gray-900 transition-all duration-1000 ease-in-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-100`}
            >
              Welcome to
            </h1>

            {/* Baris 2: Pharmago + Logo */}
            <div
              className={`flex items-center gap-3 transition-all duration-1000 ease-in-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-300`}
            >
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
                Pharmago!
              </h1>
              <Image
                src="/logo-2.png"
                alt="Pharmago Logo"
                width={70}
                height={70}
                priority
              />
            </div>

            {/* Deskripsi */}
            <p
              className={`mt-3 text-gray-600 text-base md:text-l leading-relaxed max-w-xl transition-all duration-1000 ease-in-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-500`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Kanan: Carousel */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } delay-700`}
          >
            <Carousel />
          </div>
        </div>
      </section>

      {/* Full-Bleed Gradient Section + Staggered Animation */}
      {/* <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#D6F0F0] via-[#8CD1E2] via-[#83B0E1] to-[#3187D9]"> */}
 
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-b from-[#D6F0F0] via-[#8CD1E2] via-[#83B0E1] to-[#3187D9] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div
              className={`transition-all duration-1000 ease-in-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-100`}
            >
              <Card
                title="HR Services"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div
              className={`transition-all duration-1000 ease-in-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-300`}
            >
              <Card
                title="Compensation & Benefit"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div
              className={`transition-all duration-1000 ease-in-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-500`}
            >
              <Card
                title="Work Facility"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </div>
      </section>

     <section className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 px-16 py-12">
  {/* Left - FAQ */}
  <div>
    <h3 className="text-blue-900 font-semibold">FAQ</h3>
    <h2 className="text-3xl font-bold mt-2">How do I...</h2>
    <p className="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="mt-6 space-y-3">
      {[
        "Take leave of absence",
        "Request document/letter",
        "Fill work attendance",
        "Request office phone",
        "Get business trip info",
        "Claim free products",
        "See employee Benefit",
      ].map((item, i) => (
        <button
          key={i}
          className="w-full flex items-center justify-start gap-3 px-5 py-3 rounded-lg bg-[#0A2463] text-white hover:bg-blue-800"
        >
          <span>📌</span> {item}
        </button>
      ))}
    </div>
    <button className="mt-3 text-blue-600 font-medium hover:underline">View More</button>
  </div>

  {/* Garis pemisah */}
  <div className="w-px bg-gray-300 hidden md:block"></div>

  {/* Right - News & Update */}
  <div>
    <h3 className="text-blue-900 font-semibold">News & Update</h3>
    <Carousel2 items={news} />
  </div>
</section>

    </div>
  )
}
