"use client";
import React from 'react';
import Image from 'next/image';

const HeroCover = ({setClicked}) => {
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
            <button onClick={()=>{setClicked(true); window.scrollTo(0, 0)}} className='flex items-center font-semibold justify-center text-black max-w-[300px] mx-auto md:mx-0 gap-2 bg-white rounded-full px-6 py-3'>
                DOWNLOAD THE APP
            </button>
        </div>
    )
}

export default HeroCover
