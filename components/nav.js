import {useState, useEffect, useRef} from 'react'
import { TweenMax } from "gsap"
import Link from 'next/link'
import NavItem from './layout/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [state, setState] = useState(true);
    const moveMenu = useRef(null);

    useEffect(()=>{
        TweenMax.to(moveMenu.current, 0, { x: 1000 })
    }, [])

    const toggleMenu = () => {
        setState(!state)
        if(state === true){
            TweenMax.to(moveMenu.current, {duration: 0.7, x: 1})
        } else {
            TweenMax.to(moveMenu.current, {duration: 0.7, x: 1000})
        }
    };
     

    return(
        <div className="w-screen flex flex-row  items-center">

            <div className="flex items-center justify-end w-full mt-8 mr-4">
                <div id="menu-btn" className="fixed z-30 w-10 p-2 mt-6 mr-4 md:mr-6 bg-opacity-75 bg-custom-blk hover:bg-custom-sakura active:bg-custom-sakura hover:text-custom-flamingo active:text-custom-flamingo rounded-full">
                    <div onClick={toggleMenu} className="cursor-pointer font-bold">
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                </div>
               
                <nav id="menu" ref={moveMenu} className="fixed z-20 inset-y-0 right-0 bg-custom-blk bg-opacity-95 shadow-md md:text-left text-center md:w-1/6 w-full z-30 flex flex-col place-self-end font-bold justify-center">         
                    <div onClick={toggleMenu}><NavItem text="Close Menu &rarr;" /></div>
                    <div className="mr-2">
                        <Link href="/Home" as="/"><a onClick={toggleMenu}><NavItem text="Home" /></a></Link>
                        <Link href="/blog"><a onClick={toggleMenu}><NavItem text="Blog" /></a></Link>
                        <Link href="/portfolio"><a onClick={toggleMenu}><NavItem text="Portfolio" /></a></Link>
                        <Link href="/about"><a onClick={toggleMenu}><NavItem text="About" /></a></Link>
                        <Link href="/contact"><a onClick={toggleMenu}><NavItem text="Contact" /></a></Link>

                    </div>
                </nav> 
                
            </div>
        </div>
    );
}

export default Nav;