import React from 'react'
import './Menu.css'
export const Menu = () => {
  return (
    <div id="Menu">
            <div className='container'>
                <div className='MenuClass'>
                    <div className='MenuHeaderLogo'>
                        <img src='' alt='M'/>
                    </div>
                    <div className='closeButton'>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">home</a></li>
                            <li><a href="">about</a></li>
                            <li><a href="">blog</a></li>
                            <li><a href="">portfolio</a></li>
                            <li><a href="">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
  )
}
