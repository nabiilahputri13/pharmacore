export default function Footer() {
  return (
    <footer className="bg-[#0A2463] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold">Pharmacore</h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Established in 1985, ParagonCorp is a holding company that was initiated to provide beauty products through the biggest and most loved beauty brands such as Wardah, Emina, Kahf, Crystallure, and Instaperfect with the purpose of creating a greater good to the society.
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="font-semibold mb-4">Visit Our Office</h3>
          <p className="text-sm text-gray-300">Pharmacore Technology and Innovation, Sdn. Bhd.</p>
          <p className="text-sm text-gray-300">Suite 7.01 & 7.02 Level 7</p>
          <p className="text-sm text-gray-300">The Gardens North Tower,</p>
          <p className="text-sm text-gray-300">No. 35 Lingkaran Syed Putra</p>
          <p className="text-sm text-gray-300">Mid Valley City, Kuala Lumpur,</p>
          <p className="text-sm text-gray-300">Wilayah Persekutuan 59200, Malaysia</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">+603-27386582</p>
          <p className="text-sm text-gray-300">paragon.malaysia@paracorpgroup.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-500 pt-12 text-center text-sm text-gray-200">
        © 2025 Pharmacore. All rights reserved.
      </div>
    </footer>
  )
}
