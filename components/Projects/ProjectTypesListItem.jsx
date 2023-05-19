import React from 'react'

export const ProjectTypesListItem = ({projectType,projectsSelected,setProjectSelected}) => {
  return (
    <p className={`w-full lg:w-1/5 py-3 hover:cursor-pointer 
                    ${projectsSelected == projectType ? `bg-primary rounded-full text-[white] px-2`:``}`}
                onClick={() => setProjectSelected(projectType)}
    >
                        {projectType}
    </p>
  )
}
