import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-daisyui';
import { CirclesWithBar, ProgressBar } from 'react-loader-spinner';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import Amount from './Amount';

const Amounts = () => {


    // Add Page Section Start 

    const { isLoading, setLoading } = useContext(AuthContext);

    // console.log(authUser._id);

    const [page, setPage] = useState({});
    const [addpage, setaddPage] = useState({});
    const [amount, setAmount] = useState({});
    const [amountShow, setAmountShow] = useState([]);
    const [days, setDays] = useState([]);


    const handleDays = event => {
        event.preventDefault();
        // console.log(user);
        fetch('http://localhost:5000/days/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(page)
        })
            .then(res => res.json())
            .then(data => {
                setaddPage(data);
                // console.log(data);


            })
            .catch(error => <></>);
        event.target.reset();
    }
    const handleAmounts = event => {
        event.preventDefault();
        setLoading(true);
        // console.log(user);
        fetch('http://localhost:5000/amounts/add', {
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

        const newPage = { ...page, status: 0, created_at: setTime, update_at: null };
        console.log(newPage);
        newPage[field] = value;
        setPage(newPage);
    }



    // Add Page Section End



    // View Page Section Start 


    useEffect(() => {
        fetch(`http://localhost:5000/days/view`)
            .then(res => res.json())
            .then(data => {
                setDays(data);
            });

    }, [addpage])

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/amounts/view")
            .then(res => res.json())
            .then(data => {
                setAmountShow(data);
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
                // console.log(data.data._id)

                const remainingPage = amount.filter(p => p._id !== data.data._id);
                setAmountShow(remainingPage);
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

                    {isLoading ? <div className='loader-store'>
                        <ProgressBar />
                    </div> : ""}

                    <div class="flex">
                        <label htmlFor="my-modal-2" className="btn btn-outline btn-secondary">Add Days</label>

                        <label htmlFor="my-modal-3" className="btn btn-outline btn-secondary">Add Amounts</label>

                    </div>


                </div>
            </div>

            {/* Table  */}

            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Days</th>
                                <th>Amount</th>
                                <th>created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {isLoading ? <div className='loader'>
                            <CirclesWithBar />
                        </div> : ""}
                        <tbody>
                            {amountShow.length === 0 && !isLoading ? <tr><th colSpan={6} className="text-center py-4">Data Not available</th></tr> : ''}

                            {

                                amountShow.map(data => <Amount data={data} key={data._id} deleteHandle={deleteHandle}></Amount>)

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



            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add Amounts</h3>
                    <div className='w-80 mx-auto my-8'>
                        <Form onSubmit={handleAmounts}>




                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text">Select Days</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <select name='days_id' className="select w-full max-w-xs" onChange={handleInputBlur}>
                                        {<option value="">choise from list</option>}
                                        {days.map((data) => {
                                            return (
                                                <option key={data._id} value={data._id}>
                                                    {data.days}</option>
                                            );
                                        })
                                        }
                                    </select>

                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amounts</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" onBlur={handleInputBlur} name='amount' placeholder="Amounts" className="input input-bordered" />
                                </label>
                            </div>
                            <button className="btn btn-secondary my-8">Add</button>
                        </Form>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">


                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add Days </h3>
                    <div className='w-80 mx-auto my-8'>
                        <Form onSubmit={handleDays}>




                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text">Days</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" onBlur={handleInputBlur} name='days' placeholder="days" className="input input-bordered" />
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

export default Amounts;