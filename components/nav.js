import {useState} from 'react'
import Link from 'next/link'
import NavItem from './layout/NavItem'

const Nav = () => {
    const [state, setState] = useState(true);

    const toggleMenu = () => {
        let menu = document.getElementById('menu')
        setState(!state)
        if(menu.classList.contains('hidden')){

            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden')
        }
    };
     

    return(
        <>
        <div id="menu-btn" className="flex self-end m-10 fixed z-20">
            <h3 onClick={toggleMenu} className="cursor-pointer hover:bg-custom-shadow p-2">Menu</h3>
        </div>

        <nav id="menu" className="hidden fixed bg-custom-blk bg-opacity-75 shadow-md md:text-left text-center md:w-1/6 w-full z-30 absolute flex flex-col place-self-end font-bold justify-center">         
            <div className="mr-2">
                <Link href="/"><a><NavItem text="Home" /></a></Link>
                <Link href="/blog"><a><NavItem text="Blog" /></a></Link>
                <Link href="/portfolio"><a><NavItem text="Portfolio" /></a></Link>
                <Link href="/store"><a><NavItem text="Store" /></a></Link>
                <NavItem text="About" />
                <NavItem text="Contact" />
                <div onClick={toggleMenu}><NavItem text="Close Menu &rarr;" /></div>
            </div>
        </nav>
        </>
    );
}

export default Nav;