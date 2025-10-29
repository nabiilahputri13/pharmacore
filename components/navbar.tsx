'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [activeParent, setActiveParent] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'HR Services',
      href: '#',
      dropdown: [
        { name: 'Workday & Attendance', href: '/hr/workday-attendance' },
        { name: 'Letters', href: '/hr/letters' },
        { name: 'Leave', href: '/hr/leave' },
        { name: 'Business Trip', href: '/hr/business-trip' },
      ],
    },
    {
      name: 'Compensation & Benefit',
      href: '#',
      dropdown: [
        { name: 'Free Product', href: '/benefit/free-product' },
        { name: 'Learning Wallet', href: '/benefit/learning-wallet' },
        { name: 'Wedding Gift', href: '/benefit/wedding-gift' },
      ],
    },
    {
      name: 'Work Facility',
      href: '#',
      dropdown: [
        { name: 'Office Handhone', href: '/facility/office-handphone' },
        { name: 'Office Laptop', href: '/facility/office-laptop' },
      ],
    },
    { name: 'App & System', href: '/app-system' },
    {
      name: 'Recruitment',
      href: '#',
      dropdown: [
        { name: 'Job Openings', href: '/recruitment/jobs' },
        { name: 'Internship', href: '/recruitment/internship' },
      ],
    },
    { name: 'Offboarding', href: '/offboarding' },
  ]

  const handleParentClick = (item: string) => {
    setActiveItem(item)
    setActiveParent(null)
  }

  const handleChildClick = (parent: string, child: string) => {
    setActiveItem(child)
    setActiveParent(parent)
  }

  // Auto detect active item berdasarkan path
  useEffect(() => {
    // cek child dulu
    for (const item of navItems) {
      if (item.dropdown) {
        const found = item.dropdown.find((sub) => sub.href === pathname)
        if (found) {
          setActiveItem(found.name)
          setActiveParent(item.name)
          return
        }
      }
      if (item.href === pathname) {
        setActiveItem(item.name)
        setActiveParent(null)
        return
      }
    }
  }, [pathname])

  return (
    <nav className="w-full flex justify-center z-50">
      <div className="bg-white border border-blue-300 rounded-lg shadow-sm px-4 py-1.5 inline-flex w-auto max-w-6xl justify-center items-center relative">
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-4 text-sm font-medium">
          {navItems.map((item) => {
            const isActiveParent =
              activeItem === item.name || activeParent === item.name
            const isOpenParent = openDropdown === item.name

            return (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 cursor-pointer transition-colors duration-200
                      ${isActiveParent ? 'text-sky-400' : isOpenParent ? 'text-sky-600' : 'text-gray-700'}
                      hover:text-sky-600
                    `}
                  >
                    {item.name}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleParentClick(item.name)}
                    className={`flex items-center gap-1 cursor-pointer transition-colors duration-200
                      ${isActiveParent ? 'text-sky-400' : 'text-gray-700'}
                      hover:text-sky-600
                    `}
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && openDropdown === item.name && (
                  <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-md z-50 min-w-max text-sm">
                    <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                    {item.dropdown.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          onClick={() => handleChildClick(item.name, sub.name)}
                          className={`block px-3 py-1.5 transition-colors duration-200
                            ${activeItem === sub.name ? 'text-sky-400' : 'text-gray-700'}
                            hover:text-sky-600 hover:bg-gray-100
                          `}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {mobileOpen && (
          <div className="absolute right-0 top-full mt-1 flex flex-col gap-1 bg-white border border-blue-300 rounded-lg shadow-md p-2 md:hidden w-max text-sm">
            {navItems.map((item) => {
              const isActiveParent =
                activeItem === item.name || activeParent === item.name
              return (
                <div key={item.name} className="flex flex-col">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleParentClick(item.name)}
                      className={`flex items-center gap-1 px-2 py-1 transition-colors duration-200
                        ${isActiveParent ? 'text-sky-400' : 'text-gray-700'}
                        hover:text-sky-600
                      `}
                    >
                      {item.name}
                      <ChevronDown size={14} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleParentClick(item.name)}
                      className={`flex items-center gap-1 px-2 py-1 transition-colors duration-200
                        ${isActiveParent ? 'text-sky-400' : 'text-gray-700'}
                        hover:text-sky-600
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && activeItem === item.name && (
                    <div className="ml-3 flex flex-col gap-0.5 mt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => handleChildClick(item.name, sub.name)}
                          className={`px-2 py-1 transition-colors duration-200
                            ${activeItem === sub.name ? 'text-sky-400' : 'text-gray-700'}
                            hover:text-sky-600
                          `}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
