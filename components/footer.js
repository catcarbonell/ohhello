import Link from 'next/link'
import Socials from './layout/Socials'

const Footer = () => {
    return(
        <footer className="flex flex-col mx-auto md:flex-row justify-center place-content-center px-10 py-20 w-full bg-custom-blk bg-opacity-25">
            <div className="flex flex-col justify-evenly md:flex-row">
            <div className="w-5/6 md:w-1/4 md:mr-6 md:mt-0 mt-10">
                <div className="mb-10">
                    <h2 className="text-custom-lavender mb-2">Cat Carbonell</h2>
                    <p>
                        UI Engineer &amp;&amp; UX Designer all bundled up in a 
                        petite frame, draped in oversized sweaters.
                    </p>
                </div>
                <Socials />
            </div>

            <div className="w-5/6 md:w-1/3 flex flex-col md:mt-0 mt-10">
                <h2 className="text-custom-lavender font-bold mb-2">Work with me</h2>
                <Link href="/contact"><a className="uppercase font-bold">Book your discovery call today!</a></Link>
            </div>

            <div className="w-5/6 md:w-1/6 flex flex-col md:mt-0 mt-10">
                <h2 className="text-custom-lavender font-bold mb-2">Site Map</h2>
                <Link href="/">
                    <a className="mr-2 uppercase cursor-pointer">Home</a>
                </Link>
                <Link href="/blog">
                    <a className="mr-2 cursor-pointer">Blog</a>
                </Link>
                <Link href="/portfolio">
                    <a className="mr-2 cursor-pointer">Portfolio</a>
                </Link>
                <Link href="/about">
                    <a className="mr-2 cursor-pointer">About</a>
                </Link>
                <Link href="/contact">
                    <a className="mr-2 cursor-pointer">Contact</a>
                </Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer
