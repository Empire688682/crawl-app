import React from 'react';
import Image from 'next/image';

const DownloadApp = () => {
    return (
        <div className='pl-3 pr-3 md:pl-6 md:pr-6 pb-20 flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col p-10 gap-4 bg-[#121212] min-h-[70vh] rounded-2xl'>
                <h1 className='text-3xl md:text-3xl text-center font-bold'>Scan To Download Crawl App</h1>
                <div className='relative min-h-[300px] h-full md:block w-full'>
                    <Image
                        priority={true}
                        fill
                        src="/crawl-mobile.png"
                        alt="Hero Image"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
