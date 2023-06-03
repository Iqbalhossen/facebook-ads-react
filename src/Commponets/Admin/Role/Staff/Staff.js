import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CirclesWithBar } from  'react-loader-spinner';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const Staff = () => {
      // Add Page Section Start 

      const { authUser, isLoading, setLoading} = useContext(AuthContext);
      const [manager, setManager] = useState([]);
  
 
 
  
      // View manager Section Start 
   
      useEffect(()=>{
         setLoading(true);
            fetch(`http://localhost:5000/role/staff/view`)
            .then(res=>res.json())
            .then(data => {
             setManager(data);
             setLoading(false);
           });
    
        },[])
  
     //  console.log(manager);
  
  
      // View manager Section End 
  
  
  
     const deleteHandle = (id)=>{
  
      // console.log(id);
 
      fetch(`http://localhost:5000/ads/request/delete/${id}`, {
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=> {
          // console.log(data.data._id)
          
          const remainingPage = manager.filter(d => d._id !== data.data._id);
          setManager(remainingPage);
          
  
      });
  
  // console.log(pageShow);
      
  
      }
 
     return (
         <div className='mt-6 container'>
         <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-start-1 col-end-10 ">
              <h2 className='text-lg font-semibold'>All Staff</h2>
          </div>
          <div className="col-end-2 col-span-2 ">          
          <Link to="/admin/staff/add" className="btn btn-outline btn-secondary">Add Staff</Link>
 
 
 
          </div>
          </div>
 
 {/* Table  */}
 
          <div className='mt-6'>
          <div className="overflow-x-auto">
 <table className="table table-compact w-full">
  <thead>
    <tr>
      <th>ID</th> 
      <th>Name</th> 
      <th>Email</th> 
      <th>Phone</th> 
      <th>status</th> 
      <th>created At</th> 
      <th>Action</th> 
    </tr>
  </thead> 
  { isLoading ? <div className='loader'>
 <CirclesWithBar />
 </div> : "" } 
  <tbody>
  
  {
            manager.map(data => <SingleItem key={data._id} data={data} deleteHandle={deleteHandle}></SingleItem>)
        }
 
 
 
  </tbody> 
  <tfoot>
    <tr>
     <th>ID</th> 
      <th>Name</th> 
      <th>Email</th> 
      <th>Phone</th> 
      <th>status</th> 
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
export default Staff;