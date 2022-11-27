import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Commponets/User/Header/Header'

const UserMain = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default UserMain;