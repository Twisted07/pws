"use client";
import Link from 'next/link'
import React, { useId } from 'react'

export interface INavList {
  text: string
  link: string
}

const FooterNav = ({list, heading} : {list: INavList[], heading: string}) => {
  const id = useId();
  return (
    <div>
      <h1 className='text-3xl font-bold tracking-normal'>{heading}</h1>
      <nav className='mt-3'>
        {
          list.map((link, index) => (<Link href={link.link} key={id + index}><h6 className='text-lg'>{link.text}</h6></Link>))
        }
      </nav>
    </div>
  )

}

export default FooterNav