import React from 'react'
import HeadParagraph from '../components/headParagraph'
import ImageContainer from '../components/image'
import image from '@/assets/image2.jpg'
import image2 from '@/assets/image1.jpg'
import SectionWrapper from '../components/sectionWrapper'

const Hero = () => {
  return (
    <SectionWrapper border>
      <div className='space-y-16 mb-10 text-center lg:text-left'>
        <div className='lg:grid-cols-2 grid lg:gap-x-36 gap-10 items-center'>
          <HeadParagraph
            heading='Menstrual Kit Distribution'
            paragraph='Providing access to essential supplies for women and girls in under-served communities'
          />
          <ImageContainer image={image.src} wide />
        </div>

        <div className='lg:grid-cols-2 flex flex-col-reverse lg:grid lg:gap-x-36 gap-10 lg:items-center'>
          <ImageContainer image={image2.src} wide />
          <HeadParagraph
            heading='Public Education'
            paragraph='Engaging sessions in schools and communities to dispel myths and spread awareness about menstrual health and hygiene'
          />
        </div>

        <div className='lg:grid-cols-2 grid lg:gap-x-36 gap-10 items-center'>
          <HeadParagraph
            heading='Empowerment Programs'
            paragraph='Vocational training and income -generating initiatives to help women achieve finanvcial independence'
          />
          <ImageContainer image={image.src} wide />
        </div>

        <div className='lg:grid-cols-2 flex flex-col-reverse lg:grid lg:gap-x-36 gap-10 lg:items-center'>
          <ImageContainer image={image2.src} wide />
          <HeadParagraph
            heading='Male Sensitization Workshops'
            paragraph='Educating men on how to support the women in their lives during their menstrual cycle.'
          />
        </div>
      </div>
    </SectionWrapper>
  )

}

export default Hero