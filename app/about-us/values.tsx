"use client"
import React, { useId } from 'react'
import SectionWrapper from '../components/sectionWrapper'
import Heading from '../components/heading';
import CardsContainer from '../components/cardsContainer';

const Values = () => {
  const id = useId();
  const list : ICard[] = [
    {
      id: id + 1,
      title: "Empowerment",
    },
    {
      id: id + 2,
      title: "Inclusivity",
    },
    {
      id: id + 3,
      title: "Sustainability",
    },
    {
      id: id + 4,
      title: "Compassion",
    }
  ];


  return (
    <SectionWrapper border>
      <Heading centered>Our Values</Heading>
      <CardsContainer list={list} />  
      <p className='text-center tracking-wide leading-relaxed lg:text-lg lg:mt-12 mt-6'>Join us as we work towards a future where menstruation is understood, supported and never a cause for shame or inequality.</p>
    </SectionWrapper>
  )
}

export default Values