"use client";
import React, { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const pathName = usePathname();
  const [userData, setUserData] = useState({});
  const [isInitialize, setIsInitialize] = useState(false);

  const checkIsUserAuthenticated  = ()=>{
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
    setIsInitialize(true);
  }

  useEffect(()=>{
   checkIsUserAuthenticated()
  }, []);

  const logoutUser = () =>{
    if(typeof window !== "undefined"){
      localStorage.removeItem("CrawlUser");
      checkIsUserAuthenticated()
    }
  };

  // Authenticational check

  const publicPath = ["/", "/signup"];

    useEffect(() => {
      if(!isInitialize) return;
      const isPublicRoute = publicPath.includes(pathName);

      if(!userData?.username ){
        if(!isPublicRoute){
          router.push("/signup");
        }
      } else {
        if(isPublicRoute){
          router.push("/library");
        }
      }
  }, [userData, pathName, router]);

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


