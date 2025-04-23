"use client";
import React, { useState } from 'react'
import HeroCover from '@/component/HeroCover/HeroCover'
import LandingPage from '@/component/LandingPage/LandingPage';

const Page = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      {
        clicked ? (
          <div>
            <LandingPage />
          </div>
        ):(
          <div className='flex flex-col justify-center items-center h-screen w-full'>
          <HeroCover setClicked={setClicked} />
          </div>
        )
      }
    </div>
  )
}

export default Page
