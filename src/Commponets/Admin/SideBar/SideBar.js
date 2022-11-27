import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/admin/css/app.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { AiFillAppstore, AiFillFrown } from "react-icons/ai";

const SideBar = () => {
    return (
        <nav className="side-nav">
        <Link to="/admin/dashboard" className="intro-x flex items-center pl-5 pt-4 mt-3">
            <img alt="HTML Admin Template" className="w-6" src="http://tinker-laravel.left4code.com/dist/images/logo.svg" />
            <span className="hidden xl:block text-white text-lg ml-3">
                Tinker
            </span>
        </Link>
        <div className="side-nav__devider my-6"></div>
        <ul>
            
            
            <li>
                <Link to="javascript:;" className="side-menu">
                    <div className="side-menu__icon">
                        <i data-lucide="shopping-bag"></i>
                        <BeakerIcon className="h-6 w-6 text-blue-500"/>
                    </div>
                    <div className="side-menu__title">
                        E-Commerce
                        <div className="side-menu__sub-icon ">
                            <i data-lucide="chevron-down"></i>
                        </div>
                    </div>
                </Link>
                <ul className="">
                    <li>
                        <Link to="http://tinker-laravel.left4code.com/categories-page?layout=side-menu" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Categories
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="http://tinker-laravel.left4code.com/add-product-page?layout=side-menu" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Add Product
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="javascript:;" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Products
                                <div className="side-menu__sub-icon ">
                                    <i data-lucide="chevron-down"></i>
                                </div>
                            </div>
                        </Link>
                        <ul className="">
                            <li>
                                <Link to="http://tinker-laravel.left4code.com/product-list-page?layout=side-menu" className="side-menu">
                                    <div className="side-menu__icon">
                                        <i data-lucide="zap"></i>
                                    </div>
                                    <div className="side-menu__title">Product List</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="http://tinker-laravel.left4code.com/product-grid-page?layout=side-menu" className="side-menu">
                                    <div className="side-menu__icon">
                                        <i data-lucide="zap"></i>
                                    </div>
                                    <div className="side-menu__title">Product Grid</div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="javascript:;" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Transactions
                                <div className="side-menu__sub-icon ">
                                    <i data-lucide="chevron-down"></i>
                                </div>
                            </div>
                        </Link>
                        <ul className="">
                            <li>
                                <Link to="http://tinker-laravel.left4code.com/transaction-list-page?layout=side-menu" className="side-menu">
                                    <div className="side-menu__icon">
                                        <i data-lucide="zap"></i>
                                    </div>
                                    <div className="side-menu__title">Transaction List</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="http://tinker-laravel.left4code.com/transaction-detail-page?layout=side-menu" className="side-menu">
                                    <div className="side-menu__icon">
                                        <i data-lucide="zap"></i>
                                    </div>
                                    <div className="side-menu__title">Transaction Detail</div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="javascript:;" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Sellers
                                <div className="side-menu__sub-icon ">
                                    <i data-lucide="chevron-down"></i>
                                </div>
                            </div>
                        </Link>
                        <ul className="">
                            <li>
                                <Link to="http://tinker-laravel.left4code.com/seller-list-page?layout=side-menu" className="side-menu">
                                    <div className="side-menu__icon">
                                        <i data-lucide="zap"></i>
                                    </div>
                                    <div className="side-menu__title">Seller List</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="http://tinker-laravel.left4code.com/seller-detail-page?layout=side-menu" className="side-menu">
                                    <div className="side-menu__icon">
                                        <i data-lucide="zap"></i>
                                    </div>
                                    <div className="side-menu__title">Seller Detail</div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="http://tinker-laravel.left4code.com/reviews-page?layout=side-menu" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Reviews
                            </div>
                        </Link>
                    </li>
                </ul>
            </li>


            <li>
                <Link to="/admin/Category" className="side-menu">
                    <div className="side-menu__icon">
                        <i data-lucide="inbox"></i>
                        <AiFillAppstore className="h-6 w-6 text-blue-500"/>
                    </div>
                    <div className="side-menu__title">
                        Category
                    </div>
                </Link>
            </li>



            
            
        
           
            <li className="side-nav__devider my-6"></li>
            <li>
                <Link to="javascript:;" className="side-menu">
                    <div className="side-menu__icon">
                    <AiFillFrown className="h-6 w-6 text-blue-500"/>
                    </div>
                    <div className="side-menu__title">
                        Crud
                        <div className="side-menu__sub-icon ">
                            <i data-lucide="chevron-down"></i>
                        </div>
                    </div>
                </Link>
                <ul className="">
                    <li>
                        <Link to="http://tinker-laravel.left4code.com/crud-data-list-page?layout=side-menu" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Data List
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="http://tinker-laravel.left4code.com/crud-form-page?layout=side-menu" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Form
                            </div>
                        </Link>
                    </li>
                </ul>
            </li>


          
            
           
            <li className="side-nav__devider my-6"></li>
           

           
            <li>
                <Link to="javascript:;" className="side-menu">
                    <div className="side-menu__icon">
                    <AiFillFrown className="h-6 w-6 text-blue-500"/>
                    </div>
                    <div className="side-menu__title">
                        Widgets
                        <div className="side-menu__sub-icon ">
                            <i data-lucide="chevron-down"></i>
                        </div>
                    </div>
                </Link>
                <ul className="">
                    <li>
                        <Link to="" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Chart
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Slider
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="side-menu">
                            <div className="side-menu__icon">
                                <i data-lucide="activity"></i>
                            </div>
                            <div className="side-menu__title">
                                Image Zoom
                            </div>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
       
  
    );
};

export default SideBar;