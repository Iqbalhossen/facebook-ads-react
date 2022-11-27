import React from 'react';
import {Outlet } from 'react-router-dom';
import Header from '../../Commponets/Admin/Header/Header';
import MobileMenu from '../../Commponets/Admin/MobileMenu/MobileMenu';
import SideBar from '../../Commponets/Admin/SideBar/SideBar';

const AdminMain = () => {
    return (
        <div className='bg-amber-500'>
        <MobileMenu></MobileMenu>
        <div className="flex mt-[4.7rem] md:mt-0 overflow-hidden">
        <SideBar></SideBar>
        
        
        <div className="content">
            {/* <!-- BEGIN: Top Bar --> */}
            <div className="top-bar -mx-4 px-4 md:mx-0 md:px-0">
                {/* <!-- BEGIN: Breadcrumb --> */}
               <Header></Header>
                
            </div>
            {/* <!-- END: Top Bar --> */}
            <Outlet></Outlet>
                </div>
        {/* <!-- END: Content --> */}
        
        </div>
            
        </div>
    );
};

export default AdminMain;