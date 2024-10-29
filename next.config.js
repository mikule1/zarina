const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: { 
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zarina' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zarina/' : '',
}

module.exports = nextConfig