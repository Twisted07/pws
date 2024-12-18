import React from 'react'
import Heading from './heading'

type TSection = {
  heading: string
  image: string
  text: string
}

const Section = ({ heading, image, text } : TSection) => {
  return (
    <section className='py-16 px-16'>
      <Heading centered>{heading}</Heading>
      <div className='grid grid-cols-2 gap-24 mt-10 mb-5'>
        <h1 className='border border-black'>{image}</h1>
        <article className='text-lg leading-loose font-extralight tracking-wide'>{text}</article>
      </div>
    </section>
  )
}

export default Section