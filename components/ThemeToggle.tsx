import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center space-x-2 rounded-lg bg-white/50 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700"
      title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
      aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-amber-500" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" aria-hidden="true" />
      )}
    </button>
  )
}
