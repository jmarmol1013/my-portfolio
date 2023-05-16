import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { NavBarList } from './NavBarList';

export const NavBar = () => {
    const [isExpanded, toggleExpansion] = useState(false);

    const closeNav = () => {
        toggleExpansion(false);
    }

    const items = [{
        title:'Home',
        link:'start',
    },{
        title:'About me',
        link:'about',
    },{
        title:'Skills',
        link:'skills',
    },{
        title:'Projects',
        link:'projects'
    },{
        title:'Contact',
        link:'contacts',
    }];

    return (
        <nav id='nav' className='flex items-center justify-between flex-wrap text-[#FFFFFF] bg-[#79AEF2] w-full'>
            <div className="flex text-end justify-end mr-4 lg:hidden w-[15%] ml-[80%]">
                <button className=" justify-end my-6 px-3 py-2 border rounded text-white border-white hover:border-fourth" 
                onClick={() => toggleExpansion(!isExpanded) } >
                <RxHamburgerMenu className='h-4'/>
                </button>
            </div>
            <div className={`${
                        isExpanded ? `block text-left` : `hidden text-right`
                    } w-full flex-grow lg:flex lg:items-center lg:w-auto my-6 text-2xl`}>
                    <NavBarList 
                        items={items}
                        closeNav={closeNav}
                    />
            </div>
        </nav>
    )
}