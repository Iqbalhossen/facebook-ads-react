import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';
const SingleItem = ({data, deleteHandle}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")

    if(data.status !== 0 && data.status !== 1 && data.status !== 5){
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
              {data?.status === 2 ? <div className="badge badge-primary">Pendding</div> : ''}
                {data?.status === 3 ? <div className="badge badge-secondary">Processing</div> : ''}
                {data?.status === 4 ? <div className="badge badge-success">complete</div> : ''}
          
          </td> 
 
      </tr>
    );

    }
  
};

export default SingleItem;