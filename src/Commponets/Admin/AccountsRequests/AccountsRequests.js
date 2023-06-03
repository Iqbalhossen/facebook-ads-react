import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import { CirclesWithBar } from 'react-loader-spinner';

const AccountsRequests = () => {

    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [accounts, setAccounts] = useState([]);
    // Add Page Section End

    // View Page Section Start 


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/admin/accounts/view`)
            .then(res => res.json())
            .then(data => {
                setAccounts(data);
                console.log(data);
                setLoading(false);
            });

    }, [])

    // console.log(accounts);


    // View Page Section End 

    const deleteHandle = (id) => {

        // console.log(id);

        fetch(`http://localhost:5000/admin/accounts/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingPage = accounts.filter(d => d._id !== data.data._id);
                setAccounts(remainingPage);


            });

        // console.log(pageShow);   

    }


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
                                <th>Account Name</th>
                                <th>page Link</th>
                                <th>Status</th>
                                <th>created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {isLoading ? <tr><th colSpan={6} className="py-4 text-center"><CirclesWithBar /></th></tr> : ""}
                            {accounts.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}

                            {

                                accounts.map(data => <SingleItem data={data} key={data._id} deleteHandle={deleteHandle}></SingleItem>)

                            }



                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Account Name</th>
                                <th>page Link</th>
                                <th>Status</th>
                                <th>created At</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AccountsRequests;