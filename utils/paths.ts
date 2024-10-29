const isProduction = process.env.NODE_ENV === 'production'

export const getImagePath = (path: string): string => {
  const basePath = isProduction ? '/zarina' : ''
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}