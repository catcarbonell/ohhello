import {useRef, useEffect} from 'react'
import { TweenMax } from "gsap";

const SlideUp = ({children}) => {
    const item = useRef(null)
    
    useEffect(()=>{
        TweenMax.fromTo(item.current, 3 , {  y: 0 }, { y: 20, repeat: -1 });
    })
    return (
        <div ref={item}>{children}</div>
    )
}

export default SlideUp
