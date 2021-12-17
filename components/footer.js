import Link from 'next/link'
import Socials from './layout/Socials'
import EmailForm from './emailForm'
import StackItem from './layout/stackItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJsSquare, faReact, faSass, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <footer className="flex flex-col mx-auto md:flex-row justify-center place-content-center px-10 py-20 w-full bg-custom-blk bg-opacity-25">
            <div className="flex flex-col justify-evenly md:flex-row">
                <div className="w-3/4 md:mr-6 md:mt-0 mt-10">
                    <div className="mb-6">
                        <h2 className="text-custom-lavender mb-2">Cat Ballar</h2>
                        <p className="md:w-3/4">
                            UX Designer and Front-end engineer wrapped up in oversized sweaters.
                            <br />
                        </p>
                    </div>
                  
                    <StackItem text="HTML" color="#ff9a84" icon={faHtml5} />
                    <StackItem text="CSS" color="#6993f5" icon={faCss3Alt} />
                    <StackItem text="JavaScript" color="#f6e995" icon={faJsSquare} />
                    <StackItem text="React" color="#a0e9fc" icon={faReact} />
                    <StackItem text="Sass/SCSS" color="#d785ad" icon={faSass} />

                </div>



                <div className="w-5/6 flex flex-col md:mt-0 mt-10">
                    <h2 className="text-custom-lavender mb-2">Contact</h2>
                    <Socials />
                    <div className="mt-6">
                    <EmailForm />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
