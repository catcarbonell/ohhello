
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen flex flex-row">
        <div className="flex flex-col mx-auto mb-8">
          <h1 className="lowercase">@catcarbn</h1>
          <h3 className="text-custom-peach"> UI Engineer &amp;&amp; UX Designer </h3>
        </div>
      </div>
    
      
    </>
  )
}
