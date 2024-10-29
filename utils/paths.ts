const isProduction = process.env.NODE_ENV === 'production'

export const getImagePath = (path: string): string => {
  const basePath = isProduction ? '/zarina' : ''
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}