import React, { useContext, useEffect, useState } from 'react';
import { CirclesWithBar } from  'react-loader-spinner';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
const RejectAdsRequest = () => {
     // Add Page Section Start 

     const {authUser, isLoading, setLoading} = useContext(AuthContext);
     const [AdsRequestShow, setAdsRequestShow] = useState([]);



 
     // console.log(pageShow);
 
 
     // View Page Section End 
 
 
     useEffect(()=>{
        setLoading(true);
           fetch(`http://localhost:5000/ads/request/reject/view/${authUser._id}`)
           .then(res=>res.json())
           .then(data => {
            setAdsRequestShow(data);
            setLoading(false);
          });
   
       },[])
 

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
         <th>Page Name</th> 
         <th>page Link</th> 
         <th>Days</th> 
         <th>Budget</th> 
         <th>Selling Budget</th> 
         <th>created At</th> 
         <th>Status</th> 
       </tr>
     </thead> 

     { isLoading ? <div className='loader'>
    <CirclesWithBar />
    </div> : 
    
    <tbody>
     
    {

AdsRequestShow.map(data=> <SingleItem data={data} key={data._id}></SingleItem>)

 }


  
    </tbody> 
    } 

     <tfoot>
       <tr>
       <th>ID</th> 
         <th>Page Name</th> 
         <th>page Link</th> 
         <th>Days</th> 
         <th>Budget</th> 
         <th>Selling Budget</th>
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


export default RejectAdsRequest;