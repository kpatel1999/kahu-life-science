import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/owlcarousel/assets/owl.carousel.css'
import '../styles/animate/animate.css';
import '../styles/animate/animate.min.css';
import '../styles/owlcarousel/assets/owl.carousel.min.css'
import '../styles/owlcarousel/assets/owl.theme.default.css'
import '../styles/owlcarousel/assets/owl.theme.default.min.css'
import '../styles/owlcarousel/assets/owl.theme.green.css'
import '../styles/owlcarousel/assets/owl.video.play.png'
import '../styles/owlcarousel/assets/owl.theme.green.min.css'
import '../styles/style.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
