const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'et', 'es'],
  },
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  ...(isProduction && {
    basePath: '/zarina'
  })
}
