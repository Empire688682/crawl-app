import React from 'react';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='pl-3 pr-3 md:pl-6 md:pr-6 pb-20 flex flex-col items-center justify-center'>
            <div className='w-full grid grid-cols-2 md:grid-cols-5 items-start p-10 gap-4 bg-[#121212] min-h-[40vh] rounded-2xl'>
            <div className="cursor-pointer flex items-center justify-center">
            <Image
                    src="/crawl-logo-2.png"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                />
            </div>
                <div className='md:text-left text-center'>
                    <h2 className='mb-2 font-semibold'>About</h2>
                    <p className='cursor-pointer text-sm'>Privacy Policy</p>
                </div>
                <div className='md:text-left text-center'>
                    <h2 className='mb-2 font-semibold'>For Artists</h2>
                    <p className='cursor-pointer text-sm'>Andriod</p>
                </div>
                <div className='md:text-left text-center'>
                    <h2 className='mb-2 font-semibold'>Contact Support</h2>
                    <p className='cursor-pointer text-sm'>IOS</p>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                <FaInstagram className='text-2xl cursor-pointer' />
                <FaXTwitter className='text-2xl cursor-pointer' />
                <FaFacebookF className='text-2xl cursor-pointer' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
