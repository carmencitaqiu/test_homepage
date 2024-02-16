import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SettingProvider } from '../context/SettingContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingProvider>
      <Component {...pageProps} />
    </SettingProvider>
  )
}

export default MyApp
