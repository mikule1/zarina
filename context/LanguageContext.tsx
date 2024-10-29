import React, { createContext, useContext, useState } from 'react'
import ru from '../public/locales/ru/common.json'
import en from '../public/locales/en/common.json'
import et from '../public/locales/et/common.json'
import es from '../public/locales/es/common.json'

type TranslationType = typeof ru
const translations: Record<string, TranslationType> = { ru, en, et, es }

type LanguageType = 'ru' | 'en' | 'et' | 'es'

interface LanguageContextType {
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>('ru')

  const t = (key: string): string => {
    const keys = key.split('.')
    let current: any = translations[language]
    
    for (const k of keys) {
      if (current === undefined || typeof current !== 'object') {
        return key
      }
      current = current[k]
    }

    return typeof current === 'string' ? current : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }
  return context
}
