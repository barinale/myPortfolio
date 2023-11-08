import React, { useState } from 'react'
import { Menu } from './Menu'
import './Header.css'
export const Header = () => {
  const [showMenu,SetShwoMenu] = useState(false)

    const MenuShowButton = ()=>{
        SetShwoMenu(!showMenu)
      }
  return (
    <header id="header">
          <nav className='container'>
            <ul>
                <li><img src='' /></li>
                <li>
                    <button className='navMenuButton' 
                            onClick={MenuShowButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </li>
            </ul>
          </nav>
        <Menu show={showMenu} MenuClicking={MenuShowButton} />
  </header>
  )
}
