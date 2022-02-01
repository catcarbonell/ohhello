import Link from 'next/link'

const Intro = () =>{
    
    return(
      <div className="intro w-full lg:w-1/2 md:max-w-xl h-xxs md:mx-auto mt-20 mb-20 flex flex-row rounded-lg justify-center align-center text-center">
        <div className="p-6 flex flex-col justify-center align-center">
            <h1 className="text-custom-sakura hover:text-custom-flamingo">Hi, I'm Cat!</h1>
            <span> I am a Developer Advocate who specializes in Front-end development. I thrive on helping others get started on their coding journey! </span>
        </div>
      </div>

    )
}

export default Intro 