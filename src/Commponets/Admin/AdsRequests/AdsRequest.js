import React, { useContext, useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';


const AdsRequest = () => {
  // Add Page Section Start 

  const { isLoading, setLoading } = useContext(AuthContext);
  const [AdsRequestShow, setAdsRequestShow] = useState([]);


  // Add Page Section End



  // View Page Section Start 


  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/admin/ads/requests/view`)
      .then(res => res.json())
      .then(data => {
        setAdsRequestShow(data);
        setLoading(false);
      });

  }, [])

  // console.log(pageShow);


  // View Page Section End 



  const AdsRequestAccepHandle = (id) => {
    setLoading(true);
    // console.log(AdsRequest);
    fetch(`http://localhost:5000/admin/ads/requests/accept/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.success);
        if (data.success === true) {
          const remainingPage = AdsRequestShow.filter(d => d._id !== data.data._id);
          setAdsRequestShow(remainingPage);
          setLoading(false);
        }


      })
      .catch(error => <></>);
  }

  const AdsRequestRejectHandle = (id) => {
    setLoading(true);
    // console.log(AdsRequest);
    fetch(`http://localhost:5000/admin/ads/requests/reject/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.success);
        if (data.success === true) {
          const remainingPage = AdsRequestShow.filter(d => d._id !== data.data._id);
          setAdsRequestShow(remainingPage);

          setLoading(false);
        }


      })
      .catch(error => <></>);
  }

  // console.log(pageShow);




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
                <th>Selling Budget</th>
                <th>created At</th>
                <th>Action</th>
              </tr>
            </thead>

            {isLoading ? <div className='loader'>
              <CirclesWithBar />
            </div> :

              <tbody>

                {AdsRequestShow.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}

                {

                  AdsRequestShow.map(data => <SingleItem data={data} key={data._id} AdsRequestAccepHandle={AdsRequestAccepHandle} AdsRequestRejectHandle={AdsRequestRejectHandle}></SingleItem>)

                }



              </tbody>
            }

            <tfoot>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Page Name</th>
                <th>page Link</th>
                <th>Days</th>
                <th>Budget</th>
                <th>Selling Budget</th>
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

export default AdsRequest;