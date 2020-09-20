import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Socials = () => {
    return(
    <div className="flex flex-row">
        <a className="mr-2 w-6" href="https://facebook.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a className="mr-2 w-6" href="https://instagram.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a className="mr-2 w-6" href="https://twitter.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a className="mr-2 w-6" href="https://linkedin.com/in/catcarbonell" target="new">
            <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className="w-6" href="https://github.com/catcarbonell" target="new">
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </div>
    )
}

export default Socials