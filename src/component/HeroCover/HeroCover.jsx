"use client";
import React from 'react';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";
import { useGlobalContext } from '../Context';

const HeroCover = () => {
    const {route} = useGlobalContext()
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='relative h-[200px] w-[200px] md:h-[300px] md:w-[300px]'>
                <Image
                    priority={true}
                    fill
                    src="/Crawl-stacked-white.png"
                    alt="Hero Image"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <button onClick={()=>route.push("/landing-page")} className='flex items-center font-semibold justify-center text-black max-w-[300px] mx-auto md:mx-0 gap-2 bg-white rounded-full px-4 py-2'>
                DOWNLOAD THE APP
                <FaArrowDown className='text-2xl animate-bounce text-black bg-white p-1 rounded-full' />
            </button>
        </div>
    )
}

export default HeroCover
