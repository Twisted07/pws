"use client"
import React, { useId } from 'react'
import SectionWrapper from '../components/sectionWrapper'
import ImageContainer from '../components/image';
import Heading from '../components/heading';

const Values = () => {
  const list = ["Empowerment", "Inclusivity", "Sustainability", "Compassion"];
  const id = useId();

  return (
    <SectionWrapper border>
      <Heading centered>Our Values</Heading>
      <div className='flex justify-center items-center gap-5 flex-wrap'>
        {list.map((item, index) => <ImageContainer key={id + index} image={`https://picsum.photos/200/40${index}`} text={item} />)}
      </div>
      <p className='text-center tracking-wide leading-relaxed lg:text-lg lg:mt-12 mt-6'>Join us as we work towards a future where menstruation is understood, supported and never a cause for shame or inequality.</p>
    </SectionWrapper>
  )
}

export default Values