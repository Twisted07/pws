"use client";

import React, { useState } from 'react'
import Button, { NavButton } from './components/button'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className={`bg-black border rounded-full border-black p-3 inline-block fixed top-3 right-7 lg:hidden ${isOpen && ("hidden")}`} onClick={toggleOpen}>
        <IoMenu width={30} height={30} color='white' />
      </button>

      <header className='flex justify-between items-center px-8 lg:px-16 py-5'>
        <h1>Logo</h1>
        <div className={`flex flex-col h-[100dvh] w-full fixed top-0 right-0 lg:relative lg:h-auto lg:w-auto lg:bg-transparent bg-stone-700 bg-opacity-95 backdrop-blur-sm justify-center gap-3 items-center font-semibold text-md z-100 ${!isOpen && ("hidden")} lg:flex-row lg:flex`}>
          <button className='w-10 h-10 text-white absolute top-5 left-7 z-200 lg:hidden' onClick={toggleOpen}>
            <IoCloseSharp className='w-full h-full text-white' />
          </button>
          <NavButton url={"/"}>Home</NavButton>
          <NavButton url={"/about-us"}>About us</NavButton>
          <NavButton url={"/our-programs"}>Our programs</NavButton>
          <NavButton url={"/our-schedule"}>Our schedule</NavButton>
          <NavButton url='/contact-us'>Contact us</NavButton>
          <NavButton url='/donate' className='lg:hidden'>Donate</NavButton>
          
        </div>
        <Button type='transparent' className='hidden lg:block'>Donate</Button>
      </header>
    </>
  )
}

export default Header