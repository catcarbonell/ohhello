import '../styles/index.css'
import "prismjs/themes/prism-synthwave84.css";
import Nav from '../components/nav'
import Footer from '../components/footer'



function MyApp({ Component, pageProps }) {

  return(
    <>
   
    <div className="h-screen flex flex-col place-items-center overflow-x-hidden relative">
      <Nav />
      <main className="flex flex-col flex-grow justify-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default MyApp
