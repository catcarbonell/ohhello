import Head from 'next/head'
import Project from '../components/project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faReact, faSass, faPython } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
    return(
        <>
            <Head>
                <title> portfolio | catcarbn.com </title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            <div className="w-5/6 md:w-4/6 mx-auto mb-64 flex flex-col md:flex-wrap md:flex-row justify-start items-start">
                <Project 
                    title="Killer Kao"
                    description="A vanilla JS-based web app game utilizing a basic rock-paper-scissors engine."
                    img="/portfolio/killerkao.png"
                    role="Creator"
                    stack="HTML5, CSS3, JS"
                    github="https://github.com/catcarbonell/killerkao"
                    demo="https://catcarbonell.github.io/killerkao"
                />

                <Project 
                    title="POPOPjs"
                    description="A vanilla JS beginner dev-friendly modular modal framework"
                    img="/portfolio/popop.png"
                    role="Creator"
                    stack="HTML5, CSS3, JS"
                    github="https://github.com/catcarbonell/popop"
                    demo="https://catcarbonell.github.io/popop"
                />

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


        </>   
    )
}

export default Portfolio