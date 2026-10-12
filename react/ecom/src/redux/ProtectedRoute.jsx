import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    let ctx = useSelector((state)=> state.auth)
    console.log(ctx);  //{isLoggedIn:false , user:{}};

    if(!ctx.isLoggedIn){
       return <Navigate to={'/login'}/>
    }
    else{
        return children;
    }
}

export default ProtectedRoute
