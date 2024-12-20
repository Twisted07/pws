
import React from 'react'
import {clsx} from 'clsx'

type TImageContainer = {
  image: string
  wide?: boolean
  className?: string
  text?: string
}

const ImageContainer = ({image, wide = false, className = "", text} : TImageContainer) => {
  return (
    <div>
      {/* <div className={clsx(`w-[18rem] h-[20rem] border-2 border-black rounded-lg ${className}`, wide && 'xl:w-[35rem] xl:h-[25rem] lg:w-[27rem] lg:h-[20rem] w-[20rem] h-[15rem]')} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      {text && <p className='text-center mt-1 lg:mt-3'>{text}</p>} */}
      <div className={clsx(`w-[18rem] h-[20rem] border-2 border-black rounded-lg ${className}`, wide && 'w-full h-[10rem] md:h-[25rem]')} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      {text && <p className='text-center mt-1 lg:mt-3'>{text}</p>}
    </div>
  )
}


export default ImageContainer