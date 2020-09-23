import {useEffect} from 'react'
import Prism from 'prismjs'
import "prismjs/components/prism-jsx.min";
import Head from 'next/head'
import Link from 'next/link'
import { getSinglePost } from '../api/posts';
import DateComponent from '../../components/layout/DateComponent'


const PostPage = (props) => {
    
    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <>
            <Head>
                <title>{props.post.title} | catcarbn.com</title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            <div className=" ml-8 md:ml-10 mb-4">
            <Link href="/blog"><a className="uppercase font-bold  hover:text-custom-sakura">&larr; Back to Blog Archive</a></Link>            
            </div>
            <div className="overflow-hidden w-screen md:min-h-sm md:max-h-sm opacity-95 mx-auto">
                <img className="object-cover w-screen m-0 p-0" src={props.post.feature_image} alt={props.post.title} />
            </div>

            <div className="post-style w-full px-6 md:w-5/6 bg-custom-shadow md:-mt-10 bg-opacity-50 md:px-10 flex flex-col justify-center self-center">
                <div className="text-center mt-20 md:mt-40 md:mb-20">
                    <h1 className="font-bold text-custom-sakura text-2xl md:text-4xl">{props.post.title}</h1>
                    <div className="w-full md:w-1/3 mx-auto">
                        <DateComponent dateString={props.post.published_at} />
                    </div>
                </div>
               
                
                <div className="w-xs md:w-4/6 mx-auto md:pb-64" dangerouslySetInnerHTML={{ __html: props.post.html }} />
                
    
                </div>

               
        </>
    )
}


PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };


export default PostPage