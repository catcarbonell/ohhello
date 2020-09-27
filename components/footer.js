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
                        <br />
                    </p>
                    <p className="mt-2">
                    <Link href="/about"><a className="uppercase hover:text-custom-flamingo">Learn more &rarr;</a></Link>
                    </p>
                </div>
                <Socials />
            </div>

            <div className="w-5/6 md:w-1/4 flex flex-col md:mt-0 mt-10">
                <h2 className="text-custom-lavender font-bold mb-2">Work with me</h2>
                <p>Does your site need a UX review?</p>
                <p>Do you need a front-end dev who can produce a usable UI for you at lightning speed?</p>
                <Link href="/contact#calendly"><a className="mt-4 uppercase font-bold hover:text-custom-flamingo">Book your 30 min. intro call today!</a></Link>
            </div>

                <div className="w-5/6 md:w-1/6 flex flex-col md:mt-0 mt-10">
                    <h2 className="text-custom-lavender font-bold mb-2">Site Map</h2>
                    <Link href="/">
                        <a className="mr-2 uppercase cursor-pointer hover:text-custom-flamingo">Home</a>
                    </Link>
                    <Link href="/blog">
                        <a className="mr-2 cursor-pointer hover:text-custom-flamingo">Blog</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className="mr-2 cursor-pointer hover:text-custom-flamingo">Portfolio</a>
                    </Link>
                    <Link href="/about">
                        <a className="mr-2 cursor-pointer hover:text-custom-flamingo">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mr-2 cursor-pointer hover:text-custom-flamingo">Contact</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
