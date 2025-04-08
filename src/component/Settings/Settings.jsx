'use client'

import { UserPlus, Pencil, Lock, Shield } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../Lib/UseAuth';

const Settings = () => {
  const { user } = useAuth()

  const guestLinks = [
    { label: 'Sign in / Register', icon: <UserPlus size={18} />, href: '/auth' },
  ]

  const userLinks = [
    { label: 'Edit Profile', icon: <Pencil size={18} />, href: '/edit-profile' },
    { label: 'Change Password', icon: <Lock size={18} />, href: '/change-password' },
    { label: 'Privacy', icon: <Shield size={18} />, href: '/privacy' },
  ]

  return (
    <div className="min-h-[90vh] text-white pt-10 px-6">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src={user?.avatar || '/default-avatar.png'}
          alt="Profile"
          width={30}
          height={30}
          className="rounded-full"
          style={{ objectFit: "cover" }}
        />
        <div>
          <h2 className="text-xl font-semibold">
            {user?.isLoggedIn ? `Welcome Back, ${user.name}!` : `Welcome!`}
          </h2>
          <p className="text-sm text-gray-400">
            {user?.isLoggedIn
              ? 'Early access. Fresh sounds. Just for you.'
              : 'Join now to unlock music vibes.'}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {(user?.isLoggedIn ? userLinks : guestLinks).map((item, index) => (
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
      <div className='flex px-4 items-center hover:underline gap-2 cursor-pointer max-w-[150px] max-auto mt-13'>
        <IoIosLogOut className="text-white text-shadow-black text-[20px]" />
        <button className="text-white text-center md:text-left">Logout</button>
      </div>
    </div>
  )
}


export default Settings
