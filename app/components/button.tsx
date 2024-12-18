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
  className?: string
}

export const NavButton = ({children, url, className} : TNavButton) => {
  return (
    <Link href={url} className={`px-3 py-2 border border-transparent lg:text-black lg:hover:rounded-lg lg:hover:text-black lg:hover:border-black lg:active:bg-black lg:active:text-white lg:focus:border lg:focus:border-black lg:focus:text-black outline-gray-500 lg:target:bg-black lg:target:text-white text-white hover:border-b-2 hover:border-b-white hover:rounded-none ${className}`}>{children}</Link>
  );
}

export default Button