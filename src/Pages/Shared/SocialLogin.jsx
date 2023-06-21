import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    
    const {googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(res=>{
            const loggedUser=res.user;
            const saveUser={name:loggedUser.displayName,email:loggedUser.email};
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
            .then(res=>res.json())
            .then(data=>{  
                      navigate(from,{replace:true})
            })
        })
    }


    return (
        <div>
            <div className="divider"></div>

            <div className='w-full text-center mb-4 '>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>

            </div>

        </div>
    );
};

export default SocialLogin;