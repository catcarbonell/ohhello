import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub, faDev, faCodepen } from '@fortawesome/free-brands-svg-icons'


const Socials = () => {
    return(
    <div className="socials flex flex-row">
        <a className="mr-2 w-6 hover:text-custom-flamingo" href="https://instagram.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a className="mr-2 w-6 hover:text-custom-flamingo" rel="me" href="https://twitter.com/catballar" target="new">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a className="mr-2 w-6 hover:text-custom-flamingo" href="https://github.com/catcarbonell" target="new">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="mr-2 w-6 hover:text-custom-flamingo" href="https://linkedin.com/in/catcarbonell" target="new">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="mr-2 w-6 hover:text-custom-flamingo" href="https://codepen.io/catvscode" target="new">
            <FontAwesomeIcon icon={faCodepen} />
        </a>
        <a className="w-6 hover:text-custom-flamingo" href="https://dev.to/cat" target="new">
            <FontAwesomeIcon icon={faDev} />
        </a>
        
        
    </div>
    )
}

export default Socials