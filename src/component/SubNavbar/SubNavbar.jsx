"use client";
import React from 'react';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";

const SubNavbar = () => {
    return (
        <header className="md:flex flex-col md:flex-row items-center mb-22 gap-6">
            <div className='flex items-center gap-6'>
                {/* Logo */}
                <Image
                    src="/crawl-logo-2.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                />
                <nav className="flex gap-6">
                    <a href="#" className="text-white hover:underline">Home</a>
                    <a href="#" className="text-white font-bold underline">Library</a>
                    <a href="#" className="text-white hover:underline">Settings</a>
                </nav>
            </div>
            <div className='flex flex-1 mt-5 md:mt-0 min-w-[300px] items-center gap-2 bg-gray-800 px-4 py-2 rounded-md'>
                <IoIosSearch className='text-gray-400 text-2xl' />
                <input
                    type="text"
                    placeholder="Explore unreleased songs"
                    className=" outline-none flex-1 text-white bg-transparent w-full"
                />
            </div>
        </header>
    )
}

export default SubNavbar
