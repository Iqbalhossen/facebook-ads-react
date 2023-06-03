import React, { useContext, useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const ViewAds = () => {
   
    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [AdsRequestShow, setAdsRequestShow] = useState([]);
    const [page, setPage] = useState([]);
    const [days, setDays] = useState([]);
    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/admin/ads/request/payment";


    const { id } = useParams();

    const [user, setUser] = useState([]);

    // Add Page Section End



    // View Page Section Start 


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/admin/ads/requests/view/${id}`)
            .then(res => res.json())
            .then(data => {
                setAdsRequestShow(data[0]);
                setLoading(false);
            });

    }, [])


    useEffect(() => {
        setLoading(true);
        if(AdsRequestShow){
            fetch(`http://localhost:5000/user/show/user/${AdsRequestShow.user_id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });

        }


    }, [AdsRequestShow])


    const handleConfirm = (id) => {
        setLoading(true);
        //  console.log({...AdsRequest, image:image});

        fetch(`http://localhost:5000/admin/ads/requests/done/${AdsRequestShow._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {

                // console.log(data.success);
                if (data.success === true) {
                    navigate(from, {replace: true})
                    setLoading(false);
                }


            })
            .catch(error => <></>);
    }


    return (
        <div className='mt-6 container'>
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-start-1 col-end-10 ">
                    <h2 className='text-lg font-semibold'>View Ads Manager</h2>
                </div>
                <div className="col-end-2 col-span-2 ">
                    <Link to="" className="btn btn-outline btn-secondary">Ads Request</Link>
                </div>
            </div>


            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <h5>Name </h5>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <h5>Page Name </h5>
                            <p>{AdsRequestShow?.page ? JSON.parse(AdsRequestShow?.page).page_name : ''}</p>
                        </div>
                        <div>
                            <h5>page Link </h5>
                            <p>{AdsRequestShow?.page ? JSON.parse(AdsRequestShow?.page).page_link : ''}</p>
                        </div>
                        <div>
                            <h5>Days </h5>
                            <p>{AdsRequestShow?.days ? JSON.parse(AdsRequestShow?.days).days : ''}</p>
                        </div>
                        <div>
                            <h5>Budget  </h5>
                            <p>{AdsRequestShow?.budget}</p>
                        </div>
                        <div>
                            <h5>Selling Budget  </h5>
                            <p>{AdsRequestShow?.selling_budget}</p>
                        </div>
                        <div>
                            <h5>Payment Type  </h5>
                            <p>{AdsRequestShow?.PaymentType}</p>
                        </div>
                        <div>
                            <h5>Payment Transaction Id  </h5>
                            <p>{AdsRequestShow?.PaymentTransactionId}</p>
                        </div>
                        <div>
                            <h5>Payment ScreenShort  </h5>
                            <p></p>
                        </div>
                        <div>
                            <h5>created at </h5>
                            <p>{AdsRequestShow?.created_at}</p>
                        </div>
                        <div>
                            <h5>Status  </h5>
                            <p><div className="badge badge-primary">Success</div></p>
                        </div>

                    </div>
                   
                </div>
            </div>


        </div>
    );
};

export default ViewAds;