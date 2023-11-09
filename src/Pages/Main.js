import React, { useState } from 'react'
import './Main.css'
import { Header } from '../Components/header/Header'
import { Info } from '../Components/header/Info'
import { SocialMedia } from '../Components/header/SocialMedia'
export const Main = () => {
  
 

  return (
    <div id="MainSection">
        <Header />
        <Info />
        <SocialMedia />
    </div>
  )
}
