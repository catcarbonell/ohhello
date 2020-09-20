import '../styles/index.css'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return(
    <div className="h-screen flex flex-col place-items-center overflow-x-hidden relative">
      <Nav />
      <Header />
      <main className="flex flex-col flex-grow justify-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
