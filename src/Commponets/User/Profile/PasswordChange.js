import React, { useContext, useState } from 'react';
import { Form, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const PasswordChange = () => {

    
    const { LoginWithEmail, authUser,  isLoading, setLoading} = useContext(AuthContext);
    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";

    const [user, setUser] = useState({});
    const [message, setMessage] = useState(null);



    const handleForm = event => {

    //   console.log(user);

      if(user.password !== user.confirmPassword){
        return setMessage("Confirm password not match");
      }


        event.preventDefault();
        setLoading(true);
        // console.log(user);
            fetch(`http://localhost:5000/user/password/change/${authUser._id}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{

                // console.log(data.success);
                if(data.success === true){
                    localStorage.removeItem("ID");
                    LoginWithEmail(null);
                    console.log()
                    navigate(from, {replace: true})               
                    setLoading(false);
                    
                    
                }else if(data.success === false){
                    setMessage(data.message);
                    setLoading(false);
                }
                
                
            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event =>{
        setMessage(null)
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        
        const newUser = {...user, status:0, update_at: setTime};
       //  console.log(newAdsRequest);
       newUser[field] = value;
         setUser(newUser);
    }

    return (
        <Form onSubmit={handleForm} className="py-5">

        {message &&
                    <div className="alert alert-error shadow-lg">
                        <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 

                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                        
                        
                            <span>{message}</span>
                        </div>
                        </div>
            }
        <div className="grid grid-cols-2 gap-4 ">
            
    

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Old Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" onBlur={handleInputBlur}  name='oldPassword'  placeholder="******" className="input input-bordered" />
                        </label>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" onBlur={handleInputBlur}  name='password' placeholder="******" className="input input-bordered"  />
                        </label>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" onBlur={handleInputBlur}  name='confirmPassword'placeholder="******" className="input input-bordered"  />
                        </label>
                        </div>
                        
                        

        </div>
        <button className="btn btn-secondary my-8">Change Password</button>
        </Form>
    );
};

export default PasswordChange;