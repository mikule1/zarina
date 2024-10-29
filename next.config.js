/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zarina' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zarina/' : '',
}

module.exports = nextConfig
