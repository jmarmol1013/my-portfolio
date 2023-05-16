import { Link } from 'react-scroll';
import React from 'react'

export const NavBarListItem = ({item,closeNav}) => {
  return (
    <Link 
      activeClass="active"
      to={item.link}
      spy={true}
      smooth={true}
      duration={500}
      className='block hover:text-fourth lg:inline-block lg:my-0  mr-4 text-2xl hover:cursor-pointer hover:font-bold'
      onClick={closeNav} 
    >
        <p className='text-base'>{item.title}</p>
    </Link>
  )
}
