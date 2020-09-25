import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faJsSquare, faReact, faSass, faPython } from '@fortawesome/free-brands-svg-icons'

export default function About(){
    return(
        <>
            <Head>
                <title> about | catcarbn.com </title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            
            <div className="mx-auto flex flex-col">
          
                <div id="top" className="h-screen w-5/6 md:w-full flex flex-col md:flex-row mx-auto justify-center items-center">
                    
                    <div className="mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8 align-start">
                        <h2 className="text-2xl text-center text-custom-sakura mb-2">Hi! I'm Cat!</h2>
                        <img src="/headshot.jpg" alt="My face." className="rounded-full shadow-lg w-32 md:w-40 md:h-40"  />
                    </div>
                    

                    <div  className="w-5/6 md:w-1/2 text-lg">
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
                        <div className="mx-auto mt-8 w-5/6">
                           
                            <a href="#experience">
                               <FontAwesomeIcon className="w-6 mx-auto" icon={faChevronDown} />
                            </a>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        
        {/* SKILLS/EXPERIENCE  */}
        <div id="experience" className="mt-64 md:mt-10 flex flex-col justify-center items-center">

            <div className="w-full px-10 flex flex-col md:flex-row">
                {/* STACK */}
                <div className="w-5/6 md:w-1/3 mb-10 md:mb-0">
                    <h2 className="mb-4 uppercase text-custom-sakura">Stack</h2>
                    <div className="mb-2 flex flex-row">
                        <FontAwesomeIcon className="w-6" icon={faHtml5} />
                        <h3 className="ml-2 uppercase">Html</h3>
                    </div>
                    <div className="mb-2 flex flex-row">
                        <FontAwesomeIcon className="w-6" icon={faCss3} />
                        <h3 className="ml-2 uppercase">CSS</h3> 
                    </div>
                    <div className="mb-2 flex flex-row">
                        <FontAwesomeIcon className="w-6" icon={faJsSquare} />
                        <h3 className="ml-2">JavaScript</h3>
                    </div>
                    <div className="mb-2 flex flex-row">
                        <FontAwesomeIcon className="w-6" icon={faReact} />
                        <h3 className="ml-2">React</h3>
                    </div>
                    <div className="mb-2 flex flex-row">
                        <FontAwesomeIcon className="w-6" icon={faSass} />
                        <h3 className="ml-2">Sass/SCSS</h3>
                    </div>
                    <div className="mb-2 flex flex-row">
                        <FontAwesomeIcon className="w-6" icon={faPython} />
                        <h3 className="ml-2">Python</h3>
                    </div>
                </div>

                {/* EXPERIENCE */}
                <div className="w-5/6 md:w-1/3 mb-10 md:mb-0">
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
                            Frontend Engineer
                            <br />
                            and UX Designer
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
                <div className="w-5/6 md:w-1/3 mb-10 md:mb-0">
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

            <div className="mt-8 w-5/6">
                <a href="#end">
                    <FontAwesomeIcon className="w-6 mx-auto" icon={faChevronDown} />
                </a>
            </div>
        </div>

        {/* END */}
        <div id="end" className="mt-64 md:mt-10 mb-64 flex flex-col justify-center">
            <div className="mb-4 border-2 rounded-lg w-5/6 md:w-1/2 text-center hover:border-custom-flamingo hover:bg-custom-flamingo flex justify-center self-center p-4">
                <Link href="/portfolio">
                    <a><h2 className="uppercase">View my portfolio</h2></a>
                </Link>
             </div>
             <div className="mb-4 border-2 rounded-lg w-5/6 md:w-1/2 text-center hover:border-custom-flamingo hover:bg-custom-flamingo flex justify-center self-center p-4">
                <Link href="/blog">
                    <a><h2 className="uppercase">Read my blog</h2></a>
                </Link>
             </div>
            <div className="mb-24 border-2 rounded-lg w-5/6 md:w-1/2 text-center hover:border-custom-flamingo hover:bg-custom-flamingo flex justify-center self-center p-4">
                <Link href="/contact">
                    <a><h2 className="uppercase">Book a meeting!</h2></a>
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
                <a href="#top">
                    <FontAwesomeIcon className="w-8 mr-2" icon={faChevronUp} />
                </a>
                <p className="uppercase">Back to top</p>
            </div>
        </div>

    </>
    )
}