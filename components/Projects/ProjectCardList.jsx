import React from 'react'
import { ProjectCardListItem } from './ProjectCardListItem'

export const ProjectCardList = ({projects,projectsSelected}) => {
  return (
    <div className='flex flex-wrap justify-center mt-4'>
        {
          projects.map((project,index) => {
            if(projectsSelected == 'All'){
              return(
                <ProjectCardListItem
                  key={index} 
                  project={project}
                />
              )
              
            }

            if(project.type == projectsSelected){
              return(
                <ProjectCardListItem
                  key={index} 
                  project={project}
                />
              )
            }
          })
        }
    </div>
  )
}
