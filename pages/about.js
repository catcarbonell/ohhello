import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

export default function About(){
    return(
        <>
            <Head>
                <title> about | catcarbn.com </title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            
            <div className="mx-auto flex flex-col">
          
                <div id="top" className="h-screen w-5/6 flex flex-col md:flex-row mx-auto justify-center items-center">
                    
                    <div className="mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8 align-start text-center">
                        <h2 className="text-custom-sakura mb-2">Hi! I'm Cat!</h2>
                        <img src="/headshot.jpg" alt="My face." className="rounded-full shadow-lg w-32 md:w-40 md:h-40"  />
                        <div>
                            {/* <h3 className="mt-10 uppercase font-bold">Primary Stack:</h3> */}
                            <div className="flex flex-row justify-center mt-4">
                                <FontAwesomeIcon className="w-6 mr-2" icon={faHtml5} />
                                <FontAwesomeIcon className="w-6 mr-2" icon={faCss3} />
                                <FontAwesomeIcon className="w-6 mr-2" icon={faJsSquare} />      
                                <FontAwesomeIcon className="w-6 mr-2" icon={faReact} />
                                <FontAwesomeIcon className="w-6 mr-2" icon={faSass} />
                            </div>
                        </div>
                    </div>
                    

                    <div  className="w-5/6 md:w-1/2">
                        <p>
                            I'm a <span className="font-bold text-custom-lavender">UI engineer</span> and <span className="font-bold text-custom-lavender">UX designer</span> with a penchant for problem solving and 
                            all things aesthetic! 
                        </p>
                        <p className="mt-2">
                            I am known to be organized, communicative, adaptable, and efficient.
                        </p>
                        <p className="mt-2">
                            Speaking of efficiency, I can speed up your production process by at least 25%--guaranteed!
                        </p>
                        <p className="mt-2">
                            Currently, I am a front-end engineer intern at a startup through Open Water Accelerator!
                        </p>

                        
                    </div>
                </div>
                <div className="flex justify-center md:-mt-40">
                    <a href="#experience">
                        <FontAwesomeIcon className="w-8 mr-2" icon={faChevronDown} />
                    </a>
                </div>
            </div>

        <div id="experience" className="h-screen my-20 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-custom-sakura">Experience</h2>
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
                <div className="w-fullmd:w-1/2 p-4">
                    <h2 className="text-custom-sakura">Education</h2>
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
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-custom-sakura">Site Info</h2>
                    <p>
                        Created with <a className="underline font-bold hover:text-custom-sakura" href="https://nextjs.org/" target="new">Next.js</a>
                    </p>
                    <p>
                        Styled with <a className="underline font-bold hover:text-custom-sakura" href="https://tailwindcss.com" target="new">TailwindCSS</a>
                    </p>
                    <p>
                        Blog content managed by <a className="underline font-bold hover:text-custom-sakura" href="https://ghost.org/" target="new">Ghost</a>
                    </p>
                    <p>
                        Deployed with <a className="underline font-bold hover:text-custom-sakura" href="https://vercel.com" target="new">Vercel</a>
                    </p>
                </div>
            </div>    
        </div>

        <div className="flex justify-center md:-mt-40">
                <a href="#end">
                    <FontAwesomeIcon className="w-8 mr-2" icon={faChevronDown} />
                </a>
        </div>

        <div id="end" className="h-screen flex flex-col justify-center">
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

            <div className="flex justify-center">
                <a href="#top">
                    <FontAwesomeIcon className="w-8 mr-2" icon={faChevronUp} />
                </a>
            </div>
        </div>

    </>
    )
}