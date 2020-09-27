import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJsSquare, faReact, faSass, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import StackItem from '../components/layout/stackItem'
import ScrollBtn from '../components/layout/scrollBtn'
gsap.registerPlugin(ScrollTrigger);


export default function About(){

    useEffect(()=>{
        gsap.fromTo("#top", {autoAlpha: 0}, {autoAlpha:1, duration:1})
    },[])


    return(
        <>
            <Head>
                <title> about | catcarbn.com </title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            
            {/* ABOUT */}
            <div  id="top" className="h-screen mx-auto flex flex-col justify-center content-center self-center">
          
                <div className="w-5/6 px-4 mx-auto flex flex-col md:flex-row justify-center">
                    {/* PHOTO */}
                    <div className="mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8">
                        <h2 className="text-2xl text-center text-custom-sakura mb-2">Hi! I'm Cat!</h2>
                        <img src="/headshot.jpg" alt="My face." className="rounded-full shadow-lg w-32 md:w-48 md:h-48"  />
                    </div>
                    
                    {/* TEXT */}
                    <div  className="w-full md:w-1/2 md:text-lg flex flex-col items-center justify-center">
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
                    </div>
                </div>

                {/* CHEVRON  */}
                <ScrollBtn target="#experience" chevron={true}/>
            </div>

            {/* SKILLS/EXPERIENCE  */}
            <div id="experience" className="mt-64 w-5/6 md:mt-10 flex flex-col mx-auto justify-center items-center">
            
            <ScrollBtn target="#top" chevron={false}/>

            <div className="scrollcomp w-full flex flex-col md:flex-row justify-center">
                {/* STACK */}
                <div id="stack" className="w-full md:w-1/4 mb-10 md:mb-0">
                    <h2 className="mb-4 uppercase text-custom-sakura">Stack</h2>
                    <StackItem text="HTML" color="#ff9a84" icon={faHtml5} />
                    <StackItem text="CSS" color="#6993f5" icon={faCss3Alt} />
                    <StackItem text="JavaScript" color="#f6e995" icon={faJsSquare} />
                    <StackItem text="React" color="#a0e9fc" icon={faReact} />
                    <StackItem text="Sass/SCSS" color="#d785ad" icon={faSass} />

                </div>

                {/* EXPERIENCE */}
                <div id="exp" className="w-full md:w-1/3 mb-10 md:mb-0">
                    <h2 className="mb-2 uppercase text-custom-sakura">Experience</h2>
                    <div>
                        <h3>Open Water Accelerator</h3> 
                        <p>Frontend Engineering Intern</p>
                        <p className="mt-2">Aug 2020 - current</p>
                    </div>
                    <div className="mt-4">
                        <h3>
                            Freelance 
                        </h3> 
                        <p>
                            Frontend Engineer and UX Designer
                        </p>
                        <p className="mt-2">Jan 2013 - current</p>
                    </div>
                    <div className="mt-4">
                        <h3>Facebook</h3> 
                        <p>News Feed UX/UI Specialist</p>
                        <p className="mt-2">Feb 2018 - Sep 2019</p>
                    </div>
                </div>

                {/* EDUCATION  */}
                <div id="edu" className="w-full md:w-1/3 mb-10 md:mb-0">
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
                </div>
            </div>    
            
            {/* Chevron */}
            <ScrollBtn target="#end" chevron={true}/>
        </div>

            {/* END */}
            
            <div id="end" className="mt-64 mb-64 flex flex-col justify-center">

                <div className="mb-4 border-2 rounded-lg w-5/6 md:w-1/2 text-center hover:border-custom-flamingo hover:bg-custom-flamingo flex justify-center self-center p-4">
                    <Link href="/portfolio">
                        <a><h2 className="uppercase">View Portfolio</h2></a>
                    </Link>
                </div>
                <div className="mb-4 border-2 rounded-lg w-5/6 md:w-1/2 text-center hover:border-custom-flamingo hover:bg-custom-flamingo flex justify-center self-center p-4">
                    <Link href="/blog">
                        <a><h2 className="uppercase">Read blog</h2></a>
                    </Link>
                </div>
                <div className="mb-24 border-2 rounded-lg w-5/6 md:w-1/2 text-center hover:border-custom-flamingo hover:bg-custom-flamingo flex justify-center self-center p-4">
                    <Link href="/contact">
                        <a><h2 className="uppercase">Let's chat!</h2></a>
                    </Link>
                </div>

                <ScrollBtn target="#experience" chevron={false}/>

        </div>

    </>
    )
}