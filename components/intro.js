import Link from 'next/link'

const Intro = (props) =>{
    
    return(

      <div className="w-full lg:w-1/2 md:max-w-xl h-xxs md:mx-auto mt-10 flex flex-row bg-custom-blk bg-opacity-75 rounded-lg">
        <div className="w-full md:w-1/2 overflow-hidden rounded-l-lg">
          <Link href={props.link}><a>
            <img className="h-full w-full object-cover" src={props.img} alt={props.title} />
          </a></Link>
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-center align-center">
             
          <Link href={props.link}><a className="hover:bg-transparent"> 
            <h2 className="text-custom-sakura hover:text-custom-flamingo">{props.title}</h2>
              <p>
                  {props.description}    
              </p>
            </a></Link>
         </div>
      </div>

    )
}

export default Intro 