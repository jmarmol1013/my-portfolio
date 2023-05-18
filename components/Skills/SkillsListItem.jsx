import React from 'react'

const SkillsListItem = ({Icon}) => {
  return (
    <div className="diamond m-8 border border-primary bg-primary">
        <div className="icon-container absolute inset-0 flex items-center justify-center pb-1">
            <Icon className="text-white transform -rotate-45" size={50}/>
        </div>
    </div>
  )
}

export default SkillsListItem