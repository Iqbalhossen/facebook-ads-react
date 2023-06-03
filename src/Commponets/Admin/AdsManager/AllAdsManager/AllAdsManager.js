import React, { useContext, useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleItem from './SingleItem';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
const AllAdsManager = () => {
    // Add Page Section Start 

    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [AdsRequestShow, setAdsRequestShow] = useState([]);
    // Add Page Section End

    // View Page Section Start 


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/admin/ads/manager/view`)
            .then(res => res.json())
            .then(data => {
                setAdsRequestShow(data);
                setLoading(false);
            });

    }, [])

    // console.log(AdsRequestShow);


    // View Page Section End 




    return (

        <div className='mt-6 container'>
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-start-1 col-end-10 ">
                    <h2 className='text-lg font-semibold'>All Pages</h2>
                </div>
                <div className="col-end-2 col-span-2 ">
                    <Link to="/user/ads/request" className="btn btn-outline btn-secondary">Ads Request</Link>



                </div>
            </div>

            {/* Table  */}



            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Page Name</th>
                                <th>page Link</th>
                                <th>Days</th>
                                <th>Budget</th>
                                <th>created At</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {isLoading ? <div className='loader'>
                            <CirclesWithBar />
                        </div> : ""}
                        <tbody>

                        {isLoading ? <tr><th colSpan={6} className="py-4 text-center"><CirclesWithBar /></th></tr> : ""}

                            {AdsRequestShow.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}

                            {

                                AdsRequestShow.map(data => <SingleItem data={data} key={data._id} ></SingleItem>)

                            }



                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Page Name</th>
                                <th>page Link</th>
                                <th>Days</th>
                                <th>Budget</th>
                                <th>created At</th>
                                <th>Status</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        </div>
    );
};


export default AllAdsManager;