import React from 'react';
import Image from 'next/image';

const Enhance = () => {
    return (
        <div className='w-full pl-3 pr-3 md:pl-6 md:pr-6 pb-20 flex flex-col items-center justify-center '>
            <h1 className='text-3xl md:text-3xl text-center font-bold'>Enhance Your Music Journey with Crawl</h1>
            <p className='text-sm md:text-lg md:text-left max-w-[600px] max-auto text-center font-medium'>Upgrade your music experience with Crawl. Get unlimited streaming access to exclusive tracks from independent artists. No ads, no subscriptions-just a one-time payment for lifetime access. Support the artist you love and enjoy music on your terms.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 items-center'>
                <div className='flex flex-col gap-2 items-center'>
                <Image
                    priority={true}
                    width={100}
                    height={100}
                    src="/bottom-icon-1.png"
                    alt='Icon'
                    />
                    <h2 className='md:text-1xl text-base font-semibold'>Ad-free music listening</h2>
                    <p>Enjoy uninterrupted music</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                <Image
                    priority={true}
                    width={100}
                    height={100}
                    src="/bottom-icon-2.png"
                    alt='Icon'
                    />
                    <h2 className='md:text-1xl text-base font-semibold'>Play everywhere</h2>
                    <p>Listing on your speakers, and other favorite devices</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                <Image
                    priority={true}
                    width={100}
                    height={100}
                    src="/bottom-icon-3.png"
                    alt='Icon'
                    />
                    <h2 className='md:text-1xl text-base font-semibold'>Pay your way</h2>
                    <p>Play and get access to music</p>
                </div>
            </div>
        </div>
    )
}

export default Enhance
