import React from 'react'
import Heading from './heading'
import ImageContainer from './image'
import SectionWrapper from './sectionWrapper'

type TSection = {
  heading: string
  image: string
  text: string
}

const Section = ({ heading, image, text } : TSection) => {
  return (
    <SectionWrapper>
      <Heading centered>{heading}</Heading>
      <div className='lg:grid lg:grid-cols-2 xl:gap-24 md:gap-16 grid mb-5 items-center'>
        <ImageContainer image={image} wide className='' />
        <article className='md:mt-0 mt-5 text-lg leading-loose font-extralight tracking-normal lg:tracking-wide'>{text}</article>
      </div>
    </SectionWrapper>
  )
}

export default Section