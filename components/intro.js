import {useEffect} from 'react'
import Link from 'next/link'
import Container from './layout/Container'

const Intro = () =>{
    let whatIcanDo = [
        `with front-end development prowess and designer sensibilities?`,
        `who can design logos and stickers for your team?`,
        `who can build a prod-ready UI in React at lightning speed?` ,
        `whip up wireframes in Sketch ASAP?` ,
        `who curates excellent memes?` ,
        `who can speak both designer and engineer jargon?` ,
        `who will and be your hype-lady and will gas you up when you need the boost?`,
    ]

    useEffect(() => {
        let offset=0;
        let stuffSpan = document.getElementById('stuff');
        stuffSpan.innerText=whatIcanDo[0];
        whatIcanDo.forEach(function(i){
            setTimeout(function(){
            stuffSpan.innerText=i;
            }, 7000 + offset)
            offset += 7000
        })
    })
            
    return(
        <Container>
        <div className="min-w-0 w-5/6 md:w-sm mx-auto md:max-w-xl">
          <div className="flex flex-col justify-center self-center">
           
            <h2>
              Need someone <br />
            </h2>
            <div className="h-32">
              <h2 className="text-custom-lavender" id="stuff"></h2>
            </div>
            <h2 className="text-4xl my-6 font-bold text-custom-sakura">
              I got you.
            </h2>
            <img className="w-20" src="/cclogo2.png" alt="my logo: a cat head surrounded by brackets" />
          </div>
          <div className="mt-20 md:mt-12 flex flex-col md:flex-row">
            <Link href="/about">
              <a className="w-auto text-center px-4 py-2 border-solid border-2 border-custom-sakura 
                            uppercase rounded-lg text-lg bg-custom-blk
                            hover:bg-custom-flamingo hover:text-custom-sakura">
                lol what?
              </a>
            </Link>
          </div>
        </div>
      </Container>
    )
}

export default Intro 