/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/zarina', // Добавьте это, так как ваш сайт находится по /zarina/
  assetPrefix: './',
  trailingSlash: true
}

module.exports = nextConfig