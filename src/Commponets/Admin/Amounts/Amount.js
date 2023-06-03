import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';

const Amount = ({data, deleteHandle}) => {
    const [daysShow, setDaysShow] = useState({});
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    useEffect(()=>{
        fetch(`http://localhost:5000/days/view/${data.days_id}`)
        .then(res=>res.json())
        .then(data => {
            setDaysShow(data);
        });

    },[])
    return (

        <tr>
        <th>1</th> 
        <td>{`${daysShow.days} Days`}</td> 
        <td>{data?.amount}</td> 
        <td>{time}</td> 
        <td>
            
            <Link className="btn btn-primary mr-1" to={`/user/page/edit/${data._id}`}><AiOutlineEdit className='h-6 w-6 text-gray-200'></AiOutlineEdit></Link>
            <button className="btn btn-secondary" onClick={()=> deleteHandle(data._id)}><AiTwotoneRest className='h-6 w-6 text-gray-200'></AiTwotoneRest></button>
        </td> 
      </tr>
    );
};

export default Amount;