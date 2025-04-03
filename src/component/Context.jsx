"use client";
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

const AppContext = React.createContext();
export const AppProvider = ({children}) => {
     const route = useRouter();
  return <AppContext.Provider value={{
    route,
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}


