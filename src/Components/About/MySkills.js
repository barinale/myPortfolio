import React, { useState } from 'react'
import { Skill } from './Skill'
import './skill.css'
export const MySkills = () => {
  const [skills , setSkills] =useState([
    {skil:'Html / css',perc:'90%'},
    {skil:'Javascript',perc:'90%'},
    {skil:'responsive Design',perc:'90%'},
    {skil:'React js',perc:'70%'},
    {skil:'php',perc:'90%'},
    {skil:'Laravel',perc:'90%'},
  
  ])
  return (
    <div className='container'>
      <div className='skills'>
        <h1>My <span>Skills</span></h1>
      </div>

    {skills.map((item)=>{
      return  <Skill skil={item.skil} perc={item.perc} />

    })}



    </div>
  )
}
