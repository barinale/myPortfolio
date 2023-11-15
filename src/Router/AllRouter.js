import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Pages/Main'
import { About } from '../Pages/About'
import { Portfolio } from '../Pages/Portfolio'

export const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>

        </Routes>
    </div>
  )
}
