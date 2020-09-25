
export default function Project(props){
    
    return(
        <div className="mx-auto md:h-xs h-screen mt-10 flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img className="rounded-t-lg md:rounded-l-lg md:rounded-r-none object-cover object-center h-full w-full" src={props.img} alt={props.title} />
            </div>
            <div className="md:w-1/2 p-4 md:pl-6 pl-4 h-xs md:h-auto bg-custom-blk rounded-b-lg md:rounded-r-lg bg-opacity-75 flex flex-col justify-center align-center">
                <div className="w-full md:w-5/6">
                    <h2 className="text-custom-sakura">{props.title}</h2>

                    <p>
                        {props.description}    
                    </p>

                </div>
                <div className="mt-4 flex flex-row">
                    <div className="mr-4">
                        <h3>Role</h3>
                        {props.role}
                    </div>

                    <div>
                        <h3>Stack</h3>
                        {props.stack}
                    </div>
                </div>
              

                <div className="text-center mt-6 flex flex-row ">
                    <div className="shadow-lg mr-2 px-4 py-2 border-2 rounded-lg uppercase hover:bg-custom-flamingo">
                        <a href={props.github} target="new">Github</a>
                    </div>
                    <div className="shadow-lg px-4 py-2 border-2 rounded-lg uppercase hover:bg-custom-flamingo">
                        <a href={props.demo} target="new">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}