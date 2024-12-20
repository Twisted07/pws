import clsx from 'clsx'
import React from 'react'

const SectionWrapper = ({children, border = false, split = false,} : {children: React.ReactNode, border?: boolean, split?: boolean}) => {
  return (
    <section className={clsx(`xl:px-16 xl:py-12 md:px-12 md:py-10 py-8 px-10`, { ["border-y border-black"] : border, ["lg:grid-cols-2 lg:gap-16 xl:gap-24 grid items-center"] : split})}>{children}</section>
  )
}

export default SectionWrapper