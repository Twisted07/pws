import { StaticImageData } from 'next/image'
import React from 'react'
import {clsx} from 'clsx'

type TImageContainer = {
  image: string
  wide?: boolean
  className?: string
}

const ImageContainer = ({image, wide = false, className} : TImageContainer) => {
  return (
    <div className={clsx(`w-[18rem] h-[20rem] border-2 border-black rounded-lg ${className}`, wide && 'lg:w-[35rem] lg:h-[25rem] w-[20rem] h-[15rem]')} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
  )
}


export default ImageContainer