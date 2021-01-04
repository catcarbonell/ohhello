import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import {InlineWidget} from 'react-calendly'
import Socials from '../components/layout/Socials'
import Meta from '../components/meta'
import EmailForm from '../components/emailForm'

export default function Contact(){
    useEffect(()=>{
        gsap.fromTo('.contact-section',{x:1000, autoAlpha:0}, {x:0, autoAlpha:1, duration: 1, stagger:0.5})
    }, [])
    return(
        <>
            <Meta title="contact" />

            <div className="w-1/2 pl-0 md:w-4/6 md:mx-auto mb-64 flex flex-col md:flex-wrap md:flex-row justify-start items-start">

                <div className="contact-section text-xl mb-24">
                    <h2 className="mb-4 text-custom-lavender">Email me!</h2>
                    <EmailForm />
                </div>
               
            </div>
          
        </>
    )
}