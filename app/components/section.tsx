import React from 'react'
import Heading from './heading'

type TSection = {
  heading: string
  image: string
  text: string
}

const Section = ({ heading, image, text } : TSection) => {
  return (
    <section className='lg:py-16 lg:px-16 px-10 py-12'>
      <Heading centered>{heading}</Heading>
      <div className='lg:grid lg:grid-cols-2 gap-24 mt-10 mb-5'>
        <h1 className='border border-black h-[20rem]'>{image}</h1>
        <article className='lg:mt-0 mt-10 text-lg leading-loose font-extralight tracking-normal lg:tracking-wide'>{text}</article>
      </div>
    </section>
  )
}

export default Section