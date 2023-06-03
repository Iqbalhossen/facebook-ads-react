import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { ProgressBar } from 'react-loader-spinner';
const AddCredit = () => {
    const { accounts, id } = useParams();
    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [amounts, setAmount] = useState(null)
    const [totalCredit, setTotalCredit] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || `/user/credit/request/${accounts}/${id}`;

    const [creditRequests, setCreditRequest] = useState({});

    const [payment, setPayment] = useState(null);

    const handlePayment = (data) =>{
        if(data === "cash"){
            setPayment("cash")
        }
        else if(data === "mobile"){
            setPayment("mobile")
        }
        else if(data === "online"){
            setPayment("online")
        }
        else if(data === "ssl"){
            setPayment("ssl")
        }
    }

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/credit/view/${authUser._id}/${accounts}`)
            .then(res => res.json())
            .then(data => {
                if (data[data.length - 1]) {
                    setTotalCredit(data[data.length - 1].amounts);
                }else if(!data[data.length - 1]){
                    setTotalCredit(0);
                }
                // setCredit(data);
                // console.log(data)
                setLoading(false);
            });

    }, [])


    const handleForm = event => {
        event.preventDefault();
        setLoading(true);
        // console.log({ ...creditRequests, });

        fetch('http://localhost:5000/credit/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(creditRequests)
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
        //  console.log(creditRequests);
        const newAdsRequest = { ...creditRequests, toal_credit: parseInt(totalCredit) + amounts, accounts: accounts, amounts: amounts, user_id: authUser._id, user: authUser, paymentStatus: 0, status: 0, created_at: setTime, update_at: null };
        //  console.log(newAdsRequest);
        newAdsRequest[field] = value;
        setCreditRequest(newAdsRequest);
        setAmount(creditRequests?.credit * 102)
    }

    // console.log(totalCredit)

    return (
        <>
            {isLoading ? <div className='loader-store'>
                <ProgressBar />
            </div> : ""}

            <div className='mt-6 container'>
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-start-1 col-end-10 ">
                        <h2 className='text-lg font-semibold'>New Credit Request</h2>
                    </div>
                    <div className="col-end-2 col-span-2 ">
                        <Link to="/user/ads/request/view" className="btn btn-outline btn-secondary">All Ads Request</Link>
                    </div>
                </div>

                <div className='mt-6'>
                    <div className="overflow-x-auto">
                        <Form onSubmit={handleForm} >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ads Account</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" defaultValue={accounts} placeholder="Ads Account" className="input input-bordered" disabled />
                                </label>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Credit Limit</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <input type="text" onBlur={handleInputBlur} name='credit' placeholder="Credit Limit" className="input input-bordered" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amounts</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <input type="text" onBlur={handleInputBlur} defaultValue={creditRequests?.credit ? creditRequests?.credit * 102 : ''} placeholder="Amounts" className="input input-bordered" disabled />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Payment Method</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <select name='PaymentMethod' className="select select-bordered w-full max-w-xs" onChange={handleInputBlur}>
                                            {<option defaultValue="" disabled selected>choise</option>}
                                            {<option defaultValue=""  >Bikash</option>}
                                            {<option defaultValue=""  >Nogod</option>}

                                        </select>

                                        {/* <input type="text" onBlur={handleInputBlur} name='PaymentMethod' placeholder="Payment Method" className="input input-bordered" /> */}
                                    </label>
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Payment Proof</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <input type="text" onBlur={handleInputBlur} name='PaymentTransactionId' placeholder="Payment Transaction Id" className="input input-bordered" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pay Now</span>
                                    </label>
                                    <div class="radio-group">
                                        <label class="radio-label inline-flex mr-3">
                                            <input type="radio" onClick={()=>handlePayment("cash")} class="radio text-blue-600" name="radioColorGroup"   />
                                            <span class="ltr:ml-2 rtl:mr-2">Cash</span>
                                        </label>
                                        <label class="radio-label inline-flex mr-3">
                                            <input type="radio" class="radio text-yellow-500" name="radioColorGroup"  onClick={()=>handlePayment("mobile")}/>
                                            <span class="ltr:ml-2 rtl:mr-2">Mobile banking</span>
                                        </label>
                                        <label class="radio-label inline-flex mr-3">
                                            <input type="radio" class="radio text-yellow-500" name="radioColorGroup" onClick={()=>handlePayment("online")} />
                                            <span class="ltr:ml-2 rtl:mr-2">Online Banking</span>
                                        </label>
                                        <label class="radio-label inline-flex mr-3">
                                            <input type="radio" class="radio text-yellow-500" name="radioColorGroup" onClick={()=>handlePayment("ssl")} />
                                            <span class="ltr:ml-2 rtl:mr-2">SSL Com</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comments</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <textarea className="textarea" type="text" onBlur={handleInputBlur} name='comments' placeholder="comments"></textarea>
                                    </label>
                                </div>

                            </div>


                        <div className={payment === 'mobile' ? 'block' : 'hidden'}>
                        <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Mobile Payment</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <input type="text" onBlur={handleInputBlur} name='PaymentTransactionId' placeholder="Payment Transaction Id" className="input input-bordered" />
                                    </label>
                                </div>

                        </div>
                        <div className={payment === 'online' ? 'block' : 'hidden'}>
                        <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Payment</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <input type="text" onBlur={handleInputBlur} name='PaymentTransactionId' placeholder="Payment Transaction Id" className="input input-bordered" />
                                    </label>
                                </div>

                        </div>
                        <div className={payment === 'ssl' ? 'block' : 'hidden'}>
                        <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">SSl</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                        <input type="text" onBlur={handleInputBlur} name='PaymentTransactionId' placeholder="Payment Transaction Id" className="input input-bordered" />
                                    </label>
                                </div>

                        </div>


                            <button className="btn btn-secondary my-8">Save</button>
                        </Form>
                    </div>
                </div>




            </div>
        </>
    );
};

export default AddCredit;