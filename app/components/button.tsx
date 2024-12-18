import Link from 'next/link'
import React from 'react'

type TButton = {
  children: React.ReactNode
  type?: "transparent" | "solid"
  className?: string
}

const Button = ({children, type = 'solid', className = ""} : TButton) => {
  return (
    <button className={`rounded-lg px-3 py-2 border border-black ${type === 'transparent' ? "bg-transparent text-black" : "bg-black text-white"} ${className}`}>{children}</button>
  )
}


type TNavButton = {
  children: React.ReactNode
  url: string
}

export const NavButton = ({children, url} : TNavButton) => {
  return (
    <Link href={url} className='px-3 py-2 border border-transparent text-black rounded-lg hover:border hover:text-black hover:border-black active:bg-black active:text-white focus:border focus:border-black focus:text-black outline-gray-500 target:bg-black target:text-white'>{children}</Link>
  );
}

export default Button