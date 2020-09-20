// import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import NavItem from './layout/NavItem'

const Nav = () => {


    return(
        <>
        <div id="menu-btn" className="flex self-start m-10 fixed z-20">
            <h3 className="cursor-pointer hover:bg-custom-blk">Menu</h3>
        </div>
        <nav id="main-nav" className="fixed h-screen bg-custom-blk bg-opacity-75 shadow-md md:text-right text-center md:w-1/6 w-full z-30 absolute flex flex-col place-self-start font-bold justify-center">         
            <div className="mr-2">
                <Link href="/"><a><NavItem text="Home" /></a></Link>
                <Link href="/blog"><a><NavItem text="Blog" /></a></Link>
                <Link href="/portfolio"><a><NavItem text="Portfolio" /></a></Link>
                <Link href="/store"><a><NavItem text="Store" /></a></Link>
                <NavItem text="About" />
                <NavItem text="Contact" />
                <NavItem text="&larr; Close Menu" />
            </div>
        </nav>
        </>
    );
}

export default Nav;