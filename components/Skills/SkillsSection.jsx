import React from 'react'
import {SiNextdotjs,SiNodedotjs,SiExpress,SiMongodb,SiJavascript,SiCsharp,SiKotlin,SiPython,SiOracle,SiMysql,SiFigma,SiTailwindcss,SiFirebase} from 'react-icons/si'
import { SkillsList} from './SkillsList'
import {DiReact,DiJava} from 'react-icons/di'


export const SkillsSection = () => {

  const skils = [DiReact,SiNextdotjs,SiNodedotjs,SiExpress,SiMongodb,SiTailwindcss,DiJava,SiKotlin,SiCsharp,SiPython,SiOracle,SiMysql,SiFirebase,SiFigma]

  return (
    <div className='flex-col justify-center text-center mt-6 bg-secondary pt-4' id='skills'>
        <h2 className='text-[#041E40] text-4xl'>My skills</h2>
        <SkillsList icons={skils} />
    </div>
  )
}
