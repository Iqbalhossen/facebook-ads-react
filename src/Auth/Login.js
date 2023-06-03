import React, { useContext, useState } from 'react';
import { Form } from 'react-daisyui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const Login = () => {

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const adminFrom = location.state?.from?.pathname || "/admin/dashboard";
    const userFrom = location.state?.from?.pathname || "/user/dashboard";
    const managerFrom = location.state?.from?.pathname || "/manager/dashboard";
    const staffFrom = location.state?.from?.pathname || "/staff/dashboard";

    const [user, setUser] = useState({});

    const handleLogin = event => {
        event.preventDefault();
        setLoading(true);
        // console.log(user);
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setUserData(data);
                } else {
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    LoginWithEmail(user.data)

                    if (user.data.role === "user") {
                        navigate(userFrom, { replace: true });
                    }

                    else if (user.data.role === "admin") {
                        navigate(adminFrom, { replace: true });
                    }
                    else if (user.data.role === "manager") {
                        navigate(managerFrom, { replace: true });
                    }
                    else if (user.data.role === "staff") {
                        navigate(staffFrom, { replace: true });
                    }


                    else {

                    }

                    setLoading(false);

                }


            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    // console.log("context api : ", authUser);

    return (
        <section>
            <div className="container">

            <div class="grid grid-cols-3 gap-4 justify-center">
                <div></div>
            <div className="">
                        <div className="login-custom-form box-shadow white-bg p-4 p-md-5 px-5" style={{ height: "500px", padding: "50px !important" }}>
                            <h2 className="title mb-5">Login</h2>
                            <Form onSubmit={handleLogin}>
                                <div className="messages">
                                    {userData.message &&
                                        <div className={`${userData.success === false ? "alert alert-error shadow-lg" : "alert alert-success shadow-lg"}`}>
                                            <div>
                                                {userData.success === false ? <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}

                                                <span>{userData.message}</span>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="custom-form-group">
                                    <input id="form_name" onBlur={handleInputBlur} type="email" name="email" className="custom-form-control px-5" placeholder="Email" required="required" />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="custom-form-group">
                                    <input id="form_password" onBlur={handleInputBlur} type="password" name="password" className="custom-form-control px-5" placeholder="Password" required="required"  />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="custom-form-group mt-4 mb-5">
                                    <div className="remember-checkbox d-sm-flex align-items-center justify-content-between">
                                        <div className="custom-form-check">
                                            <input className="custom-form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="custom-form-check-label" for="flexCheckDefault">Remember me</label>
                                        </div> <Link href="#">Forgot Password?</Link>
                                    </div>
                                </div> 
                                <button className="custom-btn custom-btn-theme custom-btn-lg"><span>Sign In</span></button>
                                
                            </Form>
                            {/* <div className="social-icons fullwidth social-colored mt-5 text-center clearfix">
                  <h5 className="text-green mb-3">Login with Social</h5>
                  <ul className="list-inline">
                    <li className="social-facebook"><Link href="#">Facebook</Link>
                    </li>
                    <li className="social-twitter"><Link href="#">Twitter</Link>
                    </li>
                    <li className="social-gplus xs-mt-1"><Link href="#">Google Plus</Link>
                    </li>
                  </ul>
                </div> */}
                        </div>
                    </div>
                    <div>

                    </div>
</div>

                <div className="row justify-content-center text-center">
                    
                </div>
            </div>
        </section>

    );
};

export default Login;