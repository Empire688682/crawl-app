"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { songs } from '@/component/data';
import LoadingSpinner from '@/component/LoadingSpinner/LoadingSpinner';
import AlbumSinglePrev from '@/component/AlbumSinglePrev/AlbumSinglePrev';

const page = () => {
  const { id } = useParams();
  const [track, setTrack] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchtrack = async () => {
      const data = songs.find((track) => track._id === Number(id));
      if (data) {
        setTrack(data);
        setLoading(false);
      }
      else {
        setLoading(false);
        setError(true);
      }
    }
    fetchtrack()
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
                  <h1 className='text-2xl font-bold'>track not found</h1>
                </div>
              ) : (
                <AlbumSinglePrev
                  name={track.name}
                  artist={track.artist}
                  album={track.album}
                  genre={track.genre}
                  duration={track.duration}
                  coverImg={track.coverImg}
                  audioFile={track.audioFile}
                  lyrics={track.lyrics}
                  aboutArtist={track.aboutArtist}
                  releaseDate={track.releaseDate}
                  producer={track.producer}
                  composer={track.composer}
                  credits={track.credits}
                  mainArtist={track.mainArtist}
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
