import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const useAxiosSecure = () => {
 
    const {logout}=useContext(AuthContext);//get logout
    const navigate=useNavigate();//navigate

    //set default path
    const axiosSecure=axios.create({
        baseURL :'http://localhost:5000',
    })


    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token=localStorage.getItem('access-token');//get token
            if(token){
                config.headers.Authorization=`Bearer ${token}`;
            }
            return config;
        });

        //check status
        axiosSecure.interceptors.response.use(
            (response)=>response,
            async (error)=>{
                if(error.response && (error.response.status===401 || error.response.status===403)){
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        
        );

    },[logout,navigate,axiosSecure]);//dependency

    return [axiosSecure];//return the axiosSecure

};

export default useAxiosSecure;