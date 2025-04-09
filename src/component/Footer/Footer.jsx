import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 pb-20 flex flex-col items-center justify-center">
      <div className="w-full bg-[#121212] rounded-2xl p-6 md:p-10 min-h-[40vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start text-white">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/crawl-logo-2.png"
              alt="Logo"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <h2 className="mb-2 font-semibold">About</h2>
            <p className="cursor-pointer text-sm text-gray-300 hover:text-white transition">Privacy Policy</p>
          </div>

          {/* For Artists */}
          <div className="text-center md:text-left">
            <h2 className="mb-2 font-semibold">For Artists</h2>
            <p className="cursor-pointer text-sm text-gray-300 hover:text-white transition">Android</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h2 className="mb-2 font-semibold">Contact Support</h2>
            <p className="cursor-pointer text-sm text-gray-300 hover:text-white transition">iOS</p>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end items-center gap-4 mt-4 md:mt-0">
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
            <FaXTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition" />
            <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
