'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Card3 from '@/components/card-3'

export default function Home() {
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
              Work Facility
            </motion.h3>

            <motion.h1
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-gray-900"
            >
              Office Handphone
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-blue-900 font-semibold text-base md:text-xl leading-relaxed"
            >
              Mobile Phone Claims PIC: Beti Cahyati (0877-2224-3692 / beti.cahyati@paracorpgroup.com)
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 text-gray-600 text-base md:text-l leading-relaxed"
            >
              Mobile Phone Facility is one of the facilities for Personnel with the following general conditions:
            </motion.p>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={item}>
              <Card3>
                Given to Officer up, by claiming the purchase of a Mobile Phone in accordance with the ceiling at the time of On Boarding (the first day of joining the Company).
              </Card3>
            </motion.div>

            <motion.div variants={item}>
              <Card3>
                For 3 years since the claim or receiving an inventory Mobile Phone from HR for new personnel, the Mobile Phone status is company property.
              </Card3>
            </motion.div>

            <motion.div variants={item}>
              <Card3>
                After 3 years from the claim or receiving an inventory Mobile Phone from HR, personnel have the right to renew the Mobile Phone and become fully owned by the Personnel without the need to return it to the Company.
              </Card3>
            </motion.div>

            <motion.div variants={item}>
              <Card3>
                The next 3 years provision is calculated from the date of receiving the Mobile Phone for the first time or the first claim for New Personnel.
              </Card3>
            </motion.div>
          </motion.div>

          <motion.p
              variants={item}
              className="mt-10 text-gray-600 text-base md:text-l leading-relaxed"
            >
              The Company's Mobile Phone Policy can be found at the following link: http://bit.ly/DokumenLayananHRS (under the folder Policy - Company's Mobile Phone Policy).
            </motion.p>
          
        </div>
      </section>
    </div>
  )
}
