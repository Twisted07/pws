import React from 'react'


const Heading = ({children, centered = false} : {children : React.ReactNode, centered?: boolean}) => {
return (
    <h1 className={`xl:text-5xl xl:mb-10 lg:mb-5 mb-3 text-3xl font-semibold leading-tight lg:font-bold lg:leading-snug ${centered && "text-center"}`}>{children}</h1>
  )
}

export default Heading