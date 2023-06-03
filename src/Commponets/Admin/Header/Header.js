import React, { useContext, useState } from 'react';
import { Button, Dropdown } from 'react-daisyui';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './../../../assets/admin/css/apexcharts.css';
import './../../../assets/admin/css/style.css';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Header = () => {
  const { authUser, setUser} = useContext(AuthContext);

  const [toggolebtn , setToggolebtn] = useState(false);

  const navigate= useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const toggolebtnHandle = () =>{
      if(toggolebtn === false){
          setToggolebtn(true)
      }else{
          setToggolebtn(false)
      }
      // console.log(toggolebtn);
  }

  const SignOut = () =>{
  localStorage.removeItem("ID");
  setUser(null);
  navigate(from, { replace: true });
 }

    return (
      <>
      <header className="header border-b border-gray-200 dark:border-gray-700">
               <div className="header-wrapper h-16">
                   <div className="header-action header-action-start">
                       <div className="header-action-item header-action-item-hoverable">
                           <div className="text-2xl">
                              {/* icon hobe  */}
                           </div>
                       </div>
                       <div className="header-action-item header-action-item-hoverable text-2xl">
                          {/* icon hobe  */}
                       </div>
                   </div>
                   <div className="header-action header-action-end">
                       <div className="dropdown">
                           <div className="dropdown-toggle"  >
                               <div className="header-action-item header-action-item-hoverable flex items-center">
                                   <span className="avatar avatar-circle" >
                                       <img className="avatar-img avatar-circle" src="/img/countries/us.png" loading="lazy" alt=""/>
                                   </span>
                               </div>
                           </div>
                       </div>
                       <div className="dropdown">
                           <div className="dropdown-toggle" id="dropdown-toggle-9-jd8MxVAmqt">
                               <div className="text-2xl header-action-item header-action-item-hoverable">
                                   <span className="badge-wrapper">
                                       <span className="badge-dot badge-inner"></span>
                                      {/* icon hobe  */}
                                   </span>
                               </div>
                           </div>
                       </div>
                       <div className="text-2xl header-action-item header-action-item-hoverable">
                           {/* icon hobe  */}
                       </div>
                       <div>
                           <div className="dropdown">
                               <div onClick={toggolebtnHandle} className="dropdown-toggle" >
                                   <div className="header-action-item flex items-center gap-2">
                                       <span className="avatar avatar-circle avatar-circle2 ">
                                           <img className="avatar-img avatar-circle" src={authUser?.picture ? authUser?.picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghKS1A6_nDoxbH2_cmxzVJNy90M8tLu99_g&usqp=CAU'} loading="lazy" alt=""/>
                                       </span>
                                       <div className="hidden md:block">
                                           {/* <div className="text-xs capitalize">admin</div> */}
                                           <div className="font-bold">{authUser?.name}</div>
                                       </div>
                                   </div>
                               </div>
                               <ul className={toggolebtn ? 'avartar-position avatar-toggole pb-2' : 'dropdown-menu bottom-end hidden'}>
                           <li id="menu-item-92-I1NtrFoZVO" className="menu-item-header">
                               <div className="py-2 px-3 flex items-center gap-2"><span className="avatar avatar-circle avatar-md"><img className="avatar-img avatar-circle" src={authUser?.picture ? authUser?.picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghKS1A6_nDoxbH2_cmxzVJNy90M8tLu99_g&usqp=CAU'} loading="lazy" alt='' /></span>
                                   <div>
                                       <div className="font-bold text-gray-900 dark:text-gray-100">{authUser?.name}</div>
                                       <div className="text-xs">{authUser?.email}</div>
                                   </div>
                               </div>
                           </li>
                           <li id="menu-item-93-A87MoAhgWA" className="menu-item-divider"></li>
                           <li className="menu-item menu-item-light menu-item-hoverable mb-1 avatar2" ><Link className="flex gap-2 items-center" href="/app/account/settings/profile"><span className="text-xl opacity-50">
                           {/* icon  */}
                               
                               </span><span>Profile</span></Link></li>
                           <li className="menu-item menu-item-light menu-item-hoverable mb-1 avatar2" ><Link className="flex gap-2 items-center" href="/app/account/settings/profile"><span className="text-xl opacity-50">
                               
                           {/* icon  */}
                               
                               </span><span>Account Setting</span></Link></li>
                           <li className="menu-item menu-item-light menu-item-hoverable mb-1 avatar2" ><Link className="flex gap-2 items-center" href="/app/account/activity-log"><span className="text-xl opacity-50">
                               
                           {/* icon  */}
                               
                               </span><span>Activity Log</span></Link></li>
                           <li id="menu-item-97-LqqP6TOVXW" className="menu-item-divider"></li>
                           <li className="menu-item menu-item-light menu-item-hoverable mb-1 avatar2" >
                                    <div className="flex gap-2 items-center"onClick={SignOut}><span className="text-xl opacity-50">
                                    
                                {/* icon  */}
                                    
                                    </span>
                                    
                                    <span>Sign Out</span></div></li>
                                <li id="menu-item-97-LqqP6TOVXW" className="menu-item-divider"></li>
                     </ul>
                           </div>
                 
                       </div>
                       
                   </div>
               </div>
               
           </header>

          

   </>  
    
    );
};

export default Header;