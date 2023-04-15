import React,{useState,useEffect} from 'react';

export default function AuthCheck(props){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    //const auth_token = localStorage.getItem('auth_token');
    const auth_token = props.readAuth;

    const checkLoginStatus = () => {
        if (!auth_token || auth_token === undefined){
            setIsLoggedIn(false)
        }else{
            setIsLoggedIn(true);
        }
        
    }

    useEffect(() => {
        checkLoginStatus();
    }, [isLoggedIn, props.readAuth])

    return(
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    )

}

