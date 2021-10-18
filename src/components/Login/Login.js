import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import { useState } from "react";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
           
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)git 
            .then(result => { })
    }


    return (

        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
                            alt="" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1" onClick={handleGoogleLogin} >
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </div>


                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>


                        <form onSubmit={handleLogin} >

                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3c" className="form-control" onBlur={handleEmailChange} placeholder="Your Email" required />
                            </div>


                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4c" className="form-control" onBlur={handlePasswordChange} placeholder="Password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
                            </div>


                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                            </div>


                        </form>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                <Link className="link-danger" to="/register"> Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;