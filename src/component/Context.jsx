"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [userData, setUserData] = useState({})

  useEffect(()=>{
    const now = new Date().getTime();
    if(typeof window !== "undefined"){
      const savedData = localStorage.getItem("CrawlUser");
      const parseData = savedData? JSON.parse(savedData) : null
      if(now > parseData?.expiredAt ){
        localStorage.removeItem(CrawlUser)
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
  }

  return <AppContext.Provider value={{
    router,
    publicApiUrl,
    userData,
    logoutUser
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}


