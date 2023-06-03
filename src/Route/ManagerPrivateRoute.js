import React from 'react';
import { Navigate } from 'react-router-dom';

const ManagerPrivateRoute = ({children}) => {
    // const {  authUser, LoginWithEmail, setUser} = useContext(AuthContext);

    let userId = localStorage.getItem("ID");

    const manager = JSON.parse(userId);
   

    if(manager !== null){
       
        
        if(manager && manager._id && manager.role === "manager"){
            return children;
        }else{
            return <Navigate to='*' ></Navigate>
        }
    }
   
    return <Navigate to='*' ></Navigate>
};

export default ManagerPrivateRoute;