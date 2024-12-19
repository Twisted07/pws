import React from 'react'
import Heading from '../components/heading'
import ImageContainer from '../components/image'
import image from '@/assets/image2.jpg'
import HeadParagraph from '../components/headParagraph'
import SectionWrapper from '../components/sectionWrapper'

const HeroSection = () => {
  return (
    <SectionWrapper border split>
      <HeadParagraph
        heading='At Period with Smile,'
        paragraph='We believe menstrual health is a fundamental right, not a privilege. Founded on the principles of education, empowerment and equity, our mission is to dismantle the stigma surrounding menstruation and create a world where every individual, regardless of gender is informed and equipped to support, menstrual health. '
      />
      <ImageContainer image={image.src} wide />
    </SectionWrapper>
  )
}

export default HeroSection