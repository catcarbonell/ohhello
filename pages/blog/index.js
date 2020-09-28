import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import DateComponent from '../../components/layout/DateComponent'
import { getPosts } from '../api/posts';
gsap.registerPlugin(ScrollTrigger);

const Blog = (props) => {

  useEffect(()=>{
    gsap.fromTo(".postbox", {
      autoAlpha: 0
    },{
      duration: 1,
      autoAlpha: 1,
      ease: "power2.inOut",
      stagger: {
        grid: [3,15],
        from: "top left",
        amount: 1.5
      }
    }) 
  },[])


    return(
      <>
        <Head>
          <title>blog | catcarbn.com</title>
          <link rel="icon" href="/ccfavicon.ico" />
        </Head>
        <div className="mx-auto mb-4">
          <h3 className="uppercase">Newest &rarr; Oldest</h3>
        </div>
        <div className="flex flex-row flex-wrap w-5/6 md:justify-start mb-24 mx-auto">
         
          {props.posts.map(post => (
            <Link key={post.id} href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a className="postbox w-auto">
              <div className="w-full md:max-w-sm md:mr-2 mb-8 lg:mb-2 shadow-lg">
                  <div className="absolute w-5/6 h-18 md:max-w-sm z-10 bg-custom-blk bg-opacity-85 hover:text-custom-pink hover:bg-opacity-100 p-4 shadow-lg">
                    <DateComponent dateString={post.published_at} />
                    <h3 className="uppercase text-sm text-custom-sakura font-bold">{post.title}</h3>
                  </div>
                  <div>
                    <img src={post.feature_image} className="object-cover h-64 w-full" alt={post.title} />
                  </div>
              </div>
            </a></Link>
          ))}

        </div>
      </>   
    )
}

Blog.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
}


export default Blog