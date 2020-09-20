import Link from 'next/link'
import Socials from './layout/Socials'

const Footer = () => {
    return(
        <footer className="flex flex-col items-center justify-center py-20 bg-custom-shadow bg-opacity-50 w-full">
            <Socials />
            <div className="lowercase mt-4 flex flex-row">
                <Link href="/">
                    <a className="mr-2 hover:bg-custom-blk cursor-pointer">Home</a>
                </Link>
                <Link href="/blog">
                    <a className="mr-2 hover:bg-custom-blk cursor-pointer">Blog</a>
                </Link>
                <Link href="/portfolio">
                    <a className="mr-2 hover:bg-custom-blk cursor-pointer">Portfolio</a>
                </Link>
                <Link href="/store">
                    <a className="mr-2 hover:bg-custom-blk cursor-pointer">Store</a>
                </Link>
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">About</p> 
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">Contact</p>


            </div>
        </footer>
    )
}

export default Footer
