import React from 'react'
import Image from 'next/image'
import myPhoto from '../../public/myPhoto.jpeg'
import Link from 'next/link'
import { CardList } from './CardList'
import {MdWeb} from 'react-icons/md'
import {AiFillMobile,AiFillFile} from 'react-icons/ai'
import {BsFillClipboardDataFill} from 'react-icons/bs'
import {SiSpeedtest} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'

export const AboutMeSection = () => {

  const cardsInfo = [{
    icon: MdWeb,
    title:'Full-Stack Developer'
  },{
    icon:AiFillMobile,
    title:'Mobile App Developer'
  },{
    icon:BsFillClipboardDataFill,
    title:'Data Analyst'
  },{
    icon:SiSpeedtest,
    title:'Quality Assurance Developer'
  },{
    icon:FiFigma,
    title:'UI/UX Designer'
  }]

  return (
    <div className='mt-6 items-center justify-center' id='about'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center '>
            <div className='flex justify-center lg:mr-5 lg:w-[20%] lg:ml-[10%] lg:justify-end'>
                <Image
                    src={myPhoto}
                    alt="Photo of me"
                    width={220}
                    height={200}
                    loading='lazy'
                    className=' rounded-[50%]'
                />
            </div>
            <div className='flex-row w-[90%] mx-[5%] text-center lg:text-left lg:ml-5  lg:w-[40%] lg:mr-[10%]  lg:justify-start'>
                <h2 className='text-[#041E40] text-4xl mb-2'>My, Myself & I</h2>
                <p>I am a passionate software engineering technology student at Centennial College at Toronto, Canada. With a strong enthusiasm for coding, I constantly strive to expand my knowledge and skills in the field. I am dedicated to creating efficient and innovative solutions, leveraging my expertise in various programming languages and technologies. My portfolio showcases a diverse range of projects that demonstrate my ability to tackle real-world challenges and deliver high-quality results.</p>
                <Link href="https://drive.google.com/file/d/1uzW_1nCiBCmeA2IOUXkbgbBvysDV6kHJ/view?usp=sharing" target='_blank'>
                  <div className='flex items-center text-center justify-center mt-2 text-[#736626]'>
                    <p>My resume</p>
                    <AiFillFile size={20}/>
                  </div>
                </Link>
            </div>
        </div>
        <div className='flex flex-wrap justify-center align-middle items-center mt-10'>
            <CardList 
                cardsInfo={cardsInfo}
            />
        </div>
    </div>
    
  )
}
