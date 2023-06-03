import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import { CirclesWithBar } from 'react-loader-spinner';

const CreditRequests = () => {
    const { id, accountId } = useParams();
    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [account, setAccounts] = useState([]);
    const [credit, setCredit] = useState([]);
    // Add Page Section End

    // View Page Section Start 


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/accounts/view/${authUser._id}/${id}`)
            .then(res => res.json())
            .then(data => {
                setAccounts(data);
                // console.log(data)
                setLoading(false);
            });

    }, [])

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/credit/view/${authUser._id}/${accountId}`)
            .then(res => res.json())
            .then(data => {
                setCredit(data);
                setLoading(false);
            });

    }, [])

    

    // console.log(credit[credit.length-1]);


    // View Page Section End 

    const deleteHandle = (id)=>{
 
        // console.log(id);
   
        fetch(`http://localhost:5000/credit/delete/${id}`, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            const remainingPage = credit.filter(d => d._id !== data.data._id);
            setCredit(remainingPage);
            
    
        });
    
    // console.log(pageShow);   
    
        }
    


    return (
        <div className='mt-6 container'>
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-start-1 col-end-10 ">
                    <h2 className='text-lg font-semibold'>Ads Account: {account[0]?.accounts}</h2>

                </div>
                <div className="col-end-2 col-span-2 ">
                    <Link to={`/user/add/credit/${account[0]?.accounts}/${id}`} className="btn btn-outline btn-secondary">Add Credit</Link>



                </div>
            </div>

            {/* Table  */}



            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Account Name</th>
                                <th>page Link</th>
                                <th>Credit Limit</th>
                                <th>Amounts</th>
                                <th>Payment Status</th>
                                <th>Total Credit</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {isLoading ? <tr><th colSpan={6} className="py-4 text-center"><CirclesWithBar /></th></tr> : ""}
                            {credit.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}

                            {

                                credit.map(data => <SingleItem data={data} key={data._id} deleteHandle={deleteHandle}></SingleItem>)

                            }



                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Account Name</th>
                                <th>page Link</th>
                                <th>Credit Limit</th>
                                <th>Amounts</th>
                                <th>Payment Status</th>
                                <th>Total Credit</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default CreditRequests;