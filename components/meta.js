import Head from 'next/head'
export default function Meta(props) {
    return(
        <Head>            

            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content="@catvscode" key="twhandle" />
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            
            <meta property="description" content="The portfolio and blog of Cat Carbonell: a User Interface and Experience Engineer." />
            
            <meta property="og:site_name" content="Cat Carbonell: User Interface and Experience Engineer" key="ogsitename" />
            <meta property="og:title" key="ogtitle" content="Cat Carbonell: UI Engineer and UX Designer" />
            <meta property="og:url" key="ogurl" content="https://catvsco.de/" />
            <meta property="og:image" key="ogimage" content="https://catvsco.de/kitty.jpg" />
            <meta property="og:description" key="ogdescription" content="The portfolio and blog of Cat Carbonell: a User Interface and Experience Engineer." />
        
            <title>{props.title} | ui engineer &amp;&amp; ux designer</title>
            <link rel="icon" href="/ccfavicon.ico" />
        
           
        </Head>
    )
}