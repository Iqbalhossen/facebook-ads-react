import React from 'react';
import { Link } from 'react-router-dom';
import './../../../assets/admin/css/app.css';

const MobileMenu = () => {
    return (
        <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <Link to="" className="flex mr-auto">
            <img alt="" className="w-6" src="http://tinker-laravel.left4code.com/dist/images/logo.svg" />
        </Link>
            <Link to="javascript:;" className="mobile-menu-toggler">
            <i data-lucide="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i>
        </Link>
        </div>
        <div className="scrollable">
            <Link to="javascript:;" className="mobile-menu-toggler">
            <i data-lucide="x-circle" className="w-8 h-8 text-white transform -rotate-90"></i>
        </Link>
            <ul className="scrollable__content py-2">
               
               
                <li>
                    <Link to="javascript:;" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="shopping-bag"></i>
                        </div>
                        <div className="menu__title">
                            E-Commerce
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="http://tinker-laravel.left4code.com/categories-page?layout=side-menu" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Categories
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="http://tinker-laravel.left4code.com/add-product-page?layout=side-menu" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Add Product
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="javascript:;" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Products
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="http://tinker-laravel.left4code.com/product-list-page?layout=side-menu" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Product List</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://tinker-laravel.left4code.com/product-grid-page?layout=side-menu" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Product Grid</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="javascript:;" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Transactions
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="http://tinker-laravel.left4code.com/transaction-list-page?layout=side-menu" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Transaction List</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://tinker-laravel.left4code.com/transaction-detail-page?layout=side-menu" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Transaction Detail</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="javascript:;" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Sellers
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="http://tinker-laravel.left4code.com/seller-list-page?layout=side-menu" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Seller List</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://tinker-laravel.left4code.com/seller-detail-page?layout=side-menu" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Seller Detail</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="http://tinker-laravel.left4code.com/reviews-page?layout=side-menu" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Reviews
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>


              
               
                <li>
                    <Link to="http://tinker-laravel.left4code.com/point-of-sale-page?layout=side-menu" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="credit-card"></i>
                        </div>
                        <div className="menu__title">
                            Point of Sale
                        </div>
                    </Link>
                </li>

              
             
                <li className="menu__devider my-6"></li>
                <li>
                    <Link to="javascript:;" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="edit"></i>
                        </div>
                        <div className="menu__title">
                            Crud
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="http://tinker-laravel.left4code.com/crud-data-list-page?layout=side-menu" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Data List
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="http://tinker-laravel.left4code.com/crud-form-page?layout=side-menu" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Form
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>


            </ul>
        </div>
    </div>
    );
};

export default MobileMenu;