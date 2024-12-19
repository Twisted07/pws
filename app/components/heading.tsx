import React from 'react'


const Heading = ({children, centered = false} : {children : React.ReactNode, centered?: boolean}) => {
return (
    <h1 className={`lg:text-5xl lg:mb-10 mb-5 text-3xl font-semibold leading-tight lg:font-bold lg:leading-snug ${centered && "text-center"}`}>{children}</h1>
  )
}

export default Heading