import React, { useContext, useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';
import SingleItem from './SingleItem';

const AdsManager = () => {

  // Add Page Section Start 

  const { authUser, isLoading, setLoading } = useContext(AuthContext);
  const [AdsShow, setAdsShow] = useState([]);







  // Add Page Section End



  // View Page Section Start 


  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/ads/view/${authUser._id}`)
      .then(res => res.json())
      .then(data => {
        setAdsShow(data);
        setLoading(false);
        // console.log(data)
      });

  }, [])

  // console.log(pageShow);


  // View Page Section End 



  const deleteHandle = (id) => {

    // console.log(id);

    fetch(`http://localhost:5000/ads/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const remainingPage = AdsShow.filter(d => d._id !== data.data._id);
        setAdsShow(remainingPage);


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
          <Link to="/user/ads/add" className="btn btn-outline btn-secondary">Add Ads</Link>



        </div>
      </div>

      {/* Table  */}

      <div className='mt-6'>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>page Name</th>
                <th>page Link</th>
                <th>Days</th>
                <th>Budget</th>
                <th>payment method</th>
                <th>payment status</th>
                <th>created At</th>
                <th>Action</th>
              </tr>
            </thead>
            {isLoading ? <div className='loader'>
              <CirclesWithBar />
            </div> : ""}
            <tbody>

            {AdsShow.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}
              {
                AdsShow.map(data => <SingleItem key={data._id} data={data} deleteHandle={deleteHandle}></SingleItem>)
              }



            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>page Name</th>
                <th>page Link</th>
                <th>Days</th>
                <th>Budget</th>
                <th>payment method</th>
                <th>payment status</th>
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

export default AdsManager;