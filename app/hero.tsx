import React from 'react'
import Heading from './components/heading'
import Button from './components/button'
import heroImage from '@/app/assets/image2.jpg'
import ImageContainer from './components/image'

const HeroSection = () => {
  
  return (
    <section className='border-y border-black lg:px-16 lg:py-24 py-12 lg:grid lg:grid-cols-2 lg:gap-36 flex flex-col items-center px-10'>
      <div>
        <Heading>Empowering Lives,<br/>One Period at a Time</Heading>
        <p className='lg:mt-10 mt-5 text-lg lg:text-xl'>
          Breaking taboos, spreading knowledge and fostering understanding around menstrual health and hygiene for a better future.
        </p>
        <div className='mt-8 space-x-5 flex'>
          <Button type='transparent'>Join our mission</Button>
          <Button>Partner with us</Button>
        </div>
      </div>

      <ImageContainer image={heroImage.src} className="mt-5" wide />
    </section>
  )
}

export default HeroSection