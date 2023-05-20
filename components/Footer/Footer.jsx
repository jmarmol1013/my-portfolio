import React from 'react'
import Link from 'next/link'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 items-center text-center">
    <div className='flex justify-center'>
        <Link href='https://github.com/jmarmol1013' target='_blank'>
            <button className='border-2 border-white p-2 text-white hover:bg-white hover:text-primary mr-2 rounded-md'>
                <AiFillGithub size={24}/>
            </button>
        </Link>
        <Link href='https://www.linkedin.com/in/juan-camilo-marmolejo-58b02224b/' target='_blank'>
        <button className='border-2 border-white p-2 text-white hover:bg-white hover:text-primaryml-2 rounded-md'>
            <AiFillLinkedin size={24}/>
        </button>
    </Link>
    </div>
    <p className='mt-2'><i>2023 &copy; Juan Camilo Marmolejo</i></p>
</footer>
  )
}
