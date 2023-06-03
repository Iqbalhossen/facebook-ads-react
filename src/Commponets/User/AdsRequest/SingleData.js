import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';
const SingleData = ({data, deleteHandle}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    return (
        <tr>
        <th>1</th> 
        <td>{JSON.parse(data?.page).page_name}</td> 
        <td><Link to={`https://${JSON.parse(data?.page).page_link}`} target="_blank">{JSON.parse(data?.page).page_link}</Link></td> 
        <td>{JSON.parse(data?.days).days} days</td> 
        <td>{data?.budget}</td> 
        <td>{data?.selling_budget}</td> 
        <td>{time}</td> 
        <td>Pendding</td> 
        <td>
            
            <Link className="btn btn-primary mr-1" to={`/user/page/edit/${data._id}`}><AiOutlineEdit className='h-6 w-6 text-gray-200'></AiOutlineEdit></Link>
            <button className="btn btn-secondary" onClick={()=> deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button>
        </td> 
      </tr>
    );
};

export default SingleData;