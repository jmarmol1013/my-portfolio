import React from 'react'
import { ProjectTypesListItem } from './ProjectTypesListItem'

export const ProjectTypeList = ({projectTypes,projectsSelected,setProjectSelected}) => {
  return (
    <div className='flex-wrap lg:flex lg:flex-nowrap mt-4 justify-center rounded-3xl mx-[15%] w-[70%] items-center'>
       {
        projectTypes.map((projectType,index) => {
            return(
                <ProjectTypesListItem
                    key={index}
                    projectType={projectType}
                    projectsSelected={projectsSelected}
                    setProjectSelected={setProjectSelected}
                />
            )
        })
       }
    </div>
  )
}
