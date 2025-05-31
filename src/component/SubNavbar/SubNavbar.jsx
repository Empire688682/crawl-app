"use client";
import React from 'react';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '../Context';

const SubNavbar = ({setSearchTerm}) => {
    const pathName = usePathname();
    const {route} = useGlobalContext();
    return (
        <header className="md:flex flex-col md:flex-row items-center mb-6 gap-8">
            <div className='flex items-center gap-6'>
                {/* Logo */}
                <Image
                    src="/crawl-logo-2.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                    onClick={()=>route.push("/")}
                />
                <nav className="flex gap-6">
                    <Link href="/" className={`text-white hover:underline ${pathName ==="/landing-page" && "underline font-bold" }`}>Home</Link>
                    <Link href="/library" className={`text-white hover:underline ${pathName ==="/library" && "underline font-bold" }`}>Library</Link>
                    <Link href="/settings" className={`text-white hover:underline ${pathName ==="/settings" && "underline font-bold" }`}>Settings</Link>
                </nav>
            </div>
            <div className='flex flex-1 mt-5 md:mt-0 min-w-[300px] items-center gap-2 bg-gray-800 px-4 py-2 rounded-md'>
                <IoIosSearch className='text-gray-400 text-2xl' />
                <input
                    type="text"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Explore unreleased songs"
                    className=" outline-none flex-1 text-white bg-transparent w-full"
                />
            </div>
        </header>
    )
}

export default SubNavbar
