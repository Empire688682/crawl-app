import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Rewind, FastForward } from 'lucide-react';
import Image from 'next/image';

const SongPreview = ({
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAllCredits, setShowAllCredits] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Play/Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Stop after 30s
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime >= 30) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const handleFastForward = () =>{
    const audio = audioRef.current;
    if(!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 3, 30);
  }
  const handleBackForward = () =>{
    const audio = audioRef.current;
    if(!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 3, 0);
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${paddedSeconds}`;
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center gap-6 justify-center p-6">
      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} src={audioFile} />

      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <Image
          src={coverImg}
          alt={`${artist}-${name}-cover-(Crawl)`}
          title={`${artist}-${name}-cover-(Crawl)`}
          width={400}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '9px' }}
        />

        <div className="text-sm text-gray-400">Preview</div>
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="text-sm text-gray-400">{artist}</div>

        <div className="w-full mt-4">
          <div className="w-full h-1 bg-gray-700 rounded">
            <div
              className="h-1 bg-white rounded"
              style={{ width: `${(currentTime / 30) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{formatTime(currentTime)}s</span>
            <span>30 secs</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button className="hover:text-gray-300" onClick={handleBackForward}>
            <Rewind />
          </button>
          <button onClick={togglePlay} className="hover:text-gray-300">
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button className="hover:text-gray-300" onClick={handleFastForward}>
            <FastForward />
          </button>
        </div>

        <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
          Buy Now! ₦1,000.00
        </button>

        <Image
          src="/QRCODE.png"
          alt="Qr-Code"
          width={60}
          height={60}
          className="rounded-lg object-cover mt-13"
        />
      </div>

      {/* About Artist */}
      <div className="bg-[#1E1E1E] max-w-[700px] min-w-[400px] w-full max-auto rounded-lg mt-22 pb-4 overflow-hidden">
        <div className="relative w-full h-[200px]">
          <Image
            src={coverImg}
            alt="Cover"
            fill
            style={{ objectFit: 'cover' }}
          />
          <h1 className="absolute top-[10px] left-[20px] text-white md:text-2xl text-xl font-semibold">
            About the Artist
          </h1>
        </div>
        <h2 className="text-xl p-3 font-semibold">{artist}</h2>
        <p className="px-3">{aboutArtist}</p>
      </div>

      {/* Credits */}
      <div className="bg-[#1E1E1E] max-w-[700px] min-w-[400px] w-full max-auto rounded-lg mt-7 p-3">
        <div className="flex justify-between mb-3 items-center">
          <h2 className="text-xl font-semibold">Credits</h2>
          <button
            onClick={() => setShowAllCredits(!showAllCredits)}
            className="text-sm text-white hover:text-gray-300"
          >
            {showAllCredits ? 'Show less' : 'See all'}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-bold text-sm">{artist}</h3>
            <p className="text-xs">Main Artist</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{composer}</h3>
            <p className="text-xs">Composer</p>
          </div>
          <div>
            <h3 className="font-bold text-sm">{producer}</h3>
            <p className="text-xs">Producer</p>
          </div>

          {showAllCredits && (
            <>
              <div>
                <h3 className="font-bold text-sm">{album}</h3>
                <p className="text-xs">Album</p>
              </div>
              <div>
                <h3 className="font-bold text-sm">{genre}</h3>
                <p className="text-xs">Genre</p>
              </div>
              <div>
                <h3 className="font-bold text-sm">{releaseDate}</h3>
                <p className="text-xs">Release Date</p>
              </div>
              <div>
                <h3 className="font-bold text-sm">{credits}</h3>
                <p className="text-xs">Credits</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Lyrics */}
      <div className="bg-[#1E1E1E] max-w-[600px] min-[400px] w-full max-auto rounded-lg mt-7 p-3">
        <h2 className="text-xl font-semibold">Lyrics</h2>
        <p className='text-sm'>{lyrics}</p>
      </div>
    </div>
  );
};

export default SongPreview;
