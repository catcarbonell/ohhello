import '../styles/index.css'
import "../styles/prism-synthwave84.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Nav from '../components/nav'
import Footer from '../components/footer'



function MyApp({ Component, pageProps }) {

  return(
   
    <div className="flex flex-col place-items-center overflow-x-hidden relative">
      <main className="flex flex-col flex-grow mt-24 md:mt-64">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>

  )
}

export default MyApp
