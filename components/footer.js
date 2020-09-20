import Socials from './layout/Socials'

const Footer = () => {
    return(
        <footer className="flex flex-col items-center justify-center py-20 bg-custom-shadow w-full">
            <Socials />
            <div className="lowercase mt-4 flex flex-row">
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">About</p> 
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">Blog</p> 
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">Contact</p>
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">Portfolio</p> 
                <p className="mr-2 hover:bg-custom-blk cursor-pointer">Store</p>
            </div>
        </footer>
    )
}

export default Footer
