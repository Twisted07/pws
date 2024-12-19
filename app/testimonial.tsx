"use client";

import React, { useId } from 'react'
import Heading from './components/heading'
import Card, { ITestimonial } from './components/card';
import SectionWrapper from './components/sectionWrapper';

const testimonials : ITestimonial[] = [
  {
    name: "John Doe",
    image: "https://picsum.photos/200/300",
    content: "Thanks to Period with a Smile, I not only have access to menstrual products but also learned a skill that now sustains my family." 
  },
  {
    name: "Jane Doe",
    image: "https://picsum.photos/200/300",
    content: "Thanks to Period with a Smile, I not only have access to menstrual products but also learned a skill that now sustains my family."
  },
  {
    name: "Jane Doe",
    image: "https://picsum.photos/200/300",
    content: "Thanks to Period with a Smile, I not only have access to menstrual products but also learned a skill that now sustains my family."
  },
  {
    name: "Jane Doe",
    image: "https://picsum.photos/200/300",
    content: "Thanks to Period with a Smile, I not only have access to menstrual products but also learned a skill that now sustains my family."
  },
];

const TestimonialSection = () => {
  const id = useId();
  return (
    <SectionWrapper border>
      <Heading centered>Testimonials</Heading>
      <div className='flex justify-center items-center gap-5 flex-wrap flex-row mb-10'>
        {
          testimonials.map((testimonial, i) => (<Card key={id+i} name={testimonial.name} image={testimonial.image} content={testimonial.content} />))
        }
      </div>
    </SectionWrapper>
  )
}

export default TestimonialSection