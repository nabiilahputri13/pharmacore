import { ReactNode } from "react"
import ButtonBlue from "./button_blue"

type CardProps = {
  title: string
  description: string
  buttonText?: string
  icon?: ReactNode
}

export default function Card({ title, description, buttonText = "Details", icon }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      <div className="flex justify-center items-center align-center py-3">
        {/* <button className="bg-blue-900 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-800">
        {buttonText}
        <span>→</span>
      </button> */}

      <ButtonBlue>
        {buttonText}
        <span>→</span>
        </ButtonBlue>  
      </div>
    </div>
  )
}
