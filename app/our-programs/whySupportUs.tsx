"use client";

import React, { useId } from 'react'
import SectionWrapper from '../components/sectionWrapper'
import Heading from '../components/heading'
import CardsContainer from '../components/cardsContainer'

const WhySupportUs = () => {
  const id = useId();
  const list : ICard[] = [
    {
      id: id + 1,
      title: "Impact Lives Directly",
    },
    {
      id: id + 2,
      title: "Foster Gender Equality",
    },
    {
      id: id + 5,
      title: "Join a Growing Movement",
    },
  ];

  return (
    <SectionWrapper>
      <Heading centered>Why Support Us</Heading>
      <CardsContainer list={list} className='mt-5 lg:mt-0'/>
      <p className='text-center tracking-wide leading-relaxed lg:text-lg lg:mt-12 mt-6'>Your contriburions help distribute life-changing menstrual kits, bridge the gender gap in menstrual health and transform lives across regions.</p>
    </SectionWrapper>
  )

}

export default WhySupportUs