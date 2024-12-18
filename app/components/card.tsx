import React from 'react'

export interface ITestimonial {
  name: string
  image: string
  content: string
}

const Card = ({name, image, content} : ITestimonial) => {
  return (
    <div className='border border-black rounded-lg py-10 px-5 w-[17rem]'>
      <div className='flex justify-start items-center gap-5'>
        {/* <Image src={image} alt={name} width={30} height={30} className='w-10 h-10 rounded-full border border-black' /> */}
        <div className='w-16 h-16 rounded-full border border-black' style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
        <div className='space-y-1'>
          <h2>{name}</h2>
          <p>Program beneficiary</p>
        </div>
      </div>

      <p className='mt-7 tracking-normal lg:tracking-wide leading-relaxed'>{content}</p>
    </div>
  )
}

export default Card