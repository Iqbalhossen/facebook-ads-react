import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiTwotoneRest } from "react-icons/ai";
import dateFormat from 'dateformat';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
const SingleItem = ({ data, deleteHandle }) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy")
    const { authUser, isLoading, setLoading } = useContext(AuthContext);
    const [user, setUser] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/user/show/user/${data.user_id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });

    }, [])
    if (data.status === 3) {

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
                    <Link className="btn btn-primary mr-1" to={`/admin/ads/proccessing/${data._id}`}><AiFillEye className='h-6 w-6 text-gray-200'></AiFillEye></Link>
                </td>

            </tr>
        );

    }

};

export default SingleItem;