"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [userData, setUserData] = useState({});
  const [songs, setSongs] = useState({});

  useEffect(()=>{
    const now = new Date().getTime();
    if(typeof window !== "undefined"){
      const savedData = localStorage.getItem("CrawlUser");
      const parseData = savedData? JSON.parse(savedData) : null
      if(now > parseData?.expiredAt ){
        localStorage.removeItem("CrawlUser")
      }
      else{
        setUserData(parseData);
      }
    }
  }, []);

    useEffect(() => {
    if (!userData?.token && !userData?.username) {
      router.replace("/signup");
    }
  }, [userData]);

  const logoutUser = () =>{
    if(typeof window !== "undefined"){
      localStorage.removeItem("CrawlUser");
      window.location.reload();
    }
  };

   const getAllSong = async (e) => {
    try {
      const res = await axios.get(publicApiUrl + "songs");
      console.log("res:", res);
      if (res.status === 200) {
       setSongs(res.data.data);
      }
    } catch (error) {
      console.log("handleUploadSong:", error);
      toast("Failed to fetched song!")
    }
  };

  useEffect(()=>{
    getAllSong();
  },[])

  return <AppContext.Provider value={{
    router,
    publicApiUrl,
    userData,
    logoutUser,
    songs
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}


