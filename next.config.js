const { i18n } = require('./next-i18next.config')

const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/zarina' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: { 
    unoptimized: true,
    path: `${basePath}/images/`  // указываем базовый путь для изображений
  },
  basePath: basePath,
  assetPrefix: isProduction ? '/zarina/' : '',
  // Добавляем rewrites для изображений
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: `${basePath}/images/:path*`
      }
    ]
  },
  // Или можно использовать redirects
  async redirects() {
    return [
      {
        source: '/images/:path*',
        destination: `${basePath}/images/:path*`,
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig