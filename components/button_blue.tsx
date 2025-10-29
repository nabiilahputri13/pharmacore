'use client'

import { ReactNode } from 'react'

type ButtonBlueProps = {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function ButtonBlue({ children, onClick, className }: ButtonBlueProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0A2463] text-white text-sm px-6 py-2 rounded-full hover:bg-[#60A5FA] transition ${className || ''}`}
    >
      {children}
    </button>
  )
}
