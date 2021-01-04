import Link from 'next/link'

const Intro = () =>{
    
    return(
      <div className="intro w-full lg:w-1/2 md:max-w-xl h-xxs md:mx-auto mt-20 mb-20 flex flex-row bg-custom-blk bg-opacity-75 rounded-lg">
      
        <div className="md:w-1/2 p-6 flex flex-col justify-center align-center">
            <h2 className="text-custom-sakura hover:text-custom-flamingo">Hi.</h2>
              <p>
                  Welcome to my portfolio. Please scroll down.
              </p>
         </div>
      </div>

    )
}

export default Intro 