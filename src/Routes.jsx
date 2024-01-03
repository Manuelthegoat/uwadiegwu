import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default Routing