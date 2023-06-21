import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';


const SignUp = () => {

const navigate=useNavigate();

    const {createAccount,updateUserProfile}=useContext(AuthContext);
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        createAccount(data.email,data.password)
        .then(res=>{
            const user=res.user;
            console.log(user);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                 const saveUser={name:data.name,email:data.email};
                // console.log('User profile info updated');
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        reset();
                        Swal.fire(
                            'User Created Successfully',
                            'success'
                          )
                          navigate('/');
                    }
                })
            })
            .catch(error=>console.log(error))
        })
    }



    return (
        <div>
            <Helmet>
                <title>Sign Up | Bistro Boss </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2  lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2  w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
 

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name'
                                    {...register("name")}
                                    placeholder="Enter your name" className="input input-bordered" />
                            </div>


                                                       
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  
                            {...register("url", { required: true })}
                            placeholder="Enter your Photo URL" className="input input-bordered" />

                            {errors.url && <span className='text-red-600 mt-2'>Photo URL field is required</span>}
                    </div>
                    


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password"
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/

                                    })}
                                    className="input input-bordered" />

                                {errors.password?.type === 'required' && <p className='text-red-600 mt-2' > password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600 mt-2' > password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600 mt-2' > password should not be greater than 20 character   </p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600 mt-2' > password  must have one uppercase one lowercase one number and one special characters  </p>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='SignUp' name="" id="" />
                            </div>
                        </form>


                        <p><small>Already have an account? ? <Link to='/login'>go to login page</Link></small></p>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;