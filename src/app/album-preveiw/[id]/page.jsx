"use client";
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>AlbumSinglePrev</h1>
    </div>
  )
}

export default Page
