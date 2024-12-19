import clsx from 'clsx'
import React from 'react'

const SectionWrapper = ({children, border = false, split = false} : {children: React.ReactNode, border?: boolean, split?: boolean}) => {
  return (
    <section className={clsx(`lg:px-16 lg:py-16 py-12 px-10`, { ["border-y border-black"] : border, ["lg:grid lg:grid-cols-2 lg:gap-36 flex flex-col items-center"] : split})}>{children}</section>
  )
}

export default SectionWrapper