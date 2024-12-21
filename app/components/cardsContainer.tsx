import React from 'react'
import ImageContainer from './image'

const CardsContainer = ({ list, className = "" }: { list: ICard[], className?: string }) => {
  return (
    <div className={`flex justify-center items-center gap-5 flex-wrap ${className}`}>
      {list.map((item, index) => <ImageContainer key={item.id} image={`https://picsum.photos/200/40${index}`} text={item.title} />)}
    </div>
  )
}

export default CardsContainer