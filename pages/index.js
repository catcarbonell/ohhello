import {useEffect, useRef} from 'react'
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import Intro from '../components/intro'
gsap.registerPlugin(ScrollTrigger);

const Home = ()=> {
  const links = [
    { linkey: '#portfolio',
      title : 'Portfolio',
      description: 'View all my dev work!',
      img: '/portfolio/ustoyou.png',
      link: '/portfolio'
    },
    { linkey: '#about',
      title : 'About',
      description: 'Learn more about me!',
      img: '/kitty.jpg',
      link: '/about'
    },
    { linkey: '#blog',
      title : 'Dev Blog',
      description: 'I wrote these. Read \'em',
      img: '/blog.jpg',
      link: '/blog'
    },
    { linkey: '#contact',
      title : 'Contact',
      description: 'Let\'s chat!',
      img: '/mailbox.jpg',
      link: '/contact'
    },
  ]
  const revealRefs = useRef([])
  revealRefs.current = []

  useEffect(()=>{
    
    revealRefs.current.forEach((el, index)=>{
      gsap.fromTo(el, {
        autoAlpha: 0,
      }, {
        duration:1,
        autoAlpha:1,
        ease: 'power1',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      })
    })
  },[])

  const addToRefs = el => {
    if ( el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el)
    }
  }
 

  return (
    <>
      <Head>
        <title>cat | ui engineer &amp;&amp; ux designer</title>
        <link rel="icon" href="/ccfavicon.ico" />
      </Head>
      <div ref={addToRefs} className="w-5/6 md:w-1/2 mx-auto mt-20 mb-64 md:w-5/6 flex flex-col place-items-center">
        
          <h1>Hello World!</h1>
          <figure id="logo" className="container w-1/2 md:w-1/4 mb-4 md:mb-10">
            <img src="/cclogo.png" alt="my logo: a vector shape of a cat's head surrounded by angle brackets" />
          </figure>

        {links.map(link =>{ 
           return <div className="w-screen" key={link.linkey} ref={addToRefs}>
             <Intro  
              title={link.title}
              description={link.description}
              img={link.img}
              link={link.link}
            />
            </div>
          })
        } 
      </div>
    
    </>
  )
}

export default Home