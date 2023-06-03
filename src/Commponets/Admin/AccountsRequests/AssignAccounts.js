import React, { useState } from 'react';
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
const AssignAccounts = () => {
    const {id} = useParams();

     // Add Page Section Start 
     const [isloading, setLoading] = useState(false);
 
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/admin/accounts/request";
 
     const [AdsRequest, setAdsRequest] = useState({});

 
     const handleForm = event => {
         event.preventDefault();
         setLoading(true);
         console.log(AdsRequest);
         fetch(`http://localhost:5000/admin/accounts/assign/${id}`, {
             method: 'PUT',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(AdsRequest)
         })
             .then(res => res.json())
             .then(data => {
 
                 // console.log(data.success);
                 if (data.success === true) {
                     navigate(from, { replace: true })
                     setLoading(false);
                 }
 
 
             })
             .catch(error => <></>);
         event.target.reset();
     }
 
     const handleInputBlur = event => {
         let setTime = new Date();
         const value = event.target.value;
         const field = event.target.name;
 
         const newAdsRequest = { ...AdsRequest, update_at: setTime };
         // console.log(newAdsRequest);
         newAdsRequest[field] = value;
         setAdsRequest(newAdsRequest);
     }
 


     
    return (
        <>
        {isloading ? <div className='loader-store'>
            <ProgressBar />
        </div> : ""}

        <div className='mt-6 container'>
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-start-1 col-end-10 ">
                    <h2 className='text-lg font-semibold'>Ads Account Name</h2>
                </div>
                <div className="col-end-2 col-span-2 ">
                    <Link to="/user/ads/request/view" className="btn btn-outline btn-secondary">All Ads Request</Link>
                </div>
            </div>


            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <Form onSubmit={handleForm}>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ads Account Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" onBlur={handleInputBlur} name='accounts' placeholder="Ads Account Name" className="input input-bordered" />
                            </label>
                        </div>

                        <button className="btn btn-secondary my-8">Assign</button>
                    </Form>
                </div>
            </div>




        </div>
    </>
    );
};

export default AssignAccounts;