// next-i18next.config.js
const isProduction = process.env.NODE_ENV === 'production'
const BASE_PATH = isProduction ? '/zarina' : ''

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'et', 'es'],
  },
  localePath: typeof window === 'undefined' 
    ? require('path').resolve('./public/locales') 
    : `${BASE_PATH}/locales`,
  ...(isProduction && {
    basePath: '/zarina'
  })
}