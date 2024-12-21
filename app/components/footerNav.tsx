"use client";
import Link from 'next/link'
import React, { useId } from 'react'


const FooterNav = ({list, heading} : {list: INavList[], heading: string}) => {
  const id = useId();
  return (
    <div>
      <h1 className='lg:text-3xl text-md font-semibold lg:font-bold tracking-normal'>{heading}</h1>
      <nav className='lg:mt-3 mt-2'>
        {
          list.map((link, index) => (<Link href={link.link} key={id + index}><h6 className='lg:text-lg text-sm'>{link.text}</h6></Link>))
        }
      </nav>
    </div>
  )

}

export default FooterNav