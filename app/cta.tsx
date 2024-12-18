"use client";
import React, { useId } from 'react'
import Heading from './components/heading'
import ImageContainer from './components/image';

const CtaSection = () => {
  const imageList = [1, 2, 3, 4];
  const id = useId();


  return (
    <section className='p-16 border border-black'>
      <Heading centered>Get Involved</Heading>
      <h2 className='font-semibold text-2xl text-center'>Want to make a difference? Here is how you can help</h2>
      <div className='flex justify-center items-center gap-5 flex-wrap mt-16 mb-10'>
        {
          imageList.map((_, index) => (<ImageContainer key={id + index} image={`https://picsum.photos/200/40${index}`} />))
        }
      </div>
    </section>
  )

}

export default CtaSection