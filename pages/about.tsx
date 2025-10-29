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

      <motion.section
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="px-16 py-12"
>
  <motion.h1
    variants={item}
    className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12"
  >
    Our Brands
  </motion.h1>

  <motion.div
    variants={item}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
  >
    {/* Brand 1 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-teal-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-md"
    >
      <img
        src="/wardah.png"
        alt="Brand 1"
        className="w-24 h-24 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-900">Wardah</h2>
      <p className="text-gray-600 mt-2 mb-4 text-sm">
        Wardah is a pioneer of halal cosmetics in Indonesia that combines natural purity with a halal, modern, and reliable process to produce high-quality halal products with international innovation standards. Through love, respect and appreciation, we are committed to getting women love themselves and making true beauty shines.
      </p>
      <a
        href="https://www.wardahbeauty.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition"
      >
        Visit Website
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M4.5 19.5L19.5 4.5"
          />
        </svg>
      </a>
    </motion.div>

    {/* Brand 2 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-pink-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-md"
    >
      <img
        src="/emina.png"
        alt="Brand 2"
        className="w-24 h-24 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-900">Emina</h2>
      <p className="text-gray-600 mt-2 mb-4 text-sm">
        For Emina, every day is a new opportunity to be greeted with enthusiasm and passion. Emina's range of skincare and make-up are very easy to apply for teenagers and new makeup users. Emina will help you radiate positive energy every day with happy and healthy skin!
      </p>
      <a
        href="https://www.eminacosmetics.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition"
      >
        Visit Website
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M4.5 19.5L19.5 4.5"
          />
        </svg>
      </a>
    </motion.div>

    {/* Brand 3 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-md"
    >
      <img
        src="/tavi.jpg"
        alt="Brand 3"
        className="w-24 h-24 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-900">Tavi</h2>
      <p className="text-gray-600 mt-2 mb-4 text-sm">
        TAVI was born from a hybrid of creative minds that value exploration with thoughtfulness of scientists that always sparks curiosity. Since creativity is in our DNA, we are genuinely invested in exploring out of the box approaches to create unpredictable combo of powerful ingredients to deliver effective and gentle formulas. In addition, we respect the planet as much as we do your skin.
      </p>
      <a
        href="https://www.tavi-world.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition"
      >
        Visit Website
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M4.5 19.5L19.5 4.5"
          />
        </svg>
      </a>
    </motion.div>
  </motion.div>
</motion.section>


    </div>
  )
}
