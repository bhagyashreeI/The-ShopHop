import React,{useEffect,useState} from 'react';
import {Route,useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn]= useState(false);

    const checkLoginToken = () => {
        const authToken = localStorage.getItem('auth_token');
        if(!authToken || authToken == undefined){
            setIsLoggedIn(false);
           // return navigate('/auth/login');
        }else{
            setIsLoggedIn(true);
        }
        
    }

    useEffect(() => {
        checkLoginToken();
    },[isLoggedIn])

    return(
        <React.Fragment>
            {
                isLoggedIn ? props.children : "Please login"
            }
        </React.Fragment>
    )
}

export default ProtectedRoute;
