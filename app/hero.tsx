import React from 'react'
import Heading from './components/heading'
import Button from './components/button'
import heroImage from '@/assets/image2.jpg'
import ImageContainer from './components/image'
import SectionWrapper from './components/sectionWrapper'

const HeroSection = () => {
  
  return (
    <SectionWrapper border split>
      <div>
        <Heading>Empowering Lives,<br/>One Period at a Time</Heading>
        <p className='text-lg lg:text-xl'>
          Breaking taboos, spreading knowledge and fostering understanding around menstrual health and hygiene for a better future.
        </p>
        <div className='mt-8 space-x-5 flex'>
          <Button type='transparent'>Join our mission</Button>
          <Button>Partner with us</Button>
        </div>
      </div>

      <ImageContainer image={heroImage.src} className="mt-5 md:mt-0" wide />
    </SectionWrapper>

  )
}

export default HeroSection