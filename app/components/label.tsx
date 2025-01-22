import React, { DetailedHTMLProps, LabelHTMLAttributes } from 'react'

const Label = ({htmlFor, className, content, ...props} : DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => {
  return (
    <label htmlFor={htmlFor} className={`md:mb-2 mb-1 text-sm md:text-md block text-md ${className}`} {...props}>{content}</label>
  )
}

export default Label