import React, { useRef } from 'react'
import './Menu.css'
export const Menu = () => {
    const Menu = useRef()
    const handHover = (e)=>{
        Menu.current.setAttribute('data-test-id',e.target.innerText)
        Menu.current.classList.add('hover');
    }
    const handLeave= ()=>{
        Menu.current.setAttribute('data-test-id',"")
        Menu.current.classList.remove('hover');

    }

  return (
    <div id="Menu" ref={Menu} data-test-id="">
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
                            <li><a href="" onMouseOver={handHover} onMouseLeave={handLeave} data-test-id="">home</a></li>
                            <li><a href="" onMouseOver={handHover} onMouseLeave={handLeave}>about</a></li>
                            <li><a href="" onMouseOver={handHover} onMouseLeave={handLeave}>blog</a></li>
                            <li><a href="" onMouseOver={handHover} onMouseLeave={handLeave}>portfolio</a></li>
                            <li><a href="" onMouseOver={handHover} onMouseLeave={handLeave}>contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
  )
}
