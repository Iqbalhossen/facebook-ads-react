import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Commponets/Home/Footer/Footer';
import Header from '../../Commponets/Home/Header/Header';
import './../../assets/home/css/animate.css';
import './../../assets/home/css/base.css';
import './../../assets/home/css/fontawesome-all.css';
import './../../assets/home/css/shortcodes.css';
import './../../assets/home/css/spacing.css';
import './../../assets/home/css/style.css';
import './../../assets/home/css/responsive.css';

const HomeMain = () => {
    return (
        <>
        <Header></Header>
        <div className="page-wrapper">      
        <Outlet></Outlet>     
        </div>
        <Footer></Footer>  
        </>
     
    );
};

export default HomeMain;