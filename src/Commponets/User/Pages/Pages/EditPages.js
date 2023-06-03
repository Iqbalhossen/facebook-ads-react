import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';

const EditPages = () => {

    const {id} = useParams();

    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/user/pages/view";

    useEffect(()=>{
        fetch(`http://localhost:5000/page/edit/${id}`)
        .then(res=>res.json())
        .then(data => {
            setPageShow(data)
            setPage(data.data)
        });

    },[id])
    

    const [pageShow, setPageShow] = useState({});
    
    
    const [page, setPage] = useState(pageShow.data);


    
    const { LoginWithEmail, authUser, setLoading} = useContext(AuthContext);


    const handlePage = event => {
        event.preventDefault();
        setLoading(true);

    //   console.log(page);

            fetch(`http://localhost:5000/page/update/${id}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(page)
            })
            .then(res => res.json())
            .then(data =>{

                if(data.success === true){
                    navigate(from, {replace: true})
                    setLoading(false);
                    // console.log(data.success);

                }else{
    
                    // console.log(user);
                   
                }

                // console.log(data);
                
                
            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event =>{
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        
        const newPage = {...page, update_at: setTime};
        console.log(newPage);
        newPage[field] = value;
        setPage(newPage);
    }



    return (
        <div className='mt-6 container'>
           <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-start-1 col-end-10 ">
                <h2 className='text-lg font-semibold'>All Pages</h2>
            </div>
            <div className="col-end-2 col-span-2 ">

            <Link htmlFor="my-modal-3" to="/user/pages/view" className="btn btn-outline btn-secondary">All Pages</Link>

            </div>
            </div>

{/* Table  */}

            <div className='mt-6'>
            <div className="overflow-x-auto">
            <Form onSubmit={handlePage}>            
                    <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text">Page Name </span>
                    </label>
                    <label className="input-group input-group-vertical"> 
                        <input type="text" onBlur={handleInputBlur} name='page_name' defaultValue={pageShow.data?.page_name ? pageShow.data?.page_name : ""} placeholder="Page Name" className="input input-bordered" />
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Page Link</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" onBlur={handleInputBlur}  name='page_link' defaultValue={pageShow.data?.page_link ? pageShow.data?.page_link : ""} placeholder="Page Link" className="input input-bordered" />
                    </label>
                    </div>
                    <button className="btn btn-secondary my-8">Update</button>
                </Form>
                </div>
            </div>





        </div>
    );
};

export default EditPages;