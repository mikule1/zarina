const isProduction = process.env.NODE_ENV === 'production'

export const getImagePath = (path: string): string => {
  // For production (GitHub Pages), prepend with /zarina
  const basePath = isProduction ? '/zarina' : ''
  // Ensure path starts with a forward slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
