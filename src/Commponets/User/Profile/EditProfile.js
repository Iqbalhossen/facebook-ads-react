import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const EditProfile = () => {

    const { LoginWithEmail, authUser, isLoading, setLoading} = useContext(AuthContext);
    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/user/ads/manager";

    const handleForm = event => {
        event.preventDefault();
        setLoading(true);
        // console.log(AdsRequest);
            fetch('http://localhost:5000/ads/add',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify()
            })
            .then(res => res.json())
            .then(data =>{

                // console.log(data.success);
                if(data.success === true){
                    navigate(from, {replace: true})
                    setLoading(false);
                }
                
                
            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event =>{
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        
        const newAdsRequest = {user_id:authUser._id,  status:0, created_at: setTime, update_at: null};
       //  console.log(newAdsRequest);
        newAdsRequest[field] = value;
        // setAdsRequest(newAdsRequest);
    }

    return (
        <div className="grid grid-cols-2 gap-4 py-5">

<div className="form-control">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <label className="input-group input-group-vertical">
        <input type="text" onBlur={handleInputBlur}  name='budget' defaultValue={authUser?.name} placeholder="Your Name" className="input input-bordered" />
    </label>
    </div>

    <div className="form-control">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
    <label className="input-group input-group-vertical">
        <input type="text" onBlur={handleInputBlur}  name='budget' defaultValue={authUser?.email} placeholder="Your Email Address" className="input input-bordered"  />
    </label>
    </div>

    <div className="form-control">
    <label className="label">
        <span className="label-text">Phone</span>
    </label>
    <label className="input-group input-group-vertical">
        <input type="text" onBlur={handleInputBlur}  name='Phone Number' defaultValue={authUser?.phone} placeholder="budget" className="input input-bordered"  />
    </label>
    </div>

    <div className="form-control">
    <label className="label">
        <span className="label-text">Picture</span>
    </label>
    <label className="input-group input-group-vertical">
       
        <input type="file" name='picture' onBlur={handleInputBlur} className="file-input file-input-ghost w-full max-w-xs" />
    </label>
    </div>


        </div>
    );
};

export default EditProfile;