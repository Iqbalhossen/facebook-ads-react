import React from 'react';
import { Button, Dropdown } from 'react-daisyui';
import { Link } from 'react-router-dom';
import '../../../assets/admin/css/app.css';

const Header = () => {
    return (
        <>
        <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">Application</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
      {/* <!-- END: Breadcrumb -->
                <!-- BEGIN: Search --> */}
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">
                        {/* <input type="text" className="search__input form-control border-transparent" placeholder="Search..."> */}
                        <i data-lucide="search" className="search__icon dark:text-slate-500"></i>
                    </div>
                    <Link className="notification sm:hidden" to="">
            <i data-lucide="search" className="notification__icon dark:text-slate-500"></i>
        </Link>
                    
                </div>
                {/* <!-- END: Search -->
                <!-- BEGIN: Notifications --> */}
                <div className="intro-x dropdown mr-auto sm:mr-6">
                    <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                        <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i>
                    </div>
                    {/* <!-- <div className="notification-content pt-2 dropdown-menu">
                       
                    </div> --> */}
                </div>
                {/* <!-- END: Notifications -->
                <!-- BEGIN: Account Menu --> */}
                <div className="intro-x dropdown w-8 h-8">
                <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
              </div>
            </Button>
            <Dropdown.Menu className="w-52 menu-compact">
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
                </div>
                {/* <!-- END: Account Menu --> */}
         </>    
    
    );
};

export default Header;