import React from 'react'

export const Skill = ({skil,perc}) => {
    
    const MyStyle = {
        color:'red',
        width:perc,
        background:"red"

    }

  return (
    <div className='skil'>
        <h4>{skil}</h4>
        <div className='progress'>
            
        </div>
    </div>
  )
}
