import Head from 'next/head'
import Intro from '../components/intro'

const Home = ()=> {
  const links = [
    { 
      key: 0,
      title : 'Portfolio',
      description: 'View all my dev work!',
      img: '/portfolio/ustoyou.png',
      link: '/portfolio'
    },
    { 
      key: 1,
      title : 'About',
      description: 'Learn more about me!',
      img: '/kitty.jpg',
      link: '/about'
    },
    { 
      key: 2,
      title : 'Blog',
      description: 'I wrote these. Read \'em',
      img: '/blog.jpg',
      link: '/blog'
    },
    { 
      key: 3,
      title : 'Contact',
      description: 'Let\'s chat!',
      img: '/mailbox.jpg',
      link: '/contact'
    },
  ]
  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/ccfavicon.ico" />
      </Head>
      <div className="w-5/6 md:w-1/2 mx-auto mt-20 mb-64 md:w-5/6 flex flex-col place-items-center">
        
          <h1>Hello World!</h1>
          <figure className="w-1/2 md:w-1/4 mb-4 md:mb-10">
            <img src="/cclogo.png" alt="my logo: a vector shape of a cat's head surrounded by angle brackets" />
          </figure>
        
        {links.map(link =>{ 
           return <Intro 
              key={link.key}
              title={link.title}
              description={link.description}
              img={link.img}
              link={link.link}
            />
        })
      } 

        

      </div>
    
    </>
  )
}

export default Home