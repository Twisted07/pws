"use client";
import React, { useId } from 'react'
import Heading from './components/heading'
import ImageContainer from './components/image';
import SectionWrapper from './components/sectionWrapper';

const CtaSection = () => {
  const imageList = [1, 2, 3, 4];
  const id = useId();


  return (
    <SectionWrapper border>
      <Heading centered>Get Involved</Heading>
      <h2 className='lg:font-semibold font-normal -mt-5 lg:-mt-10 lg:text-2xl text-lg text-center'>Want to make a difference? Here is how you can help</h2>
      <div className='flex justify-center items-center gap-5 flex-wrap lg:mt-16 mt-12 mb-10'>
        {
          imageList.map((_, index) => (<ImageContainer key={id + index} image={`https://picsum.photos/200/40${index}`} />))
        }
      </div>
    </SectionWrapper>
  )

}

export default CtaSection