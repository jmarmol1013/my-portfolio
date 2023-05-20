import React,{useState} from 'react'
import Image from 'next/image'
import { Modal } from '../Modal/Modal'

export const ProjectCardListItem = ({project}) => {
  const [modalIsOpen,setModalIsOpen] = useState(false)

  return (
    <>
    <div className='w[80%] md:w-[40%] lg:w-[20%] flex-row text-left rounded-t-md mx-6 mt-4'>
      <Image 
          src={project.img[0]}
          width='full'
          height='full'
          alt={project.alt}
          className='rounded-t-md'
      />
      <h3 className='text-2xl my-2 text-primary'>{project.title}</h3>
      <hr className=' border-2 border-[#736626]'></hr>
      <p className='mt-2'>{project.description}</p>
      <button className='w-[40%] ml-[60%] py-3 px-2 mt-2 border-2 rounded-md border-primary text-primary hover:bg-primary hover:border-white hover:text-white' onClick={() => setModalIsOpen(true)}>
        <p>View Details</p>
      </button>
    </div>
    {
      modalIsOpen ?
        <Modal 
          project={project}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      :
      null
    }
    </>
  )
}
