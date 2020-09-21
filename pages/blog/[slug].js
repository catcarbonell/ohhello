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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="ml-10 mb-4">
            <Link href="/blog"><a className="uppercase hover:text-custom-airplant hover:bg-custom-blk">&larr; Back to Blog Archive</a></Link>            
            </div>
            <div className="w-screen h-auto opacity-75 mx-auto">
                <img className="object-cover w-screen m-0 p-0" src={props.post.feature_image} alt={props.post.title} />
            </div>

            <div className="post-style w-5/6 md:w-1/2 flex flex-col justify-center self-center mb-64">
                <div className="text-center my-8">
                    <h1 className="font-bold">{props.post.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto">
                    <DateComponent dateString={props.post.published_at} />
                    </div>
                </div>
               
                
                <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
                </div>
                <Link href="/blog"><a className="uppercase text-center mb-20 hover:text-custom-airplant hover:bg-custom-blk">&larr; Back to Blog Archive</a></Link>   
        </>
    )
}


PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };


export default PostPage