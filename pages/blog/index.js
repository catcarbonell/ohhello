
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
        <div className="flex flex-row flex-wrap w-5/6 justify-center mx-auto">

          {props.posts.map(post => (
           
            <div key={post.id} className="w-full md:w-1/4 h-auto bg-custom-peach text-custom-shadow bg-opacity-75  mx-4 my-6 rounded-lg shadow-lg">
               <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}><a>
              <div>
                  <img src={post.feature_image} className="object-cover rounded-t-lg w-full h-32" alt={post.title} />
              </div>
              </a></Link>
              <div className="px-4 py-2 md:h-24 h-36 flex flex-col justify-center self-center">
                  <DateComponent dateString={post.published_at} />
                  <h3 className="font-bold">{post.title}</h3>
              </div>
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