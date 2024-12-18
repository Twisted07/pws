import React from 'react'
import Header from './header'
import HeroSection from './hero'
import AboutSection from './about'
import { ITestimonial } from './components/card'
import TestimonialSection from './testimonial'
import SponsorsSection from './sponsors'
import CtaSection from './cta'
import Footer from './footer'



const App = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialSection />
        <SponsorsSection />
        <CtaSection />
      </main>

      <Footer />
    </>
    // Header
  )

}

export default App