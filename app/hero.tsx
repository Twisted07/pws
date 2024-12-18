import React from 'react'
import Heading from './components/heading'
import Button from './components/button'

const HeroSection = () => {
  return (
    <section className='border-y border-black px-16 py-24 grid grid-cols-2 gap-36'>
      <div>
        <Heading>Empowering Lives,<br/>One Period at a Time</Heading>
        <p className='mt-10 text-xl'>
          Breaking taboos, spreading knowledge and fostering understanding around menstrual health and hygiene for a better future.
        </p>
        <div className='mt-8 space-x-5'>
          <Button type='transparent'>Join our mission</Button>
          <Button>Partner with us</Button>
        </div>
      </div>

      <div className='border border-black'>Image</div>
    </section>
  )
}

export default HeroSection