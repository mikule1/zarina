/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: './', // Добавьте эту строку
  basePath: '',      // Очистите basePath
  trailingSlash: true // Добавьте эту строку
}

module.exports = nextConfig