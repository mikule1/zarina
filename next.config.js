const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: { 
    unoptimized: true,
  },
  basePath: '/zarina',
  assetPrefix: '/zarina/',
  distDir: 'out',
}

module.exports = nextConfig
