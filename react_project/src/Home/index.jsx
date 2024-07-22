import React from 'react'
import Header from './header'
import HeroSection from './HEROSECTION/heroSection'
import Sec1 from './SECTIONCOMPONENT1/sec1'
import Sec2 from './SECTION2COMPONENT/sec2'
import Sec3 from '../SECTION3COMPONENT/sec3'

const Index = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
    </div>
  )
}

export default Index