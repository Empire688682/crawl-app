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
      if(now > parseData?.expiredAT ){
        localStorage.removeItem(CrawlUser)
      }
      else{
        setUserData(parseData);
      }
    }
  }, []);

  const logoutUser = () =>{
    if(typeof window !== "undefined"){
      localStorage.removeItem("CrawlUser");
      router.replace("/")
    }
  }

  useEffect(() => {
    if (!userData.token) {
      router.replace("/signup");
    }
  }, [router]);

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


