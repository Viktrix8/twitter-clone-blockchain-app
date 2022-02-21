import { TwitterProvider } from '../context/TwitterContext'
import '../styles/globals.css'
import '../lib/hexStyles.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  )
}

export default MyApp
