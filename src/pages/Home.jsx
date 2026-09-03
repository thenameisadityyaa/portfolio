import React from 'react'
import Navbar from '../components/Navbar'
import HeroText from '../components/HeroText'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-between object-contain bg-no-repeat h-screen w-full px-10 py-5'>
        <HeroText />

      </div>
      <hr className='m-5 border-dotted  border-1 text-black' />

      <div className='bg-green-600 h-screen w-full bg-[url(https://images.unsplash.com/photo-1524481905007-ea072534b820?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-position-[center_top_-13rem]'></div>
      <Footer />
    </div>
  )
}

export default Home