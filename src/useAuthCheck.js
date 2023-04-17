import React,{ useState,useEffect } from "react";

function useAuthCheck(utoken) {
    const [isOnline, setIsOnline] = useState(null);
    const setUtoken  = () => {
        localStorage.setItem('auth_token',utoken)
    }



    const getUToken = () => {
        return "aaaaaaa";
      // return localStorage.getItem('auth_token')
    }
    useEffect(() => {
        
        getUToken();
        
    },[]);

    return getUToken;
}

export default useAuthCheck;

