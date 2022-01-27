import Head from 'next/head'
const  Meta = (props) => {
    return(
        <Head>            
            
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content="@catvscode" key="twhandle" />
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            
            <meta property="description" content="The portfolio of Cat Ballar: a Developer Advocate and User Interface Engineer." />
            
            <meta property="og:site_name" content="Cat Ballar: Developer Advocate and User Interface Engineer" key="ogsitename" />
            <meta property="og:title" key="ogtitle" content="Cat Ballar: Developer Advocate and UI Engineer" />
            <meta property="og:url" key="ogurl" content="https://catvsco.de/" />
            <meta property="og:image" key="ogimage" content="https://catvsco.de/kitty.jpg" />
            <meta property="og:description" key="ogdescription" content="The portfolio of Cat Ballar: Developer Advocate and User Interface Engineer" />
    
            <title>{props.title} | ui engineer &amp;&amp; dev advocate</title>
            <link rel="icon" href="/ccfavicon.ico" />
            <link rel="webmention" href="https://webmention.io/catvsco.de/webmention" />
            <link rel="pingback" href="https://webmention.io/catvsco.de/xmlrpc" />
        
           
        </Head>
    )
}
export default Meta