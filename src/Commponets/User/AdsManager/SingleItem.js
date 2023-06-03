import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';
const SingleItem = ({ data, deleteHandle }) => {

    const [page, setPage] = useState({});
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")

    // console.log(page);

    return (
        <tr>
            <th>1</th>
            <td>{JSON.parse(data.page).page_name}</td>
            <td><Link to={`https://${JSON.parse(data.page).page_name}`} target="_blank">{JSON.parse(data.page).page_link}</Link></td>
            <td>{JSON.parse(data.days).days} days</td>
            <td>{data?.budget}</td>
            <td>{data?.PaymentType}</td>
            <td>
                {data?.status === 0 ? <div className="badge badge-primary">Pendding</div> : ''}
                {data?.status === 1 ? <div className="badge badge-secondary">Processing</div> : ''}
                {data?.status === 2 ? <div className="badge badge-success">complete</div> : ''}
            </td>
            <td>{time}</td>
            <td>
                {data?.status === 0 ? <><Link className="btn btn-primary mr-1" to={`/user/page/edit/${data._id}`}><AiOutlineEdit className='h-6 w-6 text-gray-200'></AiOutlineEdit></Link>
                    <button className="btn btn-secondary" onClick={() => deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button></> : ''}

            </td>
        </tr>
    );
};

export default SingleItem;