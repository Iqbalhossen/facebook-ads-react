import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Commponets/Home/Footer/Footer';
import Header from '../../Commponets/Home/Header/Header'
const HomeMain = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>   
        </>
    );
};

export default HomeMain;