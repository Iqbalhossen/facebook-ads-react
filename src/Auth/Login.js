import React, { useContext, useState } from 'react';
import { Form } from 'react-daisyui';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const Login = () => {

    const { LoginWithEmail, authUser, setLoading} = useContext(AuthContext);

    const[userData, setUserData] = useState({});

    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState({});

    const handleLogin = event => {
        event.preventDefault();
        setLoading(true);
        // console.log(user);
            fetch('http://localhost:5000/user/login',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{

                if(data.success === false){
                    setUserData(data);
                }else{
                    const user = data;
                    LoginWithEmail(user)
                    // console.log(user);
                    navigate(from, {replace: true})
                    setLoading(false);

                }

                
            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }

    console.log("context api : ", authUser);

    return (
        <div className='container'>
             <div className='w-80 mx-auto my-8'>
            <Form onSubmit={handleLogin}>

            {userData.message &&
            <div className={`${userData.success === false ?  "alert alert-error shadow-lg" : "alert alert-success shadow-lg"}`}>
                <div>
                {userData.success === false ?  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}

                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                   
                   
                    <span>{userData.message}</span>
                </div>
                </div>
      }

            
            <div className="form-control my-3">
            <label className="label">
                <span className="label-text">Email Address</span>
            </label>
            <label className="input-group input-group-vertical"> 
                <input type="email" onBlur={handleInputBlur} name='email' placeholder="info@site.com" className="input input-bordered" />
            </label>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <label className="input-group input-group-vertical">
                <input type="password" onBlur={handleInputBlur}  name='password' placeholder="******" className="input input-bordered" />
            </label>
            </div>
            <button className="btn btn-secondary my-8">Login</button>
            </Form>
            </div>
        </div>
    );
};

export default Login;