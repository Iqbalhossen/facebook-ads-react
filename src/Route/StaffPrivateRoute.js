import React  from 'react';
import { Navigate } from 'react-router-dom';

const StaffPrivateRoute = ({children}) => {

    let userId = localStorage.getItem("ID");   
    const staff = JSON.parse(userId);

    if(staff !== null){    
        
        if(staff && staff._id && staff.role === "staff"){
            return children;
        }
        else{
            return <Navigate to='*' ></Navigate>
        }
    }

    return <Navigate to='*' ></Navigate>
};

export default StaffPrivateRoute;