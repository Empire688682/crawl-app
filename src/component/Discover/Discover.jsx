import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

const Discover = () => {
    return (
        <div className='flex flex-col gap-8 mx-auto max-w-[300px] md:max-w-[450px] text-center '>
            <h1 className='text-3xl md:text-5xl text-center font-bold'>Discover a World of Exlusive Music with Crawl</h1>
            <div className='flex flex-col gap-4'>
            <button className='flex items-center justify-center w-full mx-auto md:mx-0 gap-2 bg-gray-800 text-base md:text-1xl rounded-full border-white text-white cursor-pointer px-4 py-2'>
                <FaGoogle className='text-2xl animate-bounce text-black bg-white p-1 rounded-full' />
                Continue with Google
            </button>
            <button className='flex items-center justify-center w-full mx-auto md:mx-0 gap-2 bg-gray-800 text-base md:text-1xl rounded-full border-white text-white cursor-pointer px-4 py-2'>
                <AiTwotoneMail className='text-2xl animate-bounce text-black bg-white p-1 rounded-full' />
                Continue with Email
            </button>
            <button className='flex items-center justify-center w-full mx-auto md:mx-0 gap-2 bg-gray-800 text-base md:text-1xl rounded-full border-white text-white cursor-pointer px-4 py-2'>
                <FaApple className='text-2xl animate-bounce text-black bg-white p-1 rounded-full' />
                Continue with Apple
            </button>
            </div>
            <button className='flex bg-white text-black items-center justify-center w-full mx-auto md:mx-0 gap-2 rounded-full border-white cursor-pointer px-4 py-2'>
                Login with password
            </button>
            <p className='text-center'>Don't have an account? <span className='font-bold cursor-pointer'>Sign Up</span></p>
        </div>
    )
}

export default Discover
