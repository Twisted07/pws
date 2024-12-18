import React from 'react'
import Button, { NavButton } from './components/button'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-16 py-5'>
      <h1>Logo</h1>
      <div className='flex justify-center gap-3 items-center font-semibold text-md'>
        <NavButton url={"/"}>Home</NavButton>
        <NavButton url={"/about-us"}>About us</NavButton>
        <NavButton url={"/our-programs"}>Our programs</NavButton>
        <NavButton url={"/our-schedule"}>Our schedule</NavButton>
        <NavButton url='/contact-us'>Contact us</NavButton>
      </div>
      <Button type='transparent'>Donate</Button>
    </header>
  )
}

export default Header