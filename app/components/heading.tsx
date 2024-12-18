import React from 'react'


const Heading = ({children, centered = false} : {children : React.ReactNode, centered?: boolean}) => {
return (
    <h1 className={`text-5xl font-bold leading-snug ${centered && "text-center"}`}>{children}</h1>
  )
}

export default Heading