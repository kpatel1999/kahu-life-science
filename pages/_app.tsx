import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/animate/animate.css';
import '../styles/animate/animate.min.css';
import '../styles/style.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
