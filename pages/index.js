import {useEffect, useRef} from 'react'
import { gsap } from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Meta from '../components/meta'
import Portfolio from './portfolio'
import Intro from '../components/intro'
import Testimonials from './testimonials'

gsap.registerPlugin(ScrollTrigger);

const Home = ()=> {
 
  return (
    <>
      <Meta title="cat" />
      <Intro />
      <Portfolio />
      <Testimonials />
    </>
  )
}

export default Home