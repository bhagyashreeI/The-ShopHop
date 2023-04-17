import React,{ useState,useEffect } from "react";

function useAuthCheck(utoken) {
    const [isOnline, setIsOnline] = useState(null);
    const setUToken = (utoken) => {
        if(utoken){
            localStorage.setItem('auth_token', utoken)
        }
        
    }

    const getUToken = () => {
        return localStorage.getItem('auth_token');
    }

    const removeUToken = () => {
        return localStorage.removeItem('auth_token');
    }
    useEffect(() => {
        getUToken();
        
    },[]);

    return ({ getUToken, setUToken, removeUToken })
}

export default useAuthCheck;

