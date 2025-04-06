"use client"
import React from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '../Context';

const Navbar = () => {
  const {route} = useGlobalContext();
  const pathName = usePathname();
 const isHomepage = pathName === "/";
 const isDiscover = pathName === "/discover";
  return (
    <nav className={` ${isHomepage? "hidden":"flex"} pl-3 pr-3 md:pl-6 md:pr-6 py-3 flex items-center justify-between w-full`}>
      {/* Logo */}
      <Image
        src="/crawl-logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="cursor-pointer"
      />

      <div className='flex items-center gap-10'>
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-base font-medium">
          <li className="cursor-pointer hover:text-gray-600" onClick={()=>route.push("/discover")}>iOS</li>
          <li className="cursor-pointer hover:text-gray-600">Android</li>
          <li className="cursor-pointer hover:text-gray-600">Support</li>
        </ul>

        {/* Profile Section */}
        <div className={`${isDiscover? "hidden": "flex"} items-center gap-2`}>
          <Image
            src="/crawl-user.png"
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
    </nav>
  );
};

export default Navbar;
