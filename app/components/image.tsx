import React from 'react'

const ImageContainer = ({image} : {image: string}) => {
  return (
    <div className='w-[18rem] h-[20rem] border-2 border-black rounded-lg' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
  )
}

export default ImageContainer