// import {useEffect, useRef} from 'react'`
import { gsap } from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Meta from '../components/meta'
import Portfolio from './portfolio'
import Intro from '../components/intro'

gsap.registerPlugin(ScrollTrigger);

const Home = ()=> {
 
  return (
    <>
      <Meta />
      <Intro />
      <Portfolio />
    </>
  )
}

export default Home