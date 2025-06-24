"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { songs } from '@/component/data';
import LoadingSpinner from '@/component/LoadingSpinner/LoadingSpinner';
import SongPreview from '@/component/SongPreview/SongPreview';

const page = () => {
  const { id } = useParams();
  const [song, setSong] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchSong = async () => {
      const data = songs.find((song)=> song._id === Number(id));
      if(data){
        setSong(data);
        setLoading(false);
      }
      else{
        setLoading(false);
        setError(true);
      }
    }
    fetchSong()
  }, [])
  return (
    <div className="min-h-screen text-white pr-6 pl-6 pb-22 pt-6">
      {
        loading ? (
          <div className='h-[60vh] w-full flex items-center justify-center'>
            <LoadingSpinner />
          </div>
        ) : (
          <div>
            {
              error ? (
                <div className='h-[60vh] w-full flex items-center justify-center'>
                  <h1 className='text-2xl font-bold'>Song not found</h1>
                </div>
              ) : (
                <SongPreview
                name={song.name}
                artist={song.artist}
                album={song.album}
                genre={song.genre} 
                duration={song.duration}
                coverImg={song.coverImg}
                audioFile={song.audioFile}
                lyrics={song.lyrics}
                aboutArtist={song.aboutArtist}
                releaseDate={song.releaseDate}
                producer={song.producer}
                composer={song.composer}
                credits={song.credits}
                mainArtist={song.mainArtist}
                />
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default page
