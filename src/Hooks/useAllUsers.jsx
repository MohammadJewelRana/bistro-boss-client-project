import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAllUsers = () => {

    const [axiosSecure]=useAxiosSecure();
    const {data: users=[],refetch}=useQuery(['users'],async()=>{
        const res=await axiosSecure.get('/users')
        return res.data;
    })
    return [users,refetch];
};
export default useAllUsers;