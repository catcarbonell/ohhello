import {useEffect, useRef} from 'react'
import Head from 'next/head'
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Project from '../components/project'
gsap.registerPlugin(ScrollTrigger);


const Portfolio = () => {
    const revealRefs = useRef([])
    revealRefs.current = []
  
    useEffect(()=>{
      
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
            start: 'top center',
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
   
  
    return(
        <>
            <Head>
                <title> portfolio | catcarbn.com </title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            <div className="w-5/6 md:w-4/6 mx-auto mb-64 flex flex-col md:flex-wrap md:flex-row justify-start items-start">
                <div ref={addToRefs} className="w-screen">
                <Project 
                    title="Killer Kao"
                    description="A vanilla JS-based web app game utilizing a basic rock-paper-scissors engine."
                    img="/portfolio/killerkao.png"
                    role="Creator"
                    stack="HTML5, CSS3, JS"
                    github="https://github.com/catcarbonell/killerkao"
                    demo="https://catcarbonell.github.io/killerkao"
                />
                </div>
                
                <div ref={addToRefs} className="w-screen">
                <Project 
                    title="POPOPjs"
                    description="A vanilla JS beginner dev-friendly modular modal framework"
                    img="/portfolio/popop.png"
                    role="Creator"
                    stack="HTML5, CSS3, JS"
                    github="https://github.com/catcarbonell/popop"
                    demo="https://catcarbonell.github.io/popop"
                />
                </div>

                <div ref={addToRefs} className="w-screen">
                <Project 
                    title="Us to You"
                    description="A web app product delivery service that puts the focus on local shops and restaurants."
                    img="/portfolio/ustoyou.png"
                    role="Frontend Developer"
                    stack="React, TailwindCSS, Django"
                    github="https://github.com/RoblesAarik/hackathon_frontend"
                    demo="https://hackathon-frontend-v01.vercel.app/"
                />
                </div>
            </div>


        </>   
    )
}

export default Portfolio