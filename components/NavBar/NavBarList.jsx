import Link from 'next/link'
import React from 'react'
import { NavBarListItem } from './NavBarListItem'

export const NavBarList = ({items,closeNav,}) => {
  return (
    <div className="lg:flex-grow flex-row justify-start items-center lg:flex lg:justify-center ml-4">
        <div className='divide-y-2 lg:divide-y-0'>
            { items ? 
                items.map((item,index) => 
                    <NavBarListItem 
                        key={index}
                        item={item}
                        closeNav={closeNav}
                    />)
                :
                null
            }
        </div>
    </div>
    
  )
}
