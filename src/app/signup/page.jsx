"use client";
import AuthForms from '@/component/AuthForms/AuthForms'
import { useGlobalContext } from '@/component/Context';
import React, { useEffect } from 'react'

const Page = () => {
    const {userData, router} =useGlobalContext();
    useEffect(()=>{
      console.log("userData:", userData)
        if(userData?.token && userData?.username){
            router.replace("/library")
        }
    }, [userData]);
    
  return (
    <div className='pl-3 pr-3 md:pl-6 bg-black md:pr-6 py-3'>
      <AuthForms />
    </div>
  )
}

export default Page
