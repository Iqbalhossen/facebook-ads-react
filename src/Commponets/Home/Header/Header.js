import React, { useContext } from 'react';
import { Button, Dropdown,  Menu, Navbar } from 'react-daisyui';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';



const Header = () => {
  const { authUser, setUser} = useContext(AuthContext);

  // const navigate= useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/login";

  const LogOutUser = () =>{
  localStorage.removeItem("ID");
  setUser(null);
  return <Navigate to='/login' ></Navigate>
 }

    return (
      <>
     <header id="site-header" className="">
  <div id="header-wrap">
    <div className="container">
      <nav className="navbar navbar-expand-lg px-8">
            <Link className="navbar-brand logo" to="/">
              <img id="logo-img" className="img-fluid" src="https://boostingbd.quickservicesit.com/assets/img/header/logo.png" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto position-relative">
                
                <li className="nav-item dropdown"> <Link className="nav-link active dropdown-toggle" to="#" data-bs-toggle="dropdown">Home</Link>
             
                </li>
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Pages</Link>
                </li>
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Services</Link>
                </li>
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Project</Link>
                </li>
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">News</Link>

                </li>
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Contact</Link>             
                </li>
              </ul>
            </div>
            <div className="right-nav align-items-center d-flex justify-content-end">
              
             
              { authUser?._id ? "" :<Link className="custom-btn custom-btn-white custom-btn-sm" to="/login">Login</Link> }
              { authUser?._id ? "" :<Link className="custom-btn custom-btn-white custom-btn-sm" to="/register">Register</Link> }

              <div className="search">
                <div className="search-content">
                  <div className="search-button"> <i className="fas fa-search"></i>
                  </div>
                  <form id="search-form" className="search-form">
                    <input type="search" className="search-input" placeholder="Search Here..." />
                  </form>
                </div>
              </div>
            </div>
          </nav>
    </div>
  </div>
</header>


{/* 
<nav id="ht-main-nav"> <Link to="#" className="ht-nav-toggle active"><span></span></Link>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <img className="img-fluid side-logo mb-3" src="images/logo.png" alt="" />
        <p className="mb-5">Loptus - Digital Marketing Agency Responsive HTML5 Template is Most PowerFull template 2018 For Everyone, Start working with an company that provide everything you need to generate awareness.</p>
        <div className="form-info">
          <h4 className="title">Contact info</h4>
          <ul className="contact-info list-unstyled mt-4">
            <li className="mb-4"><i className="flaticon-location"></i><span>Address:</span>
              <p>423B, Road Wordwide Country, USA</p>
            </li>
            <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><Link to="tel:+912345678900">+91-234-567-8900</Link>
            </li>
            <li><i className="flaticon-email"></i><span>Email</span><Link to="mailto:themeht23@gmail.com"> themeht23@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="social-icons social-colored mt-5">
          <ul className="list-inline">
            <li className="mb-2 social-facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link>
            </li>
            <li className="mb-2 social-twitter"><Link to="#"><i className="fab fa-twitter"></i></Link>
            </li>
            <li className="mb-2 social-linkedin"><Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            </li>
            <li className="mb-2 social-gplus"><Link to="#"><i className="fab fa-google-plus-g"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav> */}

      </>
    );
};

export default Header;