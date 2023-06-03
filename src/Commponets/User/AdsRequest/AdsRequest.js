import React, { useContext, useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleData from './SingleData';
import { CirclesWithBar } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdsRequest = () => {
  // Add Page Section Start 

  const { authUser, isLoading, setLoading } = useContext(AuthContext);
  const [AdsRequestShow, setAdsRequestShow] = useState([]);







  // Add Page Section End



  // View Page Section Start 


  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/ads/request/view/${authUser._id}`)
      .then(res => res.json())
      .then(data => {
        setAdsRequestShow(data);
        setLoading(false);
      });

  }, [])

  // console.log(pageShow);


  // View Page Section End 



  const deleteHandle = (id) => {

    // console.log(id);

    fetch(`http://localhost:5000/ads/request/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.data._id)

        const remainingPage = AdsRequestShow.filter(d => d._id !== data.data._id);
        setAdsRequestShow(remainingPage);


      });

    // console.log(pageShow);


  }
  const notify = () => toast("Wow so easy!");



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

      {/* <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> */}

      <div className='mt-6'>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Page Name</th>
                <th>page Link</th>
                <th>Days</th>
                <th>Budget</th>
                <th>Selling</th>
                <th>created At</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {isLoading ? <div className='loader'>
              <CirclesWithBar />
            </div> : ""}
            <tbody>
              {AdsRequestShow.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}
              {

                AdsRequestShow.map(data => <SingleData data={data} key={data._id} deleteHandle={deleteHandle}></SingleData>)

              }



            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Page Name</th>
                <th>page Link</th>
                <th>Days</th>
                <th>Budget</th>
                <th>Selling</th>
                <th>created At</th>
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

export default AdsRequest;