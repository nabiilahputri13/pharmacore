'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AppSystem() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const apps = [
    {
      name: 'Microsoft 365',
      img: '/ms365.png',
      link: '#',
    },
    {
      name: 'SunFish',
      img: '/sunfish.png',
      link: '#',
    },
    {
      name: 'GreatDay',
      img: '/greatday.png',
      link: '#',
    },
    {
      name: 'ProcessMaker',
      img: '/processmaker.png',
      link: '#',
    },
    {
      name: 'CASH',
      img: '/cash.png',
      link: '#',
    },
    {
      name: 'TREND',
      img: '/trend.png',
      link: '#',
    },
    {
      name: 'PROCIO',
      img: '/procio.png',
      link: '#',
    },
  ]

  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start gap-4"
        >
          <motion.h3 variants={item} className="text-blue-900 font-semibold">
            App & System
          </motion.h3>

          <motion.h1
            variants={item}
            className="text-2xl md:text-3xl font-semibold text-gray-900"
          >
            App & System
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Pharmacore uses several special applications and systems that are made as tools for work to support the effectiveness and security of the company. List of applications and user manuals are listed below:
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {apps.map((app, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center justify-between border-l-2 border-gray-200 p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.img}
                  alt={app.name}
                  className="h-16 object-contain"
                />
                <span className="text-lg font-medium text-gray-800">
                  {app.name}
                </span>
              </div>
              <a
                href={app.link}
                className="text-blue-700 hover:underline text-sm whitespace-nowrap"
              >
                User Guideline
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
