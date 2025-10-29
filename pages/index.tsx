'use client'

import { useEffect, useState } from 'react'
import Carousel from '@/components/carousel'
import Image from 'next/image'
import Card from '@/components/card'
import Carousel2 from '@/components/carousel-2'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  const news = [
    {
      title: "Wardah Skin Science Academy",
      desc: "Wardah Skin Science Academy adalah sebuah platform online dimana peserta dapat belajar langsung dari global dan local skin expert tentang....",
      img: "/carousel2.png",
    },
    {
      title: "Event 2",
      desc: "Deskripsi event kedua...",
      img: "/event2.png",
    },
  ]

  const faqItems = [
  "Take leave of absence",
  "Request document/letter",
  "Fill work attendance",
  "Request office phone",
  "Get business trip info",
  "Claim free products",
  "See employee benefit",
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
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-gray-900"
            >
              Welcome to
            </motion.h1>

            {/* Baris 2: Pharmago + Logo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3"
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
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3 text-gray-600 text-base md:text-l leading-relaxed max-w-xl"
            >
              Welcome to Pharmago! HR Portal for Pharmacore (Paragon Malaysia). Access leave requests, documents, attendance, benefits, and company updates — everything you need for your employee journey in one secure place.

             </motion.p>
          </div>

          {/* Kanan: Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Carousel />
          </motion.div>
        </div>
      </section>

      {/* Gradient Section with Cards */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-b from-[#D6F0F0] via-[#8CD1E2] via-[#83B0E1] to-[#3187D9] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "HR Services", desc: "HR Services is an important page on a company website designed to provide employees with easy access to various services and information related to human resources." },
              { title: "Compensation & Benefit", desc: "Compensation & Benefit is an important page on a company website designed to provide employees with clear information about salary structures, allowances, bonuses, insurance, and other benefits they are entitled to. It helps employees easily understand and access details related to their compensation package." },
              { title: "Work Facility", desc: "Work Facility is an important page on a company website designed to give employees access to information about the facilities provided by the company, such as office spaces, equipment, technology, and other resources that support their daily work and productivity." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card title={card.title} description={card.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + News Section */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 px-16 py-12">
        {/* Left - FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-blue-900 font-semibold">FAQ</h3>
          <h2 className="text-3xl font-bold mt-2">How do I...</h2>
          <p className="text-gray-500 mt-2">
            Here are some of the most common actions you can do in the company’s HR system. Select the option that fits your needs below.
          </p>
          <div className="mt-6 space-y-3">
            {faqItems.map((item, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex items-center justify-start gap-3 px-5 py-3 rounded-lg bg-[#0A2463] text-white hover:bg-[#60A5FA]"
          >
            <Image
              src={`/b${i + 1}.png`}
              alt={`icon ${i + 1}`}
              width={24}
              height={24}
            />
            {item}
          </motion.button>
        ))}
          </div>
          <button className="mt-3 text-blue-600 font-medium hover:underline">View More</button>
        </motion.div>

        {/* Garis pemisah */}
        <div className="w-px bg-gray-300 hidden md:block"></div>

        {/* Right - News & Update */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-blue-900 font-semibold">News & Update</h3>
          <Carousel2 items={news} />
        </motion.div>
      </section>
    </div>
  )
}
