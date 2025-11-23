import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const [isRotating, setIsRotating] = useState(false)

  const handleDownload = () => {
    setIsRotating(true)

    const link = document.createElement('a')
    link.href = '/public/Aditya resume.pdf' // keep this file inside "public" folder
    link.download = 'Adityas Resume'
    link.click()

    // stop animation smoothly
    setTimeout(() => setIsRotating(false), 1500)
  }

  return (
    <div className='h-10 w-full p-2 flex items-center justify-between'>
      <h1 className='font-medium text-2xl tracking-tight'>Aditya Sharma</h1>

      <div className='flex items-center justify-between gap-15 font-light tracking-tight'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Projects</h1>

        <div
          className='px-7 py-3 border border-black-1 rounded-full flex justify-between items-center gap-4 h-12 font-semibold cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={handleDownload}
        >
          <button
            className={`transition-transform duration-700 ease-in-out transform-gpu ${
              isRotating
                ? 'rotate-x-[360deg]'
                : 'hover:rotate-x-[15deg]'
            }`}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            Download CV
          </button>

          <i className='ri-arrow-right-long-fill bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
