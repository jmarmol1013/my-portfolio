import React,{useState} from 'react'
import {GiCancel} from 'react-icons/gi'
import { SliderListItem } from '../Slider/SliderListItem';
import {AiOutlineLink,AiFillGithub} from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

export const Modal = ({project,modalIsOpen,setModalIsOpen}) => {
  const length = project.img.length;
  const [current,setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1 );
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1);
  }

  const slider = length > 1

  return (
    <div className={`fixed inset-0  text-left flex-row text-white bg-primary align-middle rounded-md ml-[10%] lg:ml-[30%] mt-[5%] w-[80%] lg:w-[40%] h-[80%] transition-opacity duration-500 ease-in-out ${modalIsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <GiCancel className='absolute right-0 top-0 z-30 text-[#736626] mr-4 mt-4 hover:cursor-pointer' size={24} onClick={() => setModalIsOpen(false)}/>
      {
        slider ?
          project.img.map((banner,index) => {   
            return (
                <SliderListItem 
                    key={index}
                    index={index}
                    current={current}
                    banner={banner}
                    nextSlide={nextSlide}
                    previousSlide={previousSlide}
                />
            )
          })
        :
          <Image
          src={project.img[0]}
          width={700}
          alt='Banners'
          height='auto'
          />
      }
      <div className='pt-4 px-4 text-white '>
        <h4 className='text-2xl font-bold'>{project.title}</h4>
        <p>{project.description} </p>
      </div>
      {
        project.linkGithub ?
        <div className='flex absolute justify-end items-end align-bottom mr-4 right-40 bottom-0 mb-4'>
          <Link href={project.linkGithub} target='_blank'>
            <button className='flex items-center border-2 border-[#736626] py-3 px-2 rounded-md text-[#736626] hover:bg-[#736626] hover:text-primary'>
              <AiFillGithub size={22} className='mr-2'/>
              <p>View GitHub</p>
            </button>
          </Link>
        </div>
        :
        null
      }
      {
        project.linkProject ?
        <Link href={project.linkProject} target='_blank'>
          <div className='flex absolute justify-end items-end align-bottom mr-4 right-0 bottom-0 mb-4'>
              <button className='flex items-center border-2 border-[#736626] py-3 px-2 rounded-md text-[#736626] hover:bg-[#736626] hover:text-primary'>
                <AiOutlineLink size={22} className='mr-2'/>
                <p>View Project</p>
              </button>
          </div>
        </Link>
        :
        null
      }
      
    </div>
  )
}
