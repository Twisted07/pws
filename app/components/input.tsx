import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const Input = ({type, placeholder, className, ...props} : DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input type={type} placeholder={placeholder} className={`border rounded-md text-sm md:text-md w-full py-1 px-2 text-md ${className}`} {...props} />
  )
}

export default Input