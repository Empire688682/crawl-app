import React from 'react';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import Image from 'next/image';
import { useGlobalContext } from '../Context';
import Link from "next/link";

const Hero = () => {
    const { router } = useGlobalContext();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12 pl-3 pr-3 md:pl-6 md:pr-6 py-20'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl md:text-6xl md:text-left text-center font-bold'>Discover a World of Exlusive Music with Crawl</h1>
                <p className='text-sm md:text-lg md:text-left text-center font-medium'>Welcome to Crawl-wheren fans get exlusive access. Discover and stream independent music, support your favourite artists, and unlock exclusive listiening-all with a one-time payment. No subscriptions, just pure music.</p>
                <button onClick={() => router.push("/library")} className='flex items-center cursor-pointer justify-center w-[300px] mx-auto md:mx-0 gap-2 border-2 rounded-sm border-white text-white px-12 py-2'>
                    Explore
                    <FaArrowRight />
                </button>
                <button
                    className="flex items-center justify-center max-w-[300px] mx-auto md:mx-0 gap-2 text-white px-4 py-2"
                >
                    DOWNLOAD&nbsp;THE&nbsp;APP
                    <FaArrowDown className="text-2xl animate-bounce text-black bg-white p-1 mt-1 rounded-full" />
                </button>
                <div className='flex flex-col md:flex-row gap-4 mt-5 '>
                    <Link
                    href="https://apps.apple.com/app/id0000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center max-w-[300px] mx-auto md:mx-0 gap-2 text-white px-4 py-2"
                >
                    <span className='flex items-center justify-center w-[300px] mx-auto md:mx-0 gap-2 border-2 rounded-sm border-white text-white px-12 py-2'>
                        <SiAppstore className='text-[30px]' />
                        Apple
                    </span>
                </Link>
                    <Link
                    href="https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center max-w-[300px] mx-auto md:mx-0 gap-2 text-white px-4 py-2"
                >
                    <span className='flex items-center justify-center w-[300px] mx-auto md:mx-0 gap-2 border-2 rounded-sm border-white text-white px-4 py-2'>
                        <SiGoogleplay className='text-[30px]' />
                        Play Store
                    </span>
                </Link>
                </div>
            </div>
            <div className='relative'>
                <div className='relative md:min-h-[500px] min-h-[300px] h-full md:block w-full'>
                    <Image
                        priority={true}
                        fill
                        src="/crawl-hero.png"
                        alt="Hero Image"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
