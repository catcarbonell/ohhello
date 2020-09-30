import {useEffect, useRef} from 'react'
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import Meta from '../components/meta'
import Intro from '../components/intro'
import ScrollBtn from '../components/layout/scrollBtn'
gsap.registerPlugin(ScrollTrigger);

const Home = ()=> {
  const links = [
    { linkey: 'portfolio',
      title : 'Portfolio',
      description: 'View all my dev work!',
      img: '/portfolio/ustoyou.png',
      link: '/portfolio'
    },
    { linkey: 'blog',
    title : 'Dev Blog',
    description: 'I wrote these. Read \'em',
    img: '/blog.jpg',
    link: '/blog'
    },
    { linkey: 'about',
      title : 'About',
      description: 'Learn more about me!',
      img: '/kitty.jpg',
      link: '/about'
    },
    { linkey: 'contact',
      title : 'Contact',
      description: 'Let\'s chat!',
      img: '/mailbox.jpg',
      link: '/contact'
    },
  ]

  const revealRefs = useRef([])
  revealRefs.current = []

  useEffect(()=>{
    gsap.fromTo('#top-about', {autoAlpha:0, x:-1000}, {autoAlpha:1, x:0,  duration:1})
    revealRefs.current.forEach((el, index)=>{
      gsap.fromTo(el, {
        x:-1000,
        autoAlpha: 0,
      }, {
        duration:1,
        x: 0,
        autoAlpha:1,
        ease: 'power1.inOut',
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
      <Meta title="cat" />
      <div id="top" className="w-5/6 md:w-1/2 mx-auto mb-64 md:w-5/6 flex flex-col place-items-center">

        <div id="top-about" className="mb-20 md:mb-64 mx-auto flex flex-col justify-center content-center self-center">  
          <div className="w-5/6 px-4 mx-auto flex flex-col md:flex-row justify-center">
              {/* PHOTO */}
              <div className="mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8">
                  <h2 className="text-2xl text-center text-custom-sakura mb-2">Hi! I'm Cat!</h2>
                  <img src="/headshot.jpg" alt="My face." className="rounded-full shadow-lg w-32 md:w-48 md:h-48"  />
              </div>
              
              {/* TEXT */}
              <div className="w-full md:w-1/2 md:text-lg flex flex-col items-center justify-center">
                  <p>
                      I'm a <span className="font-bold text-custom-lavender">UI engineer</span> and <span className="font-bold text-custom-lavender">UX designer</span> with a penchant for problem solving and 
                      all things aesthetic! 
                  </p>
                  <p className="mt-2">
                      I am known to be <span className="font-bold text-custom-lavender">organized</span>, &nbsp;
                       <span className="font-bold text-custom-lavender">communicative</span>, <span className="font-bold text-custom-lavender">adaptable</span>, 
                      and <span className="font-bold text-custom-lavender">efficient</span>.
                  </p>
                  <p className="mt-2">
                      Currently, I am a <span className="font-bold text-custom-lavender">frontend engineer intern</span> at a startup through <span className="font-bold text-custom-lavender">Open Water Accelerator</span>!
                  </p>
                  <div className="w-full mt-2 md:mt-4">
                    <Link href="/about"><a className="text-xs hover:text-custom-flamingo uppercase">Learn more &rarr;</a></Link>
                  </div>
              </div>
             
          </div>
          <ScrollBtn target="#portfolio" chevron={true} />
        
      </div>

        {links.map(link =>{ 
           return <div id={link.linkey} className="w-screen" key={link.linkey} ref={addToRefs}>
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
      <ScrollBtn target="#top" text="Back to top" chevron={false} />
    
    </>
  )
}

export default Home