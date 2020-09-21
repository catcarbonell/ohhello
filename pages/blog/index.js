
import Head from 'next/head'
import Link from 'next/link';
import DateComponent from '../../components/layout/DateComponent'
import { getPosts } from '../api/posts';



const Blog = (props) => {
   

    return(
      <>
        <Head>
          <title>blog | catcarbn.com</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-row flex-wrap md:w-5/6 justify-start my-10 mx-auto">

          {props.posts.map(post => (


            <div key={post.id} className="w-screen md:max-w-sm md:mr-2 mb-2 shadow-lg">
              <div className="absolute w-full max-w-sm z-10 bg-custom-shadow bg-opacity-75 p-4 shadow-lg">
                  <DateComponent dateString={post.published_at} />
                  <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
                    <h3 className="uppercase text-custom-peach hover:text-custom-airplant font-bold">{post.title}</h3>
                  </a></Link>
              </div>
              <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
                <div>
                  <img src={post.feature_image} className="object-cover h-64 w-full" alt={post.title} />
                </div>
              </a></Link>
            </div>


          ))}
        </div>
      </>   
    )
}

// why does this go here???

Blog.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
}


export default Blog