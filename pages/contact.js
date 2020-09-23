import Head from 'next/head'
import {InlineWidget} from 'react-calendly'
import Socials from '../components/layout/Socials'

export default function Contact(){
    return(
        <>
            <Head>
                <title> contact | catcarbn.com </title>
                <link rel="icon" href="/ccfavicon.ico" />
            </Head>
            <div className="mx-auto w-5/6 md:w-full">
                <div className="my-20">
                    <h2 className="mb-4 text-custom-lavender">Add/Follow me!</h2>
                    <Socials/>
                </div>

                <div className="text-xl my-20">
                    <h2 className="mb-4 text-custom-lavender">Email me!</h2>
                    <p>&rarr; hello (at) catcarbn.com</p>
                </div>
                <div id="calendly" className="text-lg my-20">

                    <h2 className="text-custom-lavender">Book a <span className="uppercase">free</span> 30 min. intro call!</h2>
                    <p className="mb-10">...or book a 1 or 2 hour consultation <span className="font-bold">right now! &darr;</span></p>

                    <InlineWidget
                        pageSettings={{
                            backgroundColor: '21183c' ,
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: 'ccb8fc',
                            textColor: 'f0e2fd'
                        }}
                        prefill={{
                            customAnswers: {
                            a1: 'a1',
                            a10: 'a10',
                            a2: 'a2',
                            a3: 'a3',
                            a4: 'a4',
                            a5: 'a5',
                            a6: 'a6',
                            a7: 'a7',
                            a8: 'a8',
                            a9: 'a9'
                            },
                            email: 'test@test.com',
                            firstName: 'Jon',
                            lastName: 'Snow',
                            name: 'Jon Snow'
                        }}
                        styles={{
                            height: '1000px'
                        }}
                        url="https://calendly.com/catcarbonell"
                        utm={{
                            utmCampaign: 'Spring Sale 2019',
                            utmContent: 'Shoe and Shirts',
                            utmMedium: 'Ad',
                            utmSource: 'Facebook',
                            utmTerm: 'Spring'
                        }}
                        />
                    </div>
               
            </div>
          
        </>
    )
}