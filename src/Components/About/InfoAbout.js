import React from 'react'
import './InfoAbout.css'
import MeImage from './../../assests/Me.png'
export const InfoAbout = () => {
  return (
    <div className='container'>
        <div className='InfoAbout'>
            <div className='imageAbout'>
                <img src={MeImage} alt="Image Not Found" />
            </div>
            <div className='AboutMeText'>
                <h1>I'm Creative <span> web Developer </span> based In Rabat</h1>
                <p>Im' A junior devlopeur passion About bara anad bara and Also bara and so on sof ro </p>
            </div>
            <div className='ButtonCv'>
                <a href='MyResume.pdf' download>Download CV</a>
            </div>
        </div>
    </div>
  )
}
