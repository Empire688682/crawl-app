"use client";
import React from 'react';
import { Play, Pause, Rewind, FastForward } from 'lucide-react';
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
import { songs } from '../data';
import { useGlobalContext } from '../Context';

const AlbumPreview = () => {
  const {route} = useGlobalContext();
  const dummy = {
    _id: 3,
    name: 'Pieces of My Heart',
    artist: 'Wizkid',
    mainArtist: "Owner",
    album: 'Morayo',
    genre: 'Afropop, R&B',
    duration: '4:19',
    coverImg: '/Wizkid-Ft-Brent-Faiyaz-Piece-Of-My-Heart-cover.jpeg',
    audioFile: '/Wizkid-Ft-Brent-Faiyaz-Piece-Of-My-Heart.mp3',
    lyrics: 'I gave you pieces of my heart, now I’m left in the dark... [full lyrics here]',
    aboutArtist: 'Wizkid is a global Afrobeats superstar from Nigeria.',
    releaseDate: '2022-11-20',
    producer: 'P2J',
    composer: 'Wizkid',
    credits: 'Produced by P2J, written and performed by Wizkid.'
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center gap-6 justify-center p-6">
      {/* AUDIO ELEMENT */}
      <audio src={dummy.audioFile} />

      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <Image
          src={dummy.coverImg}
          alt={`${dummy.artist}-${dummy.name}-cover`}
          title={`${dummy.artist}-${dummy.name}-cover`}
          width={400}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '9px' }}
        />

        <div className="text-sm text-gray-400">Preview</div>
        <div className="text-lg font-semibold text-white">{dummy.name}</div>
        <div className="text-sm text-gray-400">{dummy.artist}</div>

        <div className="w-full mt-4">
          <div className="w-full h-1 bg-gray-700 rounded">
            <div className="h-1 bg-white rounded w-[40%]"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0:12</span>
            <span>0:30</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button className="hover:text-gray-300">
            <Rewind />
          </button>
          <button className="hover:text-gray-300">
            <Play />
          </button>
          <button className="hover:text-gray-300">
            <FastForward />
          </button>
        </div>
      </div>

      {/* Album Details */}
      <div className="max-w-[600px] w-full max-auto rounded-lg mt-22 pb-4 overflow-hidden">
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Image
                src={dummy.coverImg}
                alt="Logo"
                width={30}
                height={30}
                className="cursor-pointer rounded-full"
              />
              <h2>{dummy.artist}</h2>
            </div>
            <p>Album. {dummy.releaseDate}</p>
          </div>
          <div className='flex items-center flex-col gap-2'>
            <button className="mt-6 bg-white text-black px-3 py-1 rounded-full font-semibold text-sm hover:bg-gray-200">
              Buy Now!
            </button>
            <p>1,500.00</p>
          </div>
        </div>
        <div className="bg-[#1E1E1E] w-full max-auto py-8 px-3 rounded-sm mt-4 pb-4 overflow-hidden">
          {/**To be change to Album */}
          {
            songs && songs.map((song) => (
              <div className='flex items-center mb-3 justify-between cursor-pointer' onClick={()=>route.push(`/album-preview/${song._id}`)} key={song._id}>
                <div className='flex flex-col'>
                  <h2 className='font-semibold'>
                    {song.name}
                  </h2>
                  <p className='text-sm'>{song.artist}</p>
                </div>
                <FaPlay className='text-[23px] text-white' />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AlbumPreview;
