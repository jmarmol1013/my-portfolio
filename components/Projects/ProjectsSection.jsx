import React,{useState} from 'react'
import { ProjectTypeList } from './ProjectTypeList';
import { ProjectCardList } from './ProjectCardList';
import listifyLogo from '../../public/ListifyLogo.jpg'
import arboledaLogo from '../../public/ArboledaLogo.png'
import crmLogo from '../../public/crmLogo.jpg'
import IMSLogo from '../../public/IMSLogo.jpg'
import collegeNetworkLogo from '../../public/CollegeNetworkLogo.jpg'
import lakeSideLogo from '../../public/LakeSideLogo.jpg'
import listifyPhoto from '../../public/ListifyPhoto.jpg'
import IMSPhoto from '../../public/IMSPhoto.jpg'
import arboledaPhoto from '../../public/ArboledaPhoto.jpg'
import hotelPhoto from '../../public/HotelPhoto.png'

export const ProjectsSection = () => {
  const [projectsSelected,setProjectSelected] = useState('All');
  const projectTypes = ['All','Web Development','Data Scientist','Software Requirements','UI/UX Designs'];

  const projectsSmallDescription = [{
    img:[listifyLogo,listifyPhoto],
    alt:'Listify Logo',
    title:'Listify Web App',
    description:'This application revolves around Firebase authentication, enabling each user to create, read, edit,delete their own notes categorized by type and category. The application is developed using Next.js, Express.js, Node.js, MongoDB, and Tailwind CSS.',
    type:'Web Development',
    linkProject:'https://to-do-list-client.vercel.app/LogIn',
    linkGithub:'https://github.com/jmarmol1013/ToDoList-Client'
  },{
    img:[arboledaLogo,arboledaPhoto],
    alt:'Arboleda Logo',
    title:'Arboleda Web App',
    description:'Developed and designed a landing page for a lumber yard company based in Colombia. Ensured the landing page was optimized for performance, loading speed, and search engine visibility.The application is developed using Next.js and Tailwind CSS.',
    type:'Web Development',
    linkProject:'https://abroledas-web-page-bfd5uzlqk-jmarmol1013.vercel.app/'
  },{
    img:[crmLogo],
    alt:'CRM Logo',
    title:'1Tel Comunnication CRM',
    description:'Developed a CRM solution for 1Tel communication. Leveraging Zoho software, I successfully implemented a robust system that allows for efficient data visualization, seamless data import and export capabilities, and streamlined automation processes.',
    type:'Data Scientist'
  },{
    img:[IMSLogo,IMSPhoto],
    alt:'IMS Logo',
    title:'IMS Project',
    description:'Team project to create an inventory management system of a shoe store. Developed an ERM diagram, created tables, function, sequences, procedures, triggers, cursors and work with JavaFX and Java for front-end to create a Full-Stack application.',
    type:'Data Scientist',
    linkProject:'https://docs.google.com/document/d/1Ln2q_TX83XRQMc6O8tRdvDZruTTzkcdS/edit',
    linkGithub:'https://github.com/jmarmol1013/ShoeStoreInventory'
  },{
    img:[collegeNetworkLogo],
    alt:'College Network Logo',
    title:'College Network Project',
    description:'Team project to created the documentation for the app called College Network. We worked together to gather and define the requirements, crafted use cases, and developed all necessary diagrams, including class diagrams and design patterns.',
    type:'Software Requirements',
    linkProject:'https://docs.google.com/document/d/1TT_5gCEUzpm32Y4YNbVpJVm8hdhOcFuj/edit?rtpof=true'
  },{
    img:[lakeSideLogo,hotelPhoto],
    alt:'Lakeside hotel Logo',
    title:'Design for luxury hotel',
    description:"I designed a captivating UI/UX for a luxury hotel's web page, including login, home, rooms, and booking pages. The design balances elegance with user-friendliness, creating an immersive experience for the booking process and engages users effectively.",
    type:'UI/UX Designs',
    linkProject:'https://www.figma.com/file/L7ZSBfqWAgWoCtp7cs9w4G/Reservation-Web?type=design&node-id=0%3A1&t=MhwPEZglHBfOzI0I-1'
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
