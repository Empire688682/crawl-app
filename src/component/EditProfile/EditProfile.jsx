'use client'

import Image from 'next/image'
import {useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useGlobalContext } from '../Context';

const EditProfile = () => {
  const {userData, logoutUser} = useGlobalContext();
  const [image, setImage] = useState("");
  return (
    <div className="pb-10">
      <div className="min-h-[40vh] text-white flex flex-col items-center pt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      <div className="relative">
        <Image
          src={image? window.URL.createObjectURL(image):"/bottom-icon-2.png"}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <label htmlFor="img">
        <IoCameraOutline className="absolute bottom-3 right-3 cursor-pointer text-white text-shadow-black text-[30px]" />
        </label>
      </div>

      <input type="file" onChange={(e)=>setImage(e.target.files[0])} name="img" id="img" hidden />

      <div className="w-full max-w-md mt-10 space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 outline-none rounded bg-gray-800 text-white border border-gray-600"
            value={`${userData?.first_name} ${userData?.last_name}`}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 outline-none rounded bg-gray-800 text-white border border-gray-600"
            value={userData?.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            className="w-full px-4 py-2 outline-none rounded bg-gray-800 text-white border border-gray-600"
            value={userData?.email}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      </div>

      <div className='flex px-4 items-center hover:underline gap-2 cursor-pointer max-w-[150px] max-auto mt-13'
      onClick={logoutUser}>
      <IoIosLogOut className="text-white text-shadow-black text-[20px]" />
      <button className="text-white text-center md:text-left">Logout</button>
      </div>
    </div>
  )
}

export default EditProfile
