'use client'

import { UserPlus, Pencil, Lock, Shield } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosLogOut } from "react-icons/io";
import { useGlobalContext } from '../Context';

const Settings = () => {
const {userData, logoutUser} = useGlobalContext()
  const guestLinks = [
    { label: 'Sign in / Register', icon: <UserPlus size={18} />, href: '/auth' },
  ]

  const userLinks = [
    { label: 'Edit Profile', icon: <Pencil size={18} />, href: '/edit-profile' },
    { label: 'Change Password', icon: <Lock size={18} />, href: '/forgot-pwd' },
    { label: 'Privacy', icon: <Shield size={18} />, href: '/privacy' },
  ]

  return (
    <div className="min-h-[90vh] text-white pt-10 px-6">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src='/bottom-icon-2.png'
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
          style={{ objectFit: "cover" }}
        />
        <div>
          <h2 className="text-xl font-semibold">
            Welcome Back, {userData.username}!
          </h2>
          <p className="text-sm text-gray-400">
              Early access. Fresh sounds. Just for you.
              Join now to unlock music vibes
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {userLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-3 text-white hover:text-gray-300"
          >
            <span>{item.icon}</span>
            <span className="text-base font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className='flex items-center hover:underline gap-2 cursor-pointer max-w-[150px] max-auto mt-13'
      onClick={logoutUser}>
        <IoIosLogOut className="text-white text-shadow-black text-[20px]" />
        <button className="text-white text-center md:text-left">Logout</button>
      </div>
    </div>
  )
}


export default Settings
