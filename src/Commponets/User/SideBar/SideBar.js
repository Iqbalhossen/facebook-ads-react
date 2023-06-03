import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../../assets/admin/css/apexcharts.css';
import './../../../assets/admin/css/style.css';
import { AiOutlineDown } from "react-icons/ai";
import SidebarItem from './SidebarItem';
import items from "./data.json"

const SideBar = () => {

    return (
        <div className="side-nav side-nav-transparent side-nav-expand" >
        <div className="side-nav-header">
            <div className="logo px-6">
                <Link to="/user/dashboard">
                <img src="https://elstar.themenate.net/img/logo/logo-light-full.png" alt="Elstar logo" />
                </Link>
                </div>
        </div>
        <div className="side-nav-content">

        <div className="side-nav-content-down">
                <div className="side-nav-content-down2">
                    <nav className="menu menu-transparent px-4 pb-4">

                        <div className="menu-group">
                            {/* <div className="menu-title menu-title-transparent" id="entity-header-1-sMjorcXbwO">Apps</div> */}
                            <ul>

                            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
      

                            </ul>
                        </div>
                     
                  
                      
                    </nav>
                </div>
                <div className="navbar-content">
                    <div className="navbar-content2"></div>
                </div>
                <div className="navbar-content3">
                    <div className="navbar-content4"></div>
                </div>
            </div>


       


        </div>
    </div>
  
    );
};

export default SideBar;