import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Commponets/User/Header/Header'
import SideBar from '../../Commponets/User/SideBar/SideBar';

const UserMain = () => {
    return (
       <>
          <div className="app-layout-modern flex flex-auto flex-col">
        <div className="flex flex-auto min-w-0">
            <SideBar></SideBar>
            <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
             <Header></Header>
                <div className="px-5 mx-5 h-full flex flex-auto flex-col justify-between">
                  <Outlet></Outlet>
                </div>
            </div>
        </div>
    </div>
       </>
    );
};

export default UserMain;