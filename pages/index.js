
import Head from 'next/head'
import Link from 'next/link'
import DateComponent from '../components/layout/DateComponent'
import { getLatestPost } from './api/posts';

const Home = (props)=> {
  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen flex flex-col">
       
        {/* INTRO */}
        <div className="flex flex-col justify-center align-center h-screen">
          <div className="mx-auto mb-8">
            <h1 className="lowercase">@catcarbn</h1>
            <h3 className="text-custom-peach uppercase"> UI Engineer &amp;&amp; UX Designer </h3>
          </div>
        </div>

        {/* PORTFOLIO */}


        {/* LATEST BLOG POSTS */}
        <div className="w-full h-screen md:w-5/6 mx-auto flex flex-col justify-center align-center mb-40">
          <div className="mb-4 ml-2">
             <h3 className="uppercase text-lg font-bold text-custom-peach">Latest Blog Posts</h3>
          </div>
         <div className="flex md:flex-row flex-col">
       
          {props.posts.map(post => (
            <div className="md:w-1/3 w-5/6 mx-auto mb-32 md:mx-2 h-64 shadow-xl rounded-t-lg bg-custom-shadow">
              <div className="pt-2 pl-2 pb-2">
              <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
                <h2>
                  {post.title}
                </h2>
                <DateComponent dateString={post.published_at} />
              </a></Link>
              </div>
             <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
              <div>
                <img src={post.feature_image} className="object-cover h-64 w-full rounded-b-lg" alt={post.title} />
              </div>
            </a></Link>
            </div>
          ))}   
          </div>
        </div>

      </div>
    
    </>
  )
}

Home.getInitialProps = async () => {
  const posts = await getLatestPost();
  return { posts: posts }
}

export default Home