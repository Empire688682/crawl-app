import React from 'react';
import { Play, Pause, Rewind } from 'lucide-react';
import Image from 'next/image';

const SongPreview = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <Image
        src="/crawl-logo-2.png"
        alt="Logo"
        width={50}
        height={50}
        className="cursor-pointer"
      />

      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <Image
          src="/rema-play.png"
          alt="Rema - Baby (Is it a Crime)"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />

        <div className="text-sm text-gray-400">Preview</div>
        <div className="text-lg font-semibold text-white">Baby (Is it a Crime)</div>
        <div className="text-sm text-gray-400">Rema</div>

        <div className="w-full mt-4">
          <div className="w-full h-1 bg-gray-700 rounded">
            <div className="h-1 bg-white w-[20%] rounded"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1:02</span>
            <span>10 secs</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button className="hover:text-gray-300">
            <Rewind />
          </button>
          <button className="hover:text-gray-300">
            <Play />
          </button>
        </div>

        <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
          Buy Now! ₦1,000.00
        </button>
      </div>
    </div>
  );
}

export default SongPreview
