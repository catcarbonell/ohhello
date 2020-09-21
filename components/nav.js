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
        TweenMax.to(moveMenu.current, 0, { x: 500 })
    }, [])

    const toggleMenu = () => {
        setState(!state)
        if(state === true){
            TweenMax.to(moveMenu.current, {duration: 0.7, x: 1})
        } else {
            TweenMax.to(moveMenu.current, {duration: 0.7, x: 500})
        }
    };
     

    return(
        <div className="w-screen flex flex-row md:px-4 md:py-2">
            <div className="flex flex-col justify-start w-5/6 md:ml-6 md:w-1/2 pl-4 pt-2 md:p-0">
               <Link href="/Home" as="/">
                    <a>
                        <h1 className="lowercase">@catcarbn</h1>
                        <h3> UX/UI Engineer &amp;&amp; Illustrator </h3>
                    </a>
                </Link> 
            </div>

            <div className="flex items-center mt-2 justify-end w-1/6 md:w-1/2">
                <div id="menu-btn" className="fixed z-30 bg-custom-shadow hover:bg-custom-lavender active:bg-custom-lavender hover:text-custom-shadow active:text-custom-shadow rounded-full p-2 mr-4 md:mr-6">
                    <div onClick={toggleMenu} className="cursor-pointer font-bold">
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                </div>
               
                <nav id="menu" ref={moveMenu} className="fixed z-20 inset-y-0 right-0 bg-custom-shadow bg-opacity-75 shadow-md md:text-left text-center md:w-1/6 w-full z-30 flex flex-col place-self-end font-bold justify-center">         
                    <div onClick={toggleMenu}><NavItem text="Close Menu &rarr;" /></div>
                    <div className="mr-2">
                        <Link href="/Home" as="/"><a onClick={toggleMenu}><NavItem text="Home" /></a></Link>
                        <Link href="/blog"><a onClick={toggleMenu}><NavItem text="Blog" /></a></Link>
                        <Link href="/portfolio"><a onClick={toggleMenu}><NavItem text="Portfolio" /></a></Link>
                        <Link href="/store"><a onClick={toggleMenu}><NavItem text="Store" /></a></Link>
                        <NavItem text="About" />
                        <NavItem text="Contact" />
                    </div>
                </nav> 
                
            </div>
        </div>
    );
}

export default Nav;