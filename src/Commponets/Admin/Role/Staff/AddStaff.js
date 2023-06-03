import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { ProgressBar } from  'react-loader-spinner';

const AddStaff = () => {
     // Add Page Section Start 

     const {isLoading, setLoading} = useContext(AuthContext);
 
     const navigate= useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/admin/staff/view";
 
     const [staff, setStaff] = useState({});
     const [message, setMessage] = useState('');
 
 
    //  console.log(amounts);
 
     const handleForm = event => {
         event.preventDefault();
         setLoading(true);
         // console.log(manager);
             fetch('http://localhost:5000/role/manager/add',{
                 method: 'POST',
                 headers:{
                     'content-type': 'application/json'
                 },
                 body:JSON.stringify(staff)
             })
             .then(res => res.json())
             .then(data =>{
 
                 // console.log(data.success);
                 if(data.success === true){
                     navigate(from, {replace: true})
                     setLoading(false);
                 }else if(data.success === false){

                    setMessage("Email Already Exits")
                    setLoading(false);
                }
                
                 
                 
             })
             .catch(error => <></>);
         event.target.reset();
     }
 
     const handleInputBlur = event =>{
         let setTime = new Date();
         const value = event.target.value;
         const field = event.target.name;
         
         const newManager = {...staff, role:"staff", picture:null,  status:0, created_at: setTime, update_at: null};
        newManager[field] = value;
        setStaff(newManager);
     }
 
    
      
 
     // console.log(pageShow);
 
 
     // View Page Section End 
 
    return (
        <>
        { isLoading ? <div className='loader-store'>
   <ProgressBar />
   </div> : "" } 
 
       <div className='mt-6 container'>
          <div className="grid grid-cols-12 gap-4 items-center">
           <div className="col-start-1 col-end-10 ">
               <h2 className='text-lg font-semibold'>Add Staff</h2>
           </div>
           <div className="col-end-2 col-span-2 ">          
           <Link to="/admin/staff/view" className="btn btn-outline btn-secondary">All Staff</Link>
           </div>
           </div>
 
           {message &&
            <div className="alert alert-error shadow-lg py-2">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
                    <span>{message}</span>
                </div>
                </div>
      }

           <Form onSubmit={handleForm}>
 
           <div className="grid grid-cols-2 gap-4">
 
 
 
                 <div className="form-control">
             <label className="label">
                 <span className="label-text">Name</span>
             </label>
             <label className="input-group input-group-vertical">
                 <input type="text" onBlur={handleInputBlur}  name='name'  placeholder="Name" className="input input-bordered" />
             </label>
             </div>
 
             <div className="form-control">
             <label className="label">
                 <span className="label-text">Phone</span>
             </label>
             <label className="input-group input-group-vertical">
                 <input type="text" onBlur={handleInputBlur}  name='phone' placeholder="Phone Number" className="input input-bordered" />
             </label>
             </div>
 
             <div className="form-control">
             <label className="label">
                 <span className="label-text">Email</span>
             </label>
             <label className="input-group input-group-vertical">
                 <input type="email" onBlur={handleInputBlur}  name='email' placeholder="Email Address" className="input input-bordered" />
             </label>
             </div>
 
             <div className="form-control">
             <label className="label">
                 <span className="label-text">Password</span>
             </label>
             <label className="input-group input-group-vertical">
             <input type="password" onBlur={handleInputBlur}  name='password' placeholder="*****" className="input input-bordered" />
             </label>
             </div>
 
 
             </div>
 
             
    
             <button className="btn btn-secondary my-8">Add Manager</button>
 
             </Form>
 
       </div>
       </>
    );
 };

export default AddStaff;