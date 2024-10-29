const { i18nConfig } = require('./utils/paths')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig,
  images: { 
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zarina' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zarina/' : '',
}

module.exports = nextConfig