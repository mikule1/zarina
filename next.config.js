/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  images: { 
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zarina' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zarina/' : '',
  i18n,
}

module.exports = nextConfig
