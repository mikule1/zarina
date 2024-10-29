import { useState } from 'react'
import Link from 'next/link'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = ['Home', 'Career', 'Projects', 'Expertise', 'Services', 'Contact']

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-4 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
