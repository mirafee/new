import '../styles/globals.css'
import Nave from '../components/nave'
import Socials from '../components/socials'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nave />
    <Component {...pageProps} />
    <Socials />
    </>
    )
}

export default MyApp
