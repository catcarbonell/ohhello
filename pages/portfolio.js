// import {useEffect, useRef} from 'react'
// import { gsap } from 'gsap/dist/gsap'
// import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Project from '../components/project'
import Meta from '../components/meta'
// gsap.registerPlugin(ScrollTrigger);


const Portfolio = () => {
    // const revealRefs = useRef([])
    // revealRefs.current = []
  
    // useEffect(()=>{
      
    //   revealRefs.current.forEach((el, index)=>{
    //     gsap.fromTo(el, {
    //       x:-1000,
    //       autoAlpha: 0,
    //     }, {
    //       duration:1,
    //       x: 0,
    //       autoAlpha:1,
    //       ease: 'power1.in',
    //       scrollTrigger: {
    //         id: `section-${index+1}`,
    //         trigger: el,
    //         start: 'top center',
    //         toggleActions: 'play none none reverse'
    //       }
    //     })
    //   })
    // },[])
  
    // const addToRefs = el => {
    //   if ( el && !revealRefs.current.includes(el)){
    //     revealRefs.current.push(el)
    //   }
    // }

    return(
        <>
           <Meta title="portfolio" />

            <div className="w-full pl-0 md:w-4/6 md:mx-auto mb-64 flex flex-col md:flex-wrap md:flex-row">
                <h2>Portfolio</h2>
                
                <div className="w-full">
                    <Project 
                        title="POPOPjs"
                        description="A vanilla JS modular modal framework for beginner developers to use for their projects."
                        img="/portfolio/popop.png"
                        role="Creator"
                        stack="HTML5, CSS3, JS"
                        github="https://github.com/catcarbonell/popop"
                        demo="https://catcarbonell.github.io/popop"
                    />
                </div>

                <div className="w-full">
                    <Project 
                        title="Killer Kao"
                        description="A vanilla JS-based web app game utilizing a basic rock-paper-scissors engine."
                        img="/portfolio/killerkao.png"
                        role="Creator"
                        stack="HTML5, CSS3, JS"
                        github="https://github.com/catcarbonell/killerkao"
                        demo="https://catcarbonell.github.io/killerkao"
                        case="https://dev.to/cat/ux-case-study-killer-kao-h98"
                    />
                </div>

                <div className="w-full">
                    <Project 
                        title="Us to You"
                        description="A web app product delivery service that puts the focus on local shops and restaurants."
                        img="/portfolio/ustoyou.png"
                        role="Frontend Developer"
                        stack="React, TailwindCSS, Django"
                        github="https://github.com/RoblesAarik/hackathon_frontend"
                        demo="https://hackathon-frontend-v01.vercel.app/"
                        case="https://dev.to/cat/my-first-hackathon-as-a-developer-3o45"
                    />
                </div>
            </div>


        </>   
    )
}

export default Portfolio