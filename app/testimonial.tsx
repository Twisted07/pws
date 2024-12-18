"use client";

import React, { useId } from 'react'
import Heading from './components/heading'
import Card, { ITestimonial } from './components/card';

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
    <section className='lg:px-16 px-10 py-12 lg:py-16 border border-black'>
      <Heading centered>Testimonials</Heading>
      <div className='flex justify-center items-center gap-5 flex-wrap flex-row mt-10 mb-10'>
        {
          testimonials.map((testimonial, i) => (<Card key={id+i} name={testimonial.name} image={testimonial.image} content={testimonial.content} />))
        }
      </div>
    </section>
  )
}

export default TestimonialSection