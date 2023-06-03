import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-daisyui';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import PageData from './PageData';
import { CirclesWithBar, ProgressBar } from  'react-loader-spinner';

const Pages = () => {


    // Add Page Section Start 

    const { LoginWithEmail, authUser, isLoading, setLoading} = useContext(AuthContext);

    // console.log(authUser._id);

    const [page, setPage] = useState({});
    const [addpage, setaddPage] = useState({});
    const [pageShow, setPageShow] = useState([]);

    const handlePage = event => {
        event.preventDefault();
        setLoading(true);
        // console.log(user);
            fetch('http://localhost:5000/page/add',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(page)
            })
            .then(res => res.json())
            .then(data =>{
                setaddPage(data);
                setLoading(false);
                
                // console.log(data);
                
                
            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event =>{
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        
        const newPage = {...page, user_id:authUser._id,  status:0, created_at: setTime, update_at: null};
        // console.log(newUser);
        newPage[field] = value;
        setPage(newPage);
    }



    // Add Page Section End



    // View Page Section Start 


    useEffect(()=>{
        setLoading(true);
        fetch(`http://localhost:5000/page/view/${authUser._id}`)
        .then(res=>res.json())
        .then(data => {
            setPageShow(data);
            setLoading(false);
        });

    },[addpage])

    // console.log(pageShow);


    // View Page Section End 



   const deleteHandle = (id)=>{

    // console.log(id);
    setLoading(true);
    fetch(`http://localhost:5000/page/delete/${id}`, {
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data.data._id)

        const remainingPage = pageShow.filter(p => p._id !== data.data._id);
        setPageShow(remainingPage);
        setLoading(false);
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

            { isLoading ? <div className='loader-store'>
            <ProgressBar />
            </div> : "" } 

            <label htmlFor="my-modal-3" className="btn btn-outline btn-secondary">Add Page</label>
           
  

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
        <th>created At</th> 
        <th>Action</th> 
      </tr>
    </thead> 
    { isLoading ? <div className='loader'>
    <CirclesWithBar />
    </div> : "" } 
    <tbody>
   
   

   {

pageShow.map(data=> <PageData data={data} key={data._id} deleteHandle = {deleteHandle}></PageData>)

    }
  
    </tbody> 
    <tfoot>
      <tr>
        <th>ID</th> 
        <th>Page Name</th> 
        <th>page Link</th> 
        <th>created At</th> 
        <th>Action</th> 
      </tr>
    </tfoot>
  </table>
</div>
            </div>



            {/* The button to open modal */}
{/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Add Page </h3>
    <div className='w-80 mx-auto my-8'>
            <Form onSubmit={handlePage}>

        

            
            <div className="form-control my-3">
            <label className="label">
                <span className="label-text">Page Name </span>
            </label>
            <label className="input-group input-group-vertical"> 
                <input type="text" onBlur={handleInputBlur} name='page_name' placeholder="Page Name" className="input input-bordered" />
            </label>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Page Link</span>
            </label>
            <label className="input-group input-group-vertical">
                <input type="text" onBlur={handleInputBlur}  name='page_link' placeholder="Page Link" className="input input-bordered" />
            </label>
            </div>
            <button className="btn btn-secondary my-8">Add</button>
            </Form>
            </div>
  </div>
</div>



        </div>
    );
};

export default Pages;