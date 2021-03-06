import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faLinkedin, faGithub, faPinterest } from '@fortawesome/free-brands-svg-icons'


const Socials = () => {
    return(
    <div className="socials flex flex-row">
        <a className="mr-2 w-6 hover:text-custom-flamingo" href="https://facebook.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a className="mr-2 w-6 hover:text-custom-flamingo" href="https://instagram.com/catoutofthepod" target="new">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a className="mr-2 w-6 hover:text-custom-flamingo" rel="me" href="https://twitter.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a className="w-6 hover:text-custom-flamingo" href="https://github.com/catcarbonell" target="new">
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </div>
    )
}

export default Socials