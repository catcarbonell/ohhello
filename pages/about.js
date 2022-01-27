import {useEffect} from 'react'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJsSquare, faReact, faSass, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import StackItem from '../components/layout/stackItem'
import ScrollBtn from '../components/layout/scrollBtn'
import Meta from '../components/meta'
gsap.registerPlugin(ScrollTrigger);


export default function About(){

    useEffect(()=>{
        gsap.fromTo(".about-comp", {autoAlpha: 0, x:1000}, {autoAlpha:1, x:0, stagger:0.7, duration:1})
    },[])


    return(
        <>
           <Meta title="about" />


            {/* SKILLS/EXPERIENCE  */}
        <div className="w-screen flex flex-col justify-center items-center mb-20 md:mb-64">

            <div id="stack" className="max-w-xxl md:w-5/6 flex flex-col md:flex-row justify-center">
                {/* STACK */}
                <div className="about-comp w-full md:w-1/3 my-24 md:my-0">
                    <h2 className="mb-4 uppercase text-custom-sakura">Stack</h2>
                    <StackItem text="HTML" color="#ff9a84" icon={faHtml5} />
                    <StackItem text="CSS" color="#6993f5" icon={faCss3Alt} />
                    <StackItem text="JavaScript" color="#f6e995" icon={faJsSquare} />
                    <StackItem text="React" color="#a0e9fc" icon={faReact} />
                    <StackItem text="Sass/SCSS" color="#d785ad" icon={faSass} />
                    <Link href="/"><a className="uppercase font-bold hover:text-custom-flamingo">View Portfolio</a></Link>
                    <div className="md:hidden">
                        <ScrollBtn target="#exp" chevron={true} />
                    </div>

                </div>
               
                {/* EXPERIENCE */}
                <div id="exp" className="about-comp w-full md:w-1/3 my-24 md:my-0">
                    <div className="md:hidden">
                        <ScrollBtn target="#stack" chevron={false} />
                    </div>
                    <h2 className="mb-2 uppercase text-custom-sakura">Experience</h2>
                    <div className="mt-4">
                        <h3>
                            Miscreants
                        </h3> 
                        <p>
                            Frontend Engineer and Product Design Intern
                        </p>
                        <p className="mt-2">Nov 2021 - current</p>
                    </div>
                    <div className="mt-4">
                        <h3>
                            Freelance 
                        </h3> 
                        <p>
                            Frontend Engineer and UX Designer
                        </p>
                        <p className="mt-2">Aug 2016 - Nov 2021</p>
                    </div>
                    <div className="mt-4">
                        <h3>Open Water Accelerator</h3> 
                        <p>Frontend Engineering Intern</p>
                        <p className="mt-2">Aug 2020 - Dec 2020</p>
                    </div>
                    <div className="mt-4">
                        <h3>Facebook</h3> 
                        <p>News Feed UX/UI Specialist</p>
                        <p className="mt-2">Feb 2018 - Sep 2019</p>
                    </div>
                    <div className="md:hidden">
                        <ScrollBtn target="#edu" chevron={true} />
                    </div>

                </div>

                {/* EDUCATION  */}
                <div id="edu" className="about-comp w-full md:w-1/4 my-24 md:my-0">
                     <div className="md:hidden">
                        <ScrollBtn target="#exp" chevron={false} />
                    </div>
                    <h2 className="mb-2 uppercase text-custom-sakura">Education</h2>
                    <div>
                        <h3>General Assembly</h3> 
                        <p>Software Engineering Immersive</p>
                        <p className="mt-2">Jan 2020 - Apr 2020</p>
                    </div>
                    <div className="mt-4">
                        <h3>Full Sail University</h3> 
                        <p>
                            Bachelor of Science in 
                            <br />
                            Web Design and Development
                        </p>
                        <p className="mt-2">May 2014 - July 2016</p>
                    </div>
                    <div className="md:hidden">
                        <ScrollBtn target="#stack" chevron={false} text="back to top" />
                    </div>
                </div>
            </div>    
            

        </div>

            {/* END */}
    

              


    </>
    )
}