import React, { useContext, useState } from 'react';
import { Form } from 'react-daisyui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const Register = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/user/dashboard";
    const [user, setUser] = useState({});

    const handleRegister = event => {
        event.preventDefault();
        // console.log(user);
        fetch('http://localhost:5000/user/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setUserData(data);
                } else {
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    LoginWithEmail(user.data)
                    // console.log(user);
                    navigate(from, { replace: true })
                    setLoading(false);

                }
            })
            .catch(error => console.log(error));
        event.target.reset();
    }

    const handleInputBlur = event => {
        setUserData('');
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user, role: 'user', picture: null, status: 0, created_at: setTime };
        // console.log(newUser);
        newUser[field] = value;

        setUser(newUser);
    }



    return (
        <section>
            <div className="container">
            <div class="grid grid-cols-3 gap-4 justify-center">
                <div></div>
            <div className="">
                        <div className="login-custom-form box-shadow white-bg p-4 p-md-5" style={{ height: "800px" }}>
                            <h2 className="title mb-5">Sign Up</h2>
                            <Form onSubmit={handleRegister}>
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
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input id="form_name" onBlur={handleInputBlur} type="text" name="name" className="px-5 custom-form-control" placeholder=" name" required="required"  />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="custom-form-group">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input id="form_password" onBlur={handleInputBlur} type="tel" name="phone" className="px-5 custom-form-control" placeholder="Phone" required="required" />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="custom-form-group">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input id="form_password" onBlur={handleInputBlur} type="email" name="email" className="px-5 custom-form-control" placeholder="Email" required="required"  />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="custom-form-group">
                                    <label className="label">
                                        <span className="label-text">Password </span>
                                    </label>
                                    <input id="form_password" onBlur={handleInputBlur} type="password" name="password" className="px-5 custom-form-control" placeholder="Password" required="required" />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="custom-form-group">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input id="form_password" onBlur={handleInputBlur} type="password" name="confirmPassword" className=" px-5 custom-form-control" placeholder="Confirm Password" required="required" />
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
                                <button className="custom-btn custom-btn-theme custom-btn-lg"><span>Sign Up</span></button>

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
            </div>
            </div>
        </section>
    );
};

export default Register;