'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Card2 from '@/components/card-2'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Variants untuk container & children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // jeda antar child
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6 gap-12 items-center">
          <motion.div
            className="flex flex-col items-start gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={item} className="text-blue-900 font-semibold">
              HR Services
            </motion.h3>

            <motion.h1
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-gray-900"
            >
              Business Trip
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-gray-600 text-base md:text-l leading-relaxed"
            >
              Business Trip is a trip made to an area outside the range of
              personnel's daily workplace, with business purposes such as branch
              visits/prospect visits, event arrangements, meetings, business,
              conferences, seminars, training, recruitment, and other business
              activities. The cost of business trip is not a personnel
              allowance. Therefore, the company makes reasonable reimbursements.
              The minimum distance of business trip is 50 km from the placement
              work area and personnel coverage area, with the length of official
              travel is a maximum of 14 days. Personnel apply for business trip
              at least 7 days before domestic trip, and 14 days before overseas
              trip.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section dengan background */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <img src="/bg-bt.png" alt="Background" className="w-full h-auto" />

        <motion.div
          className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 py-16 text-white"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={item}
            className="text-center text-2xl font-bold mb-10"
          >
            Important Notice
          </motion.h2>

          <motion.div
            variants={container}
            className="grid md:grid-cols-3 gap-8 text-sm leading-relaxed mb-10"
          >
            <motion.p variants={item}>
              <strong>Personnel with Pharmacore entity</strong> submit Business
              Trip Request Via Paratrip
            </motion.p>
            <motion.p variants={item}>
              <strong>Personnel with PVP (4W:0W)</strong> submit Business Trip
              Request Via Paratrip
            </motion.p>
            <motion.div variants={item}>
              <strong>
                Personnel with PVP (3W:1W – 2W:2W – 1W:3W)
              </strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  When business trip from Malaysia to Indonesia or vice versa,
                  then do not use Paratrip, but use PMPO (PM Pharmacore).
                </li>
                <li>
                  When domestic Malaysia business trip, then use PM Perjadin (PM
                  Pharmacore).
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="text-center mb-8"
          >
            General guidelines regarding official travel policies can be
            accessed at:{" "}
            <a href="#" className="underline">
              Travel Policy 2024
            </a>
            <br />
            The guidelines for each travel agent can be accessed at the
            following link:
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            <motion.div variants={item}>
              <Card2
                href="#"
                logo="/antavaya.png"
                alt="Antavaya"
                title="Antavaya Travel Guideline"
              />
            </motion.div>
            <motion.div variants={item}>
              <Card2
                href="#"
                logo="/tiketcom.png"
                alt="Tiket.com"
                title="Tiket.Com Travel Guideline"
                width={80}
                height={80}
              />
            </motion.div>
            <motion.div variants={item}>
              <Card2
                href="#"
                logo="/traveloka.png"
                alt="Traveloka"
                title="Traveloka Travel Guideline"
              />
            </motion.div>
            <motion.div variants={item}>
              <Card2
                href="#"
                logo="/dwidaya.png"
                alt="Dwidaya"
                title="Dwidaya Travel Guideline"
                width={120}
                height={120}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
