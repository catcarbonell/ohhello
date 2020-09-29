import {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import NavItem from './layout/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [state, setState] = useState(true);
    const moveMenu = useRef(null);

    useEffect(()=>{
        gsap.to(moveMenu.current, 0, { x: 1000 })
    }, [])

    const toggleMenu = () => {
        setState(!state)
        const content = document.getElementsByTagName('body')[0]
        if(state){
            content.classList.add('overflow-hidden')
            gsap.to(moveMenu.current, {duration: 0.7, x: 0})
        } else {
            content.classList.remove('overflow-hidden')
            gsap.to(moveMenu.current, {duration: 0.7, x: 1000})
        }
    };
     

    return(
        <div className="overflow-hidden fixed z-30 w-screen flex flex-row py-2 md:pt-2 justify-center items-center bg-custom-blk bg-opacity-50">
            
            <div className="flex items-center justify-start ml-4 w-1/2">
                <Link href="/"><a>
                    <figure id="logo" className="w-1/2 md:w-24">
                        <img src="/cclogo.png" alt="my logo: a vector shape of a cat's head surrounded by angle brackets" />
                    </figure>
                </a></Link>
            </div>

            <div className="flex items-center justify-end w-1/2 mr-4">
                
                <div id="menu-btn" className="fixed z-30 mr-4 md:mr-6 bg-opacity-75 text-custom-flamingo hover:text-custom-sakura active:text-custom-sakura">
                    <div onClick={toggleMenu} className="p-2 w-10 opacity-75 cursor-pointer font-bold">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
               
                <nav id="menu" ref={moveMenu} className="fixed z-20 inset-y-0 right-0 bg-custom-blk bg-opacity-95 shadow-md md:text-left text-center md:w-1/6 w-full z-30 flex flex-col place-self-end font-bold justify-center">         
                    <div onClick={toggleMenu}>
                        <NavItem text="Close Menu &rarr;" />
                    </div>
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