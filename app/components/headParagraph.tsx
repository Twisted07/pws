import React from 'react'
import Heading from './heading'

type TProps = {
  className?: string
  paragraph: string
  heading: string
}

const HeadParagraph = ({ heading, paragraph, className }: TProps) => {
  return (
    <div className={`space-y-5 ${className}`}>
      <Heading>{heading}</Heading>
      <p className='text-lg lg:text-xl lg:leading-relaxed'>{paragraph}</p>
    </div>
  )
}

export default HeadParagraph