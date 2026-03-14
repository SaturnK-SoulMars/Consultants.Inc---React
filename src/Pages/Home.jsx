import React from 'react'
import HeroSection from '../Components/HeroSection'
import CursorBlob from '../Components/CursorBlob'
import AboutSection from '../Components/AboutSection'
import ServiceSection from '../Components/ServiceSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-black overflow-hidden w-full'>
      
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
    </div>
  )
}

export default Home
