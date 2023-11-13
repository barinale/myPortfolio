import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Pages/Main'
import { About } from '../Pages/About'

export const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>

        </Routes>
    </div>
  )
}
