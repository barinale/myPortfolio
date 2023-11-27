import React from 'react'
import { Skill } from './Skill'
import './skill.css'
export const MySkills = () => {
  const skills =[
    {id:1,skil:'Html / css',perc:'90%'},
    {id:2,skil:'Javascript',perc:'90%'},
    {id:3,skil:'responsive Design',perc:'90%'},
    {id:4,skil:'React js',perc:'70%'},
    {id:5,skil:'php',perc:'90%'},
    {id:6,skil:'Laravel',perc:'90%'},
    {id:7,skil:'My Sql',perc:'90%'},
    {id:8,skil:'Photoshop',perc:'60%'},
    {id:9,skil:'Git ',perc:'80%'},

  
  ]
  return (
    <div className='container'>
      <div className='skills'>
        <div className='HeaderSkills'>
          <h1>My <span>Skills</span></h1>
        </div>
        <div className='ItemSkills'>
                {skills.map((item)=>{
                  return  <Skill key={item.id} skil={item.skil} perc={item.perc} />

                })}
        </div>
      </div>



    </div>
  )
}
