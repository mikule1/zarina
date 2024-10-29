const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/zarina',
  assetPrefix: '/zarina/',
}

module.exports = nextConfig
