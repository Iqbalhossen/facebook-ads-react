import React from 'react';
import { Form, Link } from 'react-router-dom';

const Footer = () => {
    return (

        <>

            <footer className="footer white-bg z-index-1 overflow-hidden bg-contain" data-bg-img="images/pattern/01.png">
                <div className="round-p-animation"></div>
                <div className="primary-footer">
                    <div className="container-fluid p-0">

                        <div class="grid grid-cols-3 gap-4">
                            <div className="">
                                <div className="ht-theme-info bg-contain bg-pos-r h-100 dark-bg text-white" data-bg-img="images/bg/02.png">
                                    <div className="footer-logo">
                                        <Link to="index.html">
                                            <img className="img-fluid" src="images/logo-white.png" alt="" />
                                        </Link>
                                    </div>
                                    <p className="mb-3"> Performance oriented theme, Build whatever you like with the Loptus, Loptus is the creative, modern HTML5 Template suitable for Your business.</p> <Link className="btn-simple" to="#"><span>Read More <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                                    <div className="social-icons social-border circle social-hover mt-5">
                                        <h4 className="title">Follow Us</h4>
                                        <ul className="list-inline">
                                            <li className="social-facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                            </li>
                                            <li className="social-twitter"><Link to="#"><i className="fab fa-twitter"></i></Link>
                                            </li>
                                            <li className="social-gplus"><Link to="#"><i className="fab fa-google-plus-g"></i></Link>
                                            </li>
                                            <li className="social-linkedin"><Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </li>
                                            <li className="social-skype"><Link to="#"><i className="fab fa-skype"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 py-8 px-5">
                                <div class="grid grid-cols-2 gap-4">
                                    <div className="col-lg-6 col-md-6 footer-list">
                                        <h4 className="title">Useful Links</h4>
                                        <div class="grid grid-cols-2 gap-4">
                                        <div className="col-sm-5">
                                                <ul className="list-unstyled">
                                                    <li><Link to="about-us.html">About Us</Link>
                                                    </li>
                                                    <li><Link to="service.html">Our Service</Link>
                                                    </li>
                                                    <li><Link to="case-studies-grid-3.html">Case Studies</Link>
                                                    </li>
                                                    <li><Link to="project-grid-3.html">Project</Link>
                                                    </li>
                                                    <li><Link to="faq.html">Faq</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-7">
                                                <ul className="list-unstyled">
                                                    <li><Link to="team.html">Our Team</Link>
                                                    </li>
                                                    <li><Link to="blog-grid-3.html">Blog</Link>
                                                    </li>
                                                    <li><Link to="privacy-policy.html">Privacy Policy</Link>
                                                    </li>
                                                    <li><Link to="terms-and-conditions.html">Terms & Condition</Link>
                                                    </li>
                                                    <li><Link to="contact.html">Contact Us</Link>
                                                    </li>
                                                </ul>
                                            </div>
</div>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                                        <h4 className="title">Contact us</h4>
                                        <ul className="media-icon list-unstyled">
                                            <li>
                                                <p className="mb-0">423B, Road Wordwide Country, USA</p>
                                            </li>
                                            <li><Link to="mailto:themeht23@gmail.com">themeht23@gmail.com</Link>
                                            </li>
                                            <li><Link to="tel:+912345678900">+91-234-567-8900</Link>
                                            </li>
                                            <li><Link to="tel:+912345678900">+91-234-567-8900</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="row mt-5">
                                    <div className="col-lg-10 col-md-12 me-auto">
                                        <div className="align-items-center white-bg box-shadow px-3 py-3 radius d-md-flex justify-content-between">
                                            <h4 className="mb-0">NewsLetter</h4>
                                            <div className="subscribe-form sm-mt-2">
                                                <form id="mc-form" className="group">
                                                    <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />
                                                    <input className="btn btn-theme" type="submit" name="subscribe" value="Subscribe" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>


            <div>
                <div className="secondary-footer">
                    <div className="container">
                        <div className="copyright">
                            <div className="row align-items-center">
                                <div className="col-md-6"> <span>Copyright 2018 | All Rights Reserved</span>
                                </div>
                                <div className="col-md-6 text-md-end sm-mt-2"> <span>Loptus Theme by <Link to="#">ThemeHt</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Footer;