import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const HeroText = () => {
  return (
    <div className='flex justify-between h-100 w-full lg:mt-65'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default HeroText