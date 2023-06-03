import React, { useContext, useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
const Accounts = () => {

    // Add Page Section Start 

    const { LoginWithEmail, authUser, isLoading, setLoading } = useContext(AuthContext);

    // console.log(authUser);

    const [page, setPage] = useState({});
    const [addpage, setaddPage] = useState({});
    const [pageShow, setPageShow] = useState([]);

    const handlePage = event => {
        event.preventDefault();
        setLoading(true);
        console.log(page);
        fetch('http://localhost:5000/accounts/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(page)
        })
            .then(res => res.json())
            .then(data => {
                setaddPage(data);
                setLoading(false);

                // console.log(data);


            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event => {
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;

        const newPage = { ...page, accounts: null, user_id: authUser._id, user: authUser, status: 0, created_at: setTime, update_at: null };
        // console.log(newUser);
        newPage[field] = value;
        setPage(newPage);
    }



    // Add Page Section End



    // View Page Section Start 


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/accounts/view/${authUser._id}`)
            .then(res => res.json())
            .then(data => {
                setPageShow(data);
                setLoading(false);
            });

    }, [addpage])

    // console.log(pageShow);


    // View Page Section End 



    const deleteHandle = (id) => {

        // console.log(id);
        setLoading(true);
        fetch(`http://localhost:5000/page/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
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
                    <label htmlFor="my-modal-3" className="btn btn-outline btn-secondary">Add Accounts</label>


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
                                <th>Status</th>
                                <th>created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {isLoading ? <tr><th colSpan={6} className="py-4 text-center"><CirclesWithBar /></th></tr> : ""}
                            {pageShow.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}


                            {

                                pageShow.map(data => <SingleItem data={data} key={data._id} deleteHandle={deleteHandle}></SingleItem>)

                            }


                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ID</th>
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


            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add Accounts </h3>
                    <div className='w-80 mx-auto my-8'>
                        <Form onSubmit={handlePage}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Page Link</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" onBlur={handleInputBlur} name='page_link' placeholder="Page Link" className="input input-bordered" />
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
export default Accounts;