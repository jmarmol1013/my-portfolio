import React from 'react'
import { Atom } from './Atom'
import { Form } from './Form'

export const ContactSection = () => {
  return (
    <div className='bg-secondary justify-center text-center pb-4' id='contact'>
         <h2 className='text-[#041E40] text-4xl  pt-4'>Contact Me</h2>
         <div className='flex flex-wrap lg:flex-nowrap items-center'>
            <div  className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:ml-24'>
              <Form /> 
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10 mt-4 lg:mt-0'>
              <Atom />
            </div>
            
         </div>
    </div>
  )
}
