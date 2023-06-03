import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';

const SingleItem = ({data, AdsRequestAccepHandle, AdsRequestRejectHandle}) => {

    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    const [user, setUser] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/user/show/user/${data.user_id}`)
        .then(res=> res.json())
        .then(data => setUser(data))

    })



    return (
        <tr>
        <th>1</th> 
        <th>{user.name}</th> 
        <td>{JSON.parse(data?.page).page_name}</td> 
        <td><Link to={`https://${JSON.parse(data?.page).page_link}`} target="_blank">{JSON.parse(data?.page).page_link}</Link></td> 
        <td>{JSON.parse(data?.days).days} days</td> 
        <td>{data?.budget}</td> 
        <td>{data?.selling_budget}</td> 
        <td>{time}</td> 
        <td>
            
            <button onClick={()=>AdsRequestAccepHandle(data._id)} className="btn btn-primary mr-1" ><span>Accept</span></button>
            <button className="btn btn-secondary" onClick={()=>AdsRequestRejectHandle(data._id)}><span>Reject</span></button>
        </td> 
      </tr>
    );
};

export default SingleItem;