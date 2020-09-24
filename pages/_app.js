import '../styles/index.css'
import "../styles/prism-synthwave84.css";
import Nav from '../components/nav'
import Footer from '../components/footer'



function MyApp({ Component, pageProps }) {

  return(
    <>
   
    <div className="flex flex-col place-items-center overflow-x-hidden relative">
      <Nav />
      <main className="flex flex-col flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default MyApp
