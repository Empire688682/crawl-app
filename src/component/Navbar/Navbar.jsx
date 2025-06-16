"use client"
import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '../Context';

const Navbar = () => {
  const { router } = useGlobalContext();
  const pathName = usePathname();
  const isLandingPage = pathName === "/landing-page";
  return (
    <nav>
      <div className={` ${isLandingPage ? "flex" : "hidden"} flex items-center pl-3 pr-3 md:pl-6 md:pr-6 py-3 justify-between w-full`}>
        {/* Logo */}
        <Image
          src="/crawl-logo-2.png"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />

        <div className='flex items-center gap-10'>
          <ul className="hidden md:flex items-center gap-10 text-base font-medium">
            <li className="cursor-pointer hover:text-gray-600" onClick={() => router.push("/discover")}>iOS</li>
            <li className="cursor-pointer hover:text-gray-600">Android</li>
            <li className="cursor-pointer hover:text-gray-600">Support</li>
          </ul>

          {/* Profile Section */}
          <div className={`flex items-center gap-2`} onClick={() => router.push("/edit-profile")}>
            <Image
              src="/profile-img.png"
              alt="User Profile"
              width={50}
              height={50}
              className='mt-3 cursor-pointer'
            />
            <p className="flex items-center gap-1 text-base font-medium">
              Profile
              <MdOutlineKeyboardArrowDown className="text-2xl cursor-pointer hover:text-gray-600 lg" />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
