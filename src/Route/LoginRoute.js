import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const LoginRoute = ({children}) => {
    const {  authUser, loading} = useContext(AuthContext);

    // const navigate= useNavigate();
    const location = useLocation();
    // const userFrom = location.state?.from?.pathname || "/user/dashboard";
    // const adminFrom = location.state?.from?.pathname || "/admin/dashboard";
    // const managerFrom = location.state?.from?.pathname || "/manager/dashboard";
    // const staffFrom = location.state?.from?.pathname || "/staff/dashboard";

    if(authUser === null){
        return children;
        
    }
    else if(authUser.role === "user"){
        if(authUser && authUser._id && authUser.role === "user"){
            return <Navigate to='/user/dashboard' state={{from:location}} replace ></Navigate>
        }
    }
    else if(authUser.role === "admin"){
        if(authUser && authUser._id && authUser.role === "admin"){
            return <Navigate to='/admin/dashboard' state={{from:location}} replace ></Navigate>
        }
    }
    else if(authUser.role === "manager"){
        if(authUser && authUser._id && authUser.role === "manager"){
            return <Navigate to='/manager/dashboard' state={{from:location}} replace ></Navigate>
        }
    }
    else if(authUser.role === "staff"){
        if(authUser && authUser._id && authUser.role === "staff"){
            return <Navigate to='/staff/dashboard' state={{from:location}} replace ></Navigate>
        }
    }

  
   
}

export default LoginRoute;