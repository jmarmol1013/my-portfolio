import React,{useState} from 'react'
import { ProjectTypeList } from './ProjectTypeList';
import listifyLogo from '../../public/listifyLogo.jpg'
import { ProjectCardList } from './ProjectCardList';

export const ProjectsSection = () => {
  const [projectsSelected,setProjectSelected] = useState('All');
  const projectTypes = ['All','Web Development','Data Analyst','Software Requirements','UI/UX Designs'];
  const projectsSmallDescription = [{
    img:listifyLogo,
    alt:'Listify Logo',
    title:'Listify Web App',
    description:'This application revolves around Firebase authentication, enabling each user to create, read, edit,delete their own notes categorized by type and category. The application is developed using Next.js, Express.js, Node.js, MongoDB, and Tailwind CSS',
    type:'Web Development'
  }];

  return (
    <div className='flex-row my-6 justify-center text-center' id='projects'>
        <h2 className='text-[#041E40] text-4xl'>My projects</h2>
        <ProjectTypeList 
            projectsSelected={projectsSelected}
            projectTypes={projectTypes}
            setProjectSelected={setProjectSelected}
        /> 
        <ProjectCardList
          projects={projectsSmallDescription}
          projectsSelected={projectsSelected}
        />
    </div>
  )
}
