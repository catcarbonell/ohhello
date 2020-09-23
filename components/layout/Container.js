

export default function Container({children}){
    return(   
        <div className="m-auto mb-64 flex flex-col justify-center align-center h-screen">
            {children}
        </div>
    )
}