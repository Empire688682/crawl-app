"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Rewind, FastForward } from 'lucide-react';
import Image from 'next/image';

const AlbumSinglePrev = ({
  name,
  artist,
  album,
  genre,
  duration,
  coverImg,
  audioFile, // make sure this is a valid audio URL
  lyrics,
  aboutArtist,
  releaseDate,
  producer,
  composer,
  credits,
}) => {

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

  const audioRef = useRef(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(()=>{
    const audio = audioRef.current;
    if(!audio) return;
    const handleTimeUpdate = () =>{
      if(audio.currentTime <= 30){
        setCurrentTime(audio.currentTime);
      };
      
      if(audio.currentTime >= 30){
        audio.pause();
        setIsPlaying(false);
        audio.currentTime = 0;
        setCurrentTime(0);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return ()=>{
      audio.removeEventListener("timeupdate", handleTimeUpdate )
    }
  },[]);

  const handleFastForward = ()=>{
    const audio = audioRef.current
    if(!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 3, 30 )
  }

  const handleBackForward = ()=>{
    const audio = audioRef.current
    if(!audio) return;
    audio.currentTime = Math.max(audio.currentTime -3 , 0 )
  }

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isplaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);;
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center gap-6 justify-center p-6">
      {/* AUDIO ELEMENT */}
      <audio src={audioFile}  ref={audioRef}/>

      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <Image
          src={dummy.coverImg}
          alt={`${artist}-${name}-cover`}
          title={`${artist}-${name}-cover`}
          width={400}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '9px' }}
        />

        <div className="text-sm text-gray-400">Preview</div>
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="text-sm text-gray-400">{artist}</div>

        <div className="w-full mt-4">
          <div className="w-full h-1 bg-gray-700 rounded">
            <div style={{width:`${currentTime / 30 * 100}%`}} className='h-full bg-white rounded-full'></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0:{Math.floor(currentTime)}</span>
            <span>0:30</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button className="hover:text-gray-300">
            <Rewind onClick={handleBackForward}/>
          </button>
          <button className="hover:text-gray-300" onClick={togglePlay}>
            {
              isplaying? <Pause /> : <Play />
            }
          </button>
          <button className="hover:text-gray-300">
            <FastForward onClick={handleFastForward}/>
          </button>
        </div>

        <div className='flex items-center flex-col gap-1'>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
            Buy Now!
          </button>
          <p className='white spinner'>₦1,500.00</p>
        </div>
      </div>

      {/* About Artist */}
      <div className="bg-[#1E1E1E] max-w-[600px] w-full max-auto rounded-lg mt-19 pb-4 overflow-hidden">
        <div className="relative w-full h-[200px]">
          <Image
            src="/Wizkid-Kese-Dance-cover.jpg"
            alt="Cover"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h2 className="text-xl p-3 font-semibold">{dummy.artist}</h2>
        <p className="px-3">{dummy.aboutArtist}</p>
      </div>

      {/* Credits */}
      <div className="bg-[#1E1E1E] max-w-[600px] w-full max-auto rounded-lg mt-7 p-3">
        <div className="flex justify-between mb-3 items-center">
          <h2 className="text-xl font-semibold">Credits</h2>
          <button className="text-sm text-white hover:text-gray-300">See all</button>
        </div>

        <div className="flex flex-col gap-4">
          <div className='flex items-center justify-between'>
            <div>
              <h3 className="font-bold text-sm">{dummy.artist}</h3>
              <p className="text-xs">Main dummy.</p>
            </div>
            <button className="bg-white text-sm cursor-pointer text-black px-5 py-1 rounded-full font-semibold hover:bg-gray-200">
              Buy Now!
            </button>
          </div>
          <div>
            <h3 className="font-bold text-sm">{dummy.composer}</h3>
            <p className="text-xs">Composer</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{dummy.producer}</h3>
            <p className="text-xs">Producer</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{dummy.album}</h3>
            <p className="text-xs">Album</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{dummy.genre}</h3>
            <p className="text-xs">Genre</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{dummy.releaseDate}</h3>
            <p className="text-xs">Release Date</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{dummy.credits}</h3>
            <p className="text-xs">Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSinglePrev;
