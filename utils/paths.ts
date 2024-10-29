// utils/paths.ts

const isProduction = process.env.NODE_ENV === 'production'
const BASE_PATH = isProduction ? '/zarina' : ''

// Для изображений
export const getImagePath = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}

// Для локализации
export const getLocalePath = (locale: string, namespace: string = 'common'): string => {
  return `${BASE_PATH}/locales/${locale}/${namespace}.json`
}

// Для других статических ресурсов
export const getAssetPath = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}

// Конфигурация для i18next
export const i18nConfig = {
  defaultLocale: 'ru',
  locales: ['ru', 'en'],
  loadPath: `${BASE_PATH}/locales/{{lng}}/{{ns}}.json`,
}

// Вспомогательные функции
export const isProductionEnv = (): boolean => isProduction

export const getBasePath = (): string => BASE_PATH