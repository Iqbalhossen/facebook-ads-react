import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { ProgressBar } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StoreAdsRequest = () => {
    // Add Page Section Start 

    const { LoginWithEmail, authUser } = useContext(AuthContext);
    const [isloading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/user/ads/request/view";

    const [AdsRequest, setAdsRequest] = useState({});
    const [AdsRequestShow, setAdsRequestShow] = useState([]);
    const [amounts, setAmount] = useState({});
    const [days, setDays] = useState([]);

    const handleForm = event => {
        event.preventDefault();
        setLoading(true);
        console.log(AdsRequest);
        fetch('http://localhost:5000/ads/request/add', {
            method: 'POST',
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
                    toast("Wow so easy!");
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

        const newAdsRequest = { ...AdsRequest, user_id: authUser._id, PaymentType: null, PaymentTransactionId: null, PaymentScreenShort: null, selling_budget: amounts, status: 0, created_at: setTime, update_at: null };
        // console.log(newAdsRequest);
        newAdsRequest[field] = value;
        setAdsRequest(newAdsRequest);
    }


    // console.log(JSON.parse(AdsRequest.days)._id)


    useEffect(() => {
        if (AdsRequest.days) {
            let dayId = JSON.parse(AdsRequest.days)._id;
            // console.log(dayId)
            fetch(`http://localhost:5000/amounts/view/${dayId}`)
                .then(res => res.json())
                .then(data => {
                    setAmount(data.amount);
                    // console.log(data.amount)
                });

        }

    }, [AdsRequest.days])

    useEffect(() => {
        fetch(`http://localhost:5000/days/view`)
            .then(res => res.json())
            .then(data => {
                setDays(data);
            });

    }, [])


    // Add Page Section End



    // View Page Section Start 


    useEffect(() => {
        fetch(`http://localhost:5000/page/view/${authUser._id}`)
            .then(res => res.json())
            .then(data => setAdsRequestShow(data));

    }, [AdsRequestShow])

    // console.log(amounts);


    // View Page Section End 


    return (
        <>
            <ToastContainer />
            {isloading ? <div className='loader-store'>
                <ProgressBar />
            </div> : ""}

            <div className='mt-6 container'>
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-start-1 col-end-10 ">
                        <h2 className='text-lg font-semibold'>Add Ads Request</h2>
                    </div>
                    <div className="col-end-2 col-span-2 ">
                        <Link to="/user/ads/request/view" className="btn btn-outline btn-secondary">All Ads Request</Link>
                    </div>
                </div>


                <div className='mt-6'>
                    <div className="overflow-x-auto">
                        <Form onSubmit={handleForm}>


                            <div className="grid grid-cols-3 gap-4">

                                <div className="form-control my-3">
                                    <label className="label">
                                        <span className="label-text">Page</span>
                                    </label>
                                    <select name='page' className="select w-full max-w-xs" onChange={handleInputBlur}>
                                        {<option value="" disabled>choise page</option>}
                                        {AdsRequestShow.map((data) => {
                                            return (
                                                <option key={data._id} value={JSON.stringify(data)} >
                                                    {data.page_name}</option>
                                            );
                                        })
                                        }
                                    </select>
                                </div>

                                <div className="form-control my-3">
                                    <label className="label">
                                        <span className="label-text">Days</span>
                                    </label>
                                    <select name='days' className="select w-full max-w-xs" onChange={handleInputBlur}>
                                        {<option value="" disabled>choise Days</option>}
                                        {days.map((data) => {
                                            return (
                                                <option key={data._id} value={JSON.stringify(data)}>
                                                    {data.days}</option>
                                            );
                                        })
                                        }
                                    </select>
                                </div>


                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Budget</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" onBlur={handleInputBlur} name='budget' placeholder="Budget" className="input input-bordered" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comments</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <textarea className="textarea" type="text" onBlur={handleInputBlur} name='comments' placeholder="comments"></textarea>
                                    {/* <input type="text" onBlur={handleInputBlur}  name='payment' placeholder="payment" className="input input-bordered" /> */}
                                </label>
                            </div>

                            <button className="btn btn-secondary my-8">Request</button>
                        </Form>
                    </div>
                </div>



                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Ads Request</h3>
    <div className='w-80 mx-auto my-8'>
            <Form onSubmit={handlePage}>

        

            
            <div className="form-control my-3">
            <label className="label">
                <span className="label-text">Page Name </span>
            </label>
            <label className="input-group input-group-vertical"> 
                <input type="text" onBlur={handleInputBlur} name='page_name' placeholder="Page Name" className="input input-bordered" />
            </label>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Page Link</span>
            </label>
            <label className="input-group input-group-vertical">
                <input type="text" onBlur={handleInputBlur}  name='page_link' placeholder="Page Link" className="input input-bordered" />
            </label>
            </div>
            <button className="btn btn-secondary my-8">Add</button>
            </Form>
            </div>
  </div>
</div> */}



            </div>
        </>
    );
};

export default StoreAdsRequest;