import { gsap } from 'gsap/dist/gsap'
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
gsap.registerPlugin(ScrollToPlugin);

export default function ScrollBtn(props){
    const handleClick = (e) =>{
        e.stopPropagation()
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y:`${props.target}`, 
                offsetY:70
            }
        })
    }
    return(
        <div className="my-12 w-5/6 mx-auto cursor-pointer" onClick={handleClick}>
            { props.chevron
                ? <FontAwesomeIcon className="w-6 mx-auto" icon={faChevronDown} /> 
                : <FontAwesomeIcon className="w-6 mx-auto" icon={faChevronUp} />
            }  
        </div>
    )
}