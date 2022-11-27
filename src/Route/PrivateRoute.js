import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const PrivateRoute = ({children}) => {
    const {  authUser, loading} = useContext(AuthContext);
    console.log(authUser);
    const location = useLocation();
    if(loading){
        return "";
    }

    if(authUser !== null){
        if(authUser.data && authUser.data._id && authUser.data.role === "user"){
            return children;
        }
    }

  
    return <Navigate to='/login' sate={{from:location}} replace ></Navigate>
}
export default PrivateRoute;