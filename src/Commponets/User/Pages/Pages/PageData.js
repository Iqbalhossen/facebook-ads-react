import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";

const PageData = ({data, deleteHandle}) => {

    // const timestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.created_at);

// console.log(data.created_at);

    // console.log(data)
    return (
        
        <tr>
        <th>1</th> 
        <td>{data?.page_name}</td> 
        <td><Link to={`https://${data?.page_link}`} target="_blank">{data?.page_link}</Link></td> 
        <td>{data?.created_at}</td> 
        <td>
            
            <Link className="btn btn-primary mr-1" to={`/user/page/edit/${data._id}`}><AiOutlineEdit className='h-6 w-6 text-gray-200'></AiOutlineEdit></Link>
            <button className="btn btn-secondary" onClick={()=> deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button>
        </td> 
      </tr>
       
    );
};

export default PageData;