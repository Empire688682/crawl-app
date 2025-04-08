"use client";
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { songs } from '../data';
import SubNavbar from '../SubNavbar/SubNavbar';
import { useGlobalContext } from '../Context';

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs || []);
  const { route } = useGlobalContext();

  useEffect(() => {
    const results = songs.filter(song =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen text-white pr-6 pl-6 pb-22 pt-6">
      <SubNavbar setSearchTerm={setSearchTerm} />
      
      <section>
        <h2 className="text-xl font-semibold mb-1">Purchased Songs</h2>
        <p className="text-gray-400 mb-6">All the tracks you’ve unlocked</p>

        <div className="grid grid-cols-5 gap-4 mb-4 bg-gray-800 p-3 rounded-lg font-medium text-sm text-gray-300">
          <div className='flex items-center gap-2'>Name
            <MdKeyboardArrowDown className='text-white text-2xl' />
          </div>
          <div>Time</div>
          <div>Artist</div>
          <div>Album</div>
          <div>Genre</div>
        </div>

        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div
              key={song._id}
              onClick={() => route.push(`/library/${song._id}`)}
              className="grid grid-cols-5 gap-4 p-3 border-gray-700 text-sm hover:bg-gray-700 cursor-pointer"
            >
              <div>{song.name}</div>
              <div>{song.time}</div>
              <div>{song.artist}</div>
              <div>{song.album}</div>
              <div>{song.genre}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">No songs match your search.</p>
        )}
      </section>
    </div>
  );
};

export default Library;
