"use client";
import React, { useId } from 'react'
import Heading from './components/heading'
import ImageContainer from './components/image';

const CtaSection = () => {
  const imageList = [1, 2, 3, 4];
  const id = useId();


  return (
    <section className='lg:p-16 px-10 py-12 border border-black'>
      <Heading centered>Get Involved</Heading>
      <h2 className='lg:font-semibold font-normal lg:text-2xl text-lg text-center'>Want to make a difference? Here is how you can help</h2>
      <div className='flex justify-center items-center gap-5 flex-wrap lg:mt-16 mt-12 mb-10'>
        {
          imageList.map((_, index) => (<ImageContainer key={id + index} image={`https://picsum.photos/200/40${index}`} />))
        }
      </div>
    </section>
  )

}

export default CtaSection