import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '../context/LanguageContext'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
] as const

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useTranslation()

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeLanguage = (locale: typeof languages[number]['code']) => {
    setLanguage(locale)
    setIsOpen(false)
  }

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg bg-white/50 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700"
        aria-label="Select language"
      >
        <span className="text-xl" role="img" aria-label={currentLanguage.name}>
          {currentLanguage.flag}
        </span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 md:right-0 md:left-auto mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex w-full items-center space-x-3 px-4 py-3 text-left text-sm transition-colors ${
                language === lang.code
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-2xl" role="img" aria-label={lang.name}>
                {lang.flag}
              </span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
