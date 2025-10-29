'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Card2 from '@/components/card-2'

const useTypingEffect = (text: string, speed = 150, pause = 1000) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const typingSpeed = isDeleting ? speed / 2 : speed

    const interval = setInterval(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          setIndex(index + 1)
        } else {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        if (index > 0) {
          setDisplayedText(text.slice(0, index - 1))
          setIndex(index - 1)
        } else {
          setIsDeleting(false)
        }
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [index, isDeleting])

  return displayedText
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const typingText = useTypingEffect('Since 2011', 150, 1000)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div>
      {/* ABOUT US SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16"
      >
        <div className="max-w-6xl mx-auto px-6 gap-12 items-center">
          <motion.div className="flex flex-col items-start gap-4" variants={container}>
            <motion.h3 variants={item} className="text-blue-900 font-semibold">
              About Us
            </motion.h3>

            <motion.h1
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-gray-900"
            >
              Pharmacore Technology and Innovation, Sdn. Bhd
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-blue-900 font-semibold text-base md:text-xl leading-relaxed"
            >
              {typingText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 text-gray-600 text-base md:text-l leading-relaxed"
            >
              Having the purpose of creating a greater good for the society through innovation,
              ParagonCorp was established in 1985. Starting as the holding company based in Indonesia,
              we have now authorized a subsidiary company in Malaysia named Pharmacore Technology and
              Innovation, Sdn. Bhd.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 text-gray-600 text-base md:text-l leading-relaxed"
            >
              As of now, Pharmacore Technology and Innovation operates as a principal where we market
              ParagonCorp's leading brands, such as Wardah, Emina, Kahf, Instaperfect, and Crystallure.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* NAVY SECTION WITH LOGO + VIDEO */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#0A2463] py-16 flex flex-col items-center justify-center"
      >
        {/* LOGO */}
        <motion.div variants={item} className="mb-10">
          <Image
            src="/paragoncorp-white.png"
            alt="ParagonCorp Logo"
            width={280}
            height={80}
            className="object-contain"
          />
        </motion.div>

        {/* VIDEO */}
        <motion.div
          variants={item}
          className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7ZPcoEhONCA?si=QPnXVIVNUCaQWzKo"
            title="Pharmacore Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          variants={item}
          className="max-w-6xl mx-auto px-6 gap-12 items-center mt-8"
        >
          <motion.p
            variants={item}
            className="text-white text-base md:text-l leading-relaxed text-center"
          >
            Established in 1985, ParagonCorp is a holding company that was initiated to provide beauty
            products through the biggest and most loved beauty brands such as Wardah, Emina, Kahf,
            Crystallure, and Instaperfect with the purpose of creating a greater good to the society.
          </motion.p>
        </motion.div>

        {/* VISION & MISSION */}
        <motion.div
          variants={container}
          className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-white"
        >
          {/* Vision */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold mb-4 text-center">Vision</h3>
            <p className="text-base leading-relaxed text-center">
              A company committed to having the best corporate governance and continuous improvement,
              in order to make each day better than yesterday, through high quality products that
              benefit the Paragonians, partners, society, and the environment.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold mb-4 text-center">Mission</h3>
            <ul className="list-disc list-inside space-y-2 text-center leading-relaxed">
              <li>Developing Paragonians</li>
              <li>Creating Kindness for Customers</li>
              <li>Continuous Improvement</li>
              <li>Grow Together</li>
              <li>Preserving the Earth</li>
              <li>Supporting Education and Health of the Nation</li>
              <li>Developing Business</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* SECTION 3 (kosong tapi motion-ready) */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 px-16 py-12"
      >
        <motion.div
          variants={item}
          className="bg-gray-100 rounded-xl p-8 text-center text-gray-700"
        >
          Coming soon...
        </motion.div>
      </motion.section>
    </div>
  )
}
