
import Head from 'next/head'
import Link from 'next/link'
import DateComponent from '../components/layout/DateComponent'
import { getLatestPost } from './api/posts';

const Home = (props)=> {
  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/ccfavicon.ico" />
      </Head>
      <div className="w-screen flex flex-col">
       
        {/* INTRO */}
        <div className="m-auto flex flex-col justify-center align-center h-screen mb-64">
          <div className="min-w-0 w-5/6 mx-auto md:max-w-xl">
            <div>
              <h2>
                Need someone <br />
                
                with front-end development prowess and a designer's sensibilities?
              </h2>
              <h2 className="underline text-4xl my-6 font-bold text-custom-sakura">
                I got you.
              </h2>
            </div>
            <div className="my-6">
              <p className="text-xl">Need proof?</p>
            </div>

            <div className="my-6">
              <Link href="/portfolio"><a className="px-4 py-2 border-solid border-2 border-custom-sakura uppercase rounded-lg text-lg hover:border-custom-flamingo hover:text-custom-flamingo">
                See my work &rarr;
                </a></Link>
            </div>
           

          </div>
        </div>

        {/* PORTFOLIO */}


        {/* LATEST BLOG POSTS */}
        <div className="w-full h-screen md:w-5/6 mx-auto flex flex-col justify-center align-center mb-64">
          <div className="mb-4 ml-6 md:ml-2">
             <h3 className="uppercase text-lg font-bold text-custom-lavender">Latest Blog Posts</h3>
          </div>
         <div className="flex md:flex-row flex-col">
       
          {props.posts.map(post => (
            <div key={post.id} className="md:w-1/3 w-5/6 mx-auto mb-12 md:mx-2 h-64 rounded-b-lg overflow-hidden shadow-xl ">
              <div className="rounded-t-lg pt-2 pl-2 pb-2 bg-opacity-50 bg-custom-blk">
                <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
                  <h2 className="text-custom-sakura hover:text-custom-lavender">
                    {post.title}
                  </h2>
                  <DateComponent dateString={post.published_at} />
                </a></Link>
              </div>
              <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
                <div className="overflow-hidden">
                  <img src={post.feature_image} className="object-cover w-full rounded-b-lg" alt={post.title} />
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