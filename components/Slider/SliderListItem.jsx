import React from 'react'
import Image from 'next/image'
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from 'react-icons/bs'

export const SliderListItem = ({banner,index,current,nextSlide,previousSlide}) => {
  return (
    <div className={index === current ? 'opacity-[1] ease-in duration-500 ' : 'opacity-0'}>
    <div className='relative flex justify-center'>
      <BsFillArrowLeftSquareFill className='absolute top-[50%] left-[30px] text-[#736626] cursor-pointer select-none md:w-7 md:h-7 w-5 h-5' onClick={previousSlide}/>
        { index === current && 
          (<Image
            src={banner}
            width={700}
            alt='Banners'
            height='auto'
          />)
        }
      <BsFillArrowRightSquareFill className=' absolute top-[50%] right-[30px] text-[#736626] cursor-pointer select-none md:w-7 md:h-7 w-5 h-5' onClick={nextSlide}/>  
    </div>
  </div>
  )
}