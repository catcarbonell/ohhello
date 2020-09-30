import { useEffect } from 'react'
import Prism from 'prismjs'
import "prismjs/components/prism-jsx.min"
import Head from 'next/head'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';
import { getSinglePost } from '../api/posts'
import { Twitter, Facebook, Linkedin } from 'react-social-sharing'
import DateComponent from '../../components/layout/DateComponent'
import ScrollBtn from '../../components/layout/scrollBtn'


const PostPage = (props) => {
    const myUrl = `https://catvsco.de/blog/${props.post.slug}`
    useEffect(() => {
        gsap.fromTo('.postbody', {autoAlpha:0, x: 1000}, {autoAlpha:1, x:0, duration:1, stagger: 0.7})
        Prism.highlightAll();

      }, []);

    return (
        <>
            <Head>

                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@catvscode" key="twhandle" />
                <meta property="twitter:title" content={props.post.title} />
                <meta property="twitter:image:width" content="300" />
                <meta property="twitter:image"  content={props.post.feature_image} />

                
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                
                <meta property="description" content={props.post.excerpt} />
                
                <meta property="og:site_name" content="Cat Carbonell: User Interface and Experience Engineer" key="ogsitename" />
                <meta property="og:title" key="ogtitle" content={props.post.title} />
                <meta property="og:url" key="ogurl" content={myUrl} />
                <meta property="og:image" key="ogimage" content={props.post.feature_image} />
                <meta property="og:image:width" content="300" />
                <meta property="og:description" key="ogdescription" content={props.post.excerpt} />
            
                <title>{props.title} | ui engineer &amp;&amp; ux designer</title>
                <link rel="icon" href="/ccfavicon.ico" />

            </Head>
           
            <div id="top" className="flex justify-start w-full md:w-1/2 mb-4 ml-8">
                <Link href="/blog">
                    <a className="uppercase font-bold hover:text-custom-sakura">&larr; Back to Blog Archive</a>
                </Link>            
            </div>
            
            <div className="postbody overflow-hidden w-screen md:min-h-sm md:max-h-sm opacity-95 mx-auto">
                <img className="object-cover w-screen m-0 p-0" src={props.post.feature_image} alt={props.post.title} />
            </div>
         

            <div className="postbody post-style w-full px-6 md:w-5/6 bg-custom-shadow md:mt-20 bg-opacity-50 md:px-10 flex flex-col justify-center self-center">
                <div className="text-center mt-20 md:mt-40 md:mb-20">
                    <h1 className="font-bold text-custom-sakura text-2xl md:text-4xl">{props.post.title}</h1>
                    <div className="w-full md:w-1/3 mx-auto">
                        <DateComponent dateString={props.post.published_at} />
                    </div>
                </div>
               
                {/* POST CONTENT */}
                <div className="postbody w-xs md:w-4/6 mx-auto pb-20" 
                    dangerouslySetInnerHTML={{ __html: props.post.html }} />
                    
                    <div className="w-5/6 text-xs px-2 mb-10 md:w-1/2 flex flex-col justify-center mx-auto">
                        <h3>Please share this post!</h3>
                        <div className="flex flex-row justify-center uppercase">
                            <Twitter link={myUrl} />
                            <Facebook link={myUrl} />
                            <Linkedin link={myUrl} />
                            
                        </div>
                    </div>

                    <div className="text-center mb-20">
                        <Link href="/blog">
                            <a className="uppercase font-bold  hover:text-custom-sakura">&larr; Back to Blog Archive</a>
                        </Link>            
                    </div>

                    <ScrollBtn target="#top" chevron={false} text="top" />
                </div>
                
                
                
        </>
    )
}


PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };


export default PostPage