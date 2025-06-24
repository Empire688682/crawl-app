"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import LoadingSpinner from '@/component/LoadingSpinner/LoadingSpinner';
import SongPreview from '@/component/SongPreview/SongPreview';
import { useGlobalContext } from '@/component/Context';
import axios from "axios";

const page = () => {
  const { id } = useParams();
  const [song, setSong] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { publicApiUrl } = useGlobalContext();
  
    const fetchAllSongs = async () => {
      try {
        const res = await axios.get(publicApiUrl + "songs");
        if (res.status === 200) {
          const fetched = res.data.data;
  
          if (id) {
            const findedSong = fetched.find(
              (song) => song.ID === id
            );
            setSong(findedSong);
            if(song){
              setLoading(false);
            }
          }
        } else {
          setSong({});
        }
      } catch (err) {
        console.error("fetchAllSongs error:", err);
      }
    };
  
    useEffect(() => {
      fetchAllSongs();
    }, []);
  
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
                name={song.title}
                artist={song.artists_names}
                album={song.album || "Single"}
                genre={song.genre} 
                duration={song.duration}
                coverImg={song.cover_art || "/crawl-logo-.png"}
                audioFile={song.audio_url}
                lyrics={song.lyrics || "Not available"}
                aboutArtist={song.aboutArtist || "Not available"}
                releaseDate={song.releaseDate}
                producer={song.producer || "Not avalable"}
                composer={song.composer || "Not available"}
                credits={song.credits || "Not available"}
                mainArtist={song.mainArtist || "Not available"}
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
