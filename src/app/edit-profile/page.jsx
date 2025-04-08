import EditProfile from '@/component/EditProfile/EditProfile'
import SubNavbar from '@/component/SubNavbar/SubNavbar'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen text-white px-6 pb-22 pt-6">
      <SubNavbar />
      <EditProfile />
    </div>
  )
}

export default Page
