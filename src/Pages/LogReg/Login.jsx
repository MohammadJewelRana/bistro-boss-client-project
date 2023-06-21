import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {

    const { login } = useContext(AuthContext);

    // const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);

    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login successful',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  navigate(from,{replace:true});


            })

    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            // alert('Captcha Matched');
            setDisable(false)
        }
        else {
            alert('Captcha Does Not Match');
        }
    }

    return (
        <div>
            <Helmet>
                <title>Login | Bistro Boss </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2  lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2  w-full max-w-sm shadow-2xl bg-base-100">




                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha}   type="text" name='captcha' placeholder="Type Captcha" className="input input-bordered" />
                               
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value='Login' name="" id="" />
                            </div>


                        </form>


                        <p><small>New here ? <Link to='/signup'>Create an Account?</Link></small></p>

                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;