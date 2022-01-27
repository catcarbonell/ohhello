import Link from 'next/link'

const Intro = () =>{
    
    return(
      <div className="intro w-full lg:w-1/2 md:max-w-xl h-xxs md:mx-auto mt-20 mb-20 flex flex-row rounded-lg justify-center align-center text-center">
        <div className="p-6 flex flex-col justify-center align-center">
            <h1 className="text-custom-sakura hover:text-custom-flamingo">Cat Ballar</h1>
            <h4> Developer Advocate &amp; UI Engineer </h4>
          
            <Link href="/about">
              <a className="mt-4 font-bold hover:text-custom-flamingo">
                <h6>About Me</h6>
              </a>
            </Link>
            <a  
                target="_blank"
                href="https://dev.to/cat" 
                rel="noopener noreferrer" 
                className="mt-4 font-bold hover:text-custom-flamingo">
              <h6>Blog</h6>
            </a>
        </div>
      </div>

    )
}

export default Intro 