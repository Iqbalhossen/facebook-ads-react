import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';

const SingleItem = ({data}) => {
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
        <td>
            Reject
            
        </td> 
      </tr>
    );
};

export default SingleItem;