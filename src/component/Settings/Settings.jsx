'use client'

import { UserPlus, Pencil, Lock, Shield } from 'lucide-react'
import Link from 'next/link'
import { IoIosLogOut } from 'react-icons/io'
import { useGlobalContext } from '../Context'

const Settings = () => {
  const { userData, logoutUser } = useGlobalContext()

  // Grab first letter safely, trim just in case, and capitalise it
  const firstInitial =
    userData?.username?.trim()?.charAt(0)?.toUpperCase() || ''

  const userLinks = [
    { label: 'Edit Profile', icon: <Pencil size={18} />, href: '/edit-profile' },
    { label: 'Change Password', icon: <Lock size={18} />, href: '/forgot-pwd' },
    { label: 'Privacy', icon: <Shield size={18} />, href: '/privacy' },
  ]

  return (
    <div className="min-h-[90vh] text-white pt-10 px-6">
      {/* header */}
      <div className="flex items-center gap-4 mb-8">
        {/* avatar placeholder */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-lg font-bold uppercase">
          {firstInitial}
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Welcome Back, {userData?.username}!
          </h2>
          <p className="text-sm text-gray-400">
            Early access. Fresh sounds. Just for you. Join now to unlock music
            vibes
          </p>
        </div>
      </div>

      {/* links */}
      <div className="space-y-6">
        {userLinks.map(({ label, icon, href }, i) => (
          <Link
            key={i}
            href={href}
            className="flex items-center gap-3 text-white hover:text-gray-300"
          >
            <span>{icon}</span>
            <span className="text-base font-medium">{label}</span>
          </Link>
        ))}
      </div>

      {/* logout */}
      <button
        onClick={logoutUser}
        className="mt-14 flex max-w-[150px] items-center gap-2 text-white hover:underline"
      >
        <IoIosLogOut className="text-[20px]" />
        Logout
      </button>
    </div>
  )
}

export default Settings
