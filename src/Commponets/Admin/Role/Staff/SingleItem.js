import React from 'react';
import { AiOutlineEdit, AiTwotoneRest, AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

const SingleItem = ({data, deleteHandle}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    return (
        <tr>
        <th>1</th> 
        <td>{data.name}</td> 
        <td>{data.email}</td> 
        <td>{data?.phone}</td> 
        <td>{data?.status === 0 ? <div className="badge badge-primary">Active</div> : <div className="badge">Disable</div>}</td> 
        <td>{time}</td> 
        <td>
            
            <Link className="btn btn-primary mr-1" to={`/user/page/edit/${data._id}`}><AiOutlineEdit className='h-6 w-6 text-gray-200'></AiOutlineEdit></Link>
            <button className="btn btn-secondary mr-1" onClick={()=> deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button>
            {

                data.status === 0 ? <button className="btn btn-danger" alt="Disable Now" onClick={()=> deleteHandle(data._id)}><AiOutlineDown className='h-6 w-6 text-gray-200'></AiOutlineDown></button> : <button className="btn btn-error" onClick={()=> deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button>
            }
        </td> 
      </tr>
    );
};

export default SingleItem;