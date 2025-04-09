"use client";
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { songs } from '../data';
import SubNavbar from '../SubNavbar/SubNavbar';
import { useGlobalContext } from '../Context';

const MyLibrary = () => {
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
                <div className='flex justify-between items-center'>
                <div>
                <h2 className="font-semibold mb-1">Purchased Songs</h2>
                <p className="text-gray-400 mb-6">All the tracks you’ve unlocked</p>
                </div>
                <p className='text-white hover:text-gray-300 cursor-pointer'>See all</p>
                </div>

                {/* Scrollable table wrapper */}
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[300px]">
                        {/* Header */}
                        <div className="grid md:grid-cols-5 grid-cols-3 gap-4 mb-4 bg-gray-800 p-3 rounded-lg font-medium text-sm text-gray-300">
                            <div className='flex items-center gap-2'>Name
                                <MdKeyboardArrowDown className='text-white text-2xl' />
                            </div>
                            <div>Time</div>
                            <div>Artist</div>
                            <div className='hidden md:block'>Album</div>
                            <div className='hidden md:block'>Genre</div>
                        </div>

                        {/* Data rows */}
                        {filteredSongs.length > 0 ? (
                            filteredSongs.map((song) => (
                                <div
                                    key={song._id}
                                    onClick={() => { route.push(`/library/${song._id}`); window.scrollTo(0, 0) }}
                                    className="grid md:grid-cols-5 grid-cols-3 gap-4 p-3 border-gray-700 text-sm hover:bg-gray-700 cursor-pointer"
                                >
                                    <div>{song.name}</div>
                                    <div>{song.duration}</div>
                                    <div>{song.artist}</div>
                                    <div className='hidden md:block'>{song.album}</div>
                                    <div className='hidden md:block'>{song.genre}</div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-6 min-h-[40vh]">No songs match your search.</p>
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyLibrary;
