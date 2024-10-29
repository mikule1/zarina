const { i18n } = require('./next-i18next.config')

const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: { unoptimized: true },
  basePath: isProduction ? '/zarina' : '',
  assetPrefix: isProduction ? '/zarina/' : '',
}

module.exports = nextConfig