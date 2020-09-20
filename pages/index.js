import Head from 'next/head'
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col place-items-center overflow-x-hidden relative">
      <Head>
        <title>cat | ui engineer &amp;&amp; illustrator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Header />
      <main className="flex flex-col flex-grow justify-center">
       
        <h3>Latest Post &rarr;</h3>

        <h3>Shop &rarr;</h3>

        <h3>About &rarr;</h3>
        
      </main>

      <Footer/>
    
    </div>
  )
}
