import React from 'react'
import Section from './components/section';
import image from '@/assets/image1.jpg'
const AboutSection = () => {
  return (
    <Section
      heading='About Us'
      image={image.src}
      text='At Period with Smile, we are on a mission to educate, empower and liberate. We aim to break the silence aroiund menstrual health, providing women and girls with the tools and knowledge they need to thrive.
          We work with men, educators and sponsors to build a community of support and understanding. Together, we are creating a world where menstrual health is a shared responsibility.'
    />
  );

}

export default AboutSection