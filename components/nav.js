import NavItem from './layout/NavItem'

const Nav = () => {
    return(
        <nav id="main-nav" className="fixed h-screen bg-custom-blk bg-opacity-75 shadow-md md:text-right text-center md:w-1/6 w-full z-30 absolute flex flex-col place-self-start font-bold justify-center">
            <div className="mr-2">
                <NavItem text="Blog" />
                <NavItem text="Portfolio" />
                <NavItem text="About" />
                <NavItem text="Store" />
                <NavItem text="Contact" />
                <NavItem text="&larr; Close Menu" />
            </div>
        </nav>
    );
}

export default Nav;