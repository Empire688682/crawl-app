import Settings from '@/component/Settings/Settings'
import SubNavbar from '@/component/SubNavbar/SubNavbar'
import React from 'react'

const Page = () => {
  return (
    <div className='pl-3 pr-3 md:pl-6 md:pr-6 py-3'>
      <SubNavbar />
      <Settings />
    </div>
  )
}

export default Page
