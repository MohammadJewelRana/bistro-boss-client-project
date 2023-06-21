import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user}=useContext(AuthContext);
    // const token=localStorage.getItem('access-token');
    const [axiosSecure]=useAxiosSecure();

    const { isLoading:isAdminLoading, refetch , data:isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email], 
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/admin/${user.email}`)  
            return response.data.admin;
        },
    })

    return [isAdmin,refetch,isAdminLoading];
};

export default useAdmin;