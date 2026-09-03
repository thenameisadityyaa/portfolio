import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter>
    <div className='flex flex-col justify-between object-contain bg-no-repeat min-h-screen w-full px-10 py-5'>
      <Navbar />
      <Routes>
        <Route element={<Layout/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </div>
      
    
    </BrowserRouter>
  )
}

export default App