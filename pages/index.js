
import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/layout/Container'
import DateComponent from '../components/layout/DateComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { getLatestPost } from './api/posts';

const Home = (props)=> {
  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/ccfavicon.ico" />
      </Head>
      <div className="w-screen flex flex-col">
       
        <Container>
          <div className="min-w-0 w-5/6 mx-auto md:max-w-xl">
            <div>
              <h2>
                Need someone <br />
                with front-end development prowess and a designer's sensibilities?
              </h2>
              <h2 className="text-4xl my-6 font-bold text-custom-sakura">
                I got you.
              </h2>
            </div>
            <div className="mt-20 md:mt-12 flex flex-col md:flex-row">
              <Link href="/portfolio">
                <a className="w-auto text-center px-4 py-2 border-solid border-2 border-custom-sakura 
                              uppercase rounded-lg text-lg bg-custom-blk
                              hover:bg-custom-flamingo">
                  View my work
                </a>
              </Link>
            </div>
          </div>
        </Container>


        <div className="h-screen flex flex-col md:flex-row justify-center align-center mx-auto w-5/6 mb-64">
          <div className="mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8">
            <img className="rounded-full shadow-lg w-32 md:w-40 md:h-40" src="/headshot.jpg" alt="My face." />
          </div>

          <div className="w-5/6 md:w-1/4">
            <h2 className="text-custom-lavender">Hi! I'm Cat!</h2>
            <p>
              I'm an SF Bay Area native with a penchant for all things
              aesthetic! I can speed up your production process by
              at least 30%-- guaranteed!
            </p>

            <div className="mt-10 md:mt-12 mx-auto md:mx-0">
              <Link href="/contact#calendly">
                <a className="w-auto text-center px-4 py-2 border-solid border-2 border-custom-sakura 
                              uppercase rounded-lg text-lg bg-custom-blk
                              hover:bg-custom-flamingo">
                  'splain how!
                </a>
              </Link>
            </div>

            <div>
              <h3 className="mt-10 uppercase font-bold">My Stack:</h3>
              <div className="flex flex-row">
                <FontAwesomeIcon className="w-8 mr-2" icon={faHtml5} />
                <FontAwesomeIcon className="w-8 mr-2" icon={faCss3} />
                <FontAwesomeIcon className="w-8 mr-2" icon={faJsSquare} />      
                <FontAwesomeIcon className="w-8 mr-2" icon={faReact} />
                <FontAwesomeIcon className="w-8 mr-2" icon={faSass} />
              </div>
            </div>
            <div className="mt-6">
              <Link href="/about"><a className="hover:text-custom-flamingo uppercase">Learn more &rarr;</a></Link>
            </div>
          
          </div>
          
          </div>



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
                  <h2 className="text-custom-sakura hover:text-custom-flamingo">
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