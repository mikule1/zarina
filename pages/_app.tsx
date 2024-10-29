import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '../context/LanguageContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
