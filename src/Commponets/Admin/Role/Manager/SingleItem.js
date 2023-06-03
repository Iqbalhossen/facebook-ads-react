import React, { useContext, useState } from 'react';
import { AiOutlineEdit, AiTwotoneRest, AiOutlineDown, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';

const SingleItem = ({data, deleteHandle}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [user, setUser] = useState([]);

    const handleActive = (id) => {
        setLoading(true);
        //  console.log({...AdsRequest, image:image});

        fetch(`http://localhost:5000/user/active/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {

                // console.log(data.success);
                if (data.success === true) {
                   
                    setLoading(false);
                }


            })
            .catch(error => <></>);
    }

    const handleBanned = (id) => {
        setLoading(true);
        //  console.log({...AdsRequest, image:image});

        fetch(`http://localhost:5000/user/banned/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {

                // console.log(data.success);
                if (data.success === true) {
                   
                    setLoading(false);
                }


            })
            .catch(error => <></>);
    }

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

                data.status === 0 ? <button className="btn btn-error" alt="Disable Now" onClick={()=> handleBanned(data._id)}><AiOutlineDown className='h-6 w-6 text-gray-200'></AiOutlineDown></button> : <button className="btn btn-success" onClick={()=> handleActive(data._id)}><AiOutlineArrowUp className='h-6 w-6 text-gray-200'></AiOutlineArrowUp></button>
            }
        </td> 
      </tr>
    );
};

export default SingleItem;