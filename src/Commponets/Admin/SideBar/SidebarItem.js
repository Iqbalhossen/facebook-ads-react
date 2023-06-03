import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../../assets/admin/css/apexcharts.css';
import './../../../assets/admin/css/style.css';
import { AiOutlineDown } from "react-icons/ai";

const SidebarItem = ({item}) => {
    const [toggolebtn , setToggolebtn] = useState(false);

    const toggolebtnHandle = () =>{
        if(toggolebtn === false){
            setToggolebtn(true)
        }else{
            setToggolebtn(false)
        }
        // console.log(toggolebtn);
    }

    if(item.childrens){

        return (
            <div className="menu-collapse">
                <div onClick={toggolebtnHandle} className="menu-collapse-item menu-collapse-item-transparent mb-2">
                    <span className="flex items-center">
                        <span className="text-2xl ltr:mr-2 rtl:ml-2">
                            {/* icon  */}
                            
                        </span>
                        <span> {item.title}  </span>
                    </span>
                    <span className="text-lg mt-1 menu-collapse-span" >
                    <AiOutlineDown></AiOutlineDown>
                    </span>
                </div>
                <ul className={toggolebtn ? 'menu-collapse-ul2' : 'menu-collapse-ul'} >

                { item?.childrens.map((child, index) => 

                <div key={index} className="menu-item menu-item2 menu-item-transparent  menu-item-hoverable" >
                        <Link className="h-full w-full flex items-center" to={child.path}>
                        <span >{child.title}</span>
                        </Link>
                    </div>

    ) }

        

    </ul>
    </div>
        );

     }else{

        return (
            <Link to={item.path}>
            <div className="menu-collapse-item menu-collapse-item-transparent mb-2">
                  <span className="flex items-center">
                            <span className="text-2xl ltr:mr-2 rtl:ml-2">
                                {/* icon hobe  */}
                            </span>
                            <span>{item.title}</span>
                        </span>
                    </div>
                    </Link>
        );

    }
};


export default SidebarItem;