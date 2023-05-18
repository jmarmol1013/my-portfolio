import React from 'react'
import SkillsListItem from './SkillsListItem'

export const SkillsList = ({icons}) => {
  return (
    <div className='mx-2 py-6  flex flex-wrap justify-center'>
        {
            icons.map((icon,index) => {
                return(
                    <SkillsListItem 
                        key={index}
                        Icon={icon}
                    />
                )
            })
        }
    </div>
  )
}
