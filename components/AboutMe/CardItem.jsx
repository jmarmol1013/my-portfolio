import React from 'react'

export const CardItem = ({cardInfo}) => {
  return (
    <div className="flex-col justify-center card w-[80%] md:w-[40%] lg:w-[20%] mx-10 mb-10 h-64">
        <cardInfo.icon size={56}/>
        <p className='pt-4'>{cardInfo.title}</p>
    </div>
  )
}
