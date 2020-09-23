
import Head from 'next/head'
import Intro from '../components/intro'

const Home = ()=> {
 
  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/ccfavicon.ico" />
      </Head>
      <div className="w-screen flex flex-col">
       
        <Intro />

      </div>
    
    </>
  )
}

export default Home