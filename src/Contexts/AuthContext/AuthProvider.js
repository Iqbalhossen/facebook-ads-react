import React, { createContext, useEffect, useState } from 'react';
// import app from '../../firebase/firebase.init';
// import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();


// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [authUser, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const providerLogin = (provider) =>{
    //     return signInWithPopup(auth, provider);
    // }

    // const providerRegisterWithEmail = (email, password) =>{
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }
    const LoginWithEmail = (data) =>{
        setUser(data);
        // console.log("context api : ", data);
    }

    // const logOut = ()=>{
    //     return signOut(auth);
    // }

    useEffect( ()=> {

    //    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         // console.log(currentUser);
    //         setUser(currentUser);
    //         setLoading(false);
    //     });

        // return ()=> {
        //     unSubscribe();
        // }

    },[])

  

    const authInfo = {authUser, LoginWithEmail, loading, setLoading, setUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;