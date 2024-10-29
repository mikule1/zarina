import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation('common')

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
        aria-expanded="false"
      >
        <span className="sr-only">Open menu</span>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-6">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="block text-lg font-medium text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                  onClick={toggleMenu}
                >
                  {t(`nav.${item}`)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
