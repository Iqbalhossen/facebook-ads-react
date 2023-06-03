import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';
const SingleItem = ({ data, deleteHandle }) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    return (
        <tr>

            <th>1</th>
            <td>{data?.user?.name}</td>

            {data?.accounts === null ? <td className='badge badge-primary'>Not Assign</td> : <td>{data?.accounts} </td>}

            <td><Link to={`https://${data?.page_link}`} target="_blank">{data?.page_link}</Link></td>

            {data?.status === 0 ? <td className="badge badge-accent">Pendding</td> : <td className="badge badge-secondary"> Approved </td>}

            <td>{time}</td>
            <td>

                <Link className="btn btn-primary mr-1" to={`/admin/accounts/assign/${data._id}`}><AiOutlineCheck className='h-6 w-6 text-gray-200'></AiOutlineCheck></Link>
                <button className="btn btn-secondary" onClick={() => deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button>
            </td>


        </tr>
    );
};

export default SingleItem;