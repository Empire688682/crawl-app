"use client"
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";

const songs = [
    { name: 'Baby (Is it a Crime)', time: '2:44', artist: 'Rema', album: 'Single', genre: 'Afrobeat' },
    { name: 'Laho', time: '3:36', artist: 'Shallipopil', album: 'Single', genre: 'Afrobeat' },
    { name: 'Pieces of My Heart', time: '4:19', artist: 'Wizkid', album: 'Morayo', genre: 'Afropop, R&B' },
    { name: 'Shekpe', time: '10:00', artist: 'Davido', album: 'Album', genre: 'Afrobeat, Amapiano, R&B' },
    { name: 'Blessings', time: '3:50', artist: 'Burna Boy', album: 'Twice As Tall', genre: 'Afrobeat' },
    { name: 'Odoyewu', time: '2:58', artist: 'Joeboy', album: 'Somewhere Between Beauty & Magic', genre: 'Afropop' },
    { name: 'Ginger', time: '3:12', artist: 'Wizkid ft. Burna Boy', album: 'Made in Lagos', genre: 'Afrobeats' },
    { name: 'Fem', time: '3:31', artist: 'Davido', album: 'A Better Time', genre: 'Afrobeats' },
    { name: 'Soundgasm', time: '3:20', artist: 'Rema', album: 'Rave & Roses', genre: 'Alté, Afrobeat' },
    { name: 'Vibration', time: '3:40', artist: 'Fireboy DML', album: 'Laughter, Tears & Goosebumps', genre: 'Afrobeat, R&B' },
  ];
const Library = () => {
    return (
        <div className="min-h-screen text-white pr-6 pl-6 pb-22 pt-6">
            <header className="md:flex flex-col md:flex-row items-center mb-22 gap-6">
                <div className='flex items-center gap-6'>
                    {/* Logo */}
                    <Image
                        src="/crawl-logo-2.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="cursor-pointer"
                    />
                    <nav className="flex gap-6">
                        <a href="#" className="text-white hover:underline">Home</a>
                        <a href="#" className="text-white font-bold underline">Library</a>
                        <a href="#" className="text-white hover:underline">Settings</a>
                    </nav>
                </div>
                <div className='flex flex-1 mt-5 md:mt-0 min-w-[300px] items-center gap-2 bg-gray-800 px-4 py-2 rounded-md'>
                <IoIosSearch className='text-gray-400 text-2xl'/>
                <input
                    type="text"
                    placeholder="Explore unreleased songs"
                    className=" outline-none flex-1 text-white bg-transparent w-full"
                />
                </div>
            </header>

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
                {songs.map((song, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-5 gap-4 p-3 border-gray-700 text-sm hover:bg-gray-700"
                    >
                        <div>{song.name}</div>
                        <div>{song.time}</div>
                        <div>{song.artist}</div>
                        <div>{song.album}</div>
                        <div>{song.genre}</div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Library

