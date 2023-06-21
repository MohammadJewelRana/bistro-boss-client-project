import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user,loading } = useContext(AuthContext);
    // const token=localStorage.getItem('access-token');
    const [axiosSecure]=useAxiosSecure();

    const { isLoading, refetch , isError, data:cart=[], error } = useQuery({
        queryKey: ['carts', user?.email], //here carts=backend api which search based on email
        enabled:!loading,
       
       
        //using header pass
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }}) //get response based on email
             
        //     return response.json();
        // },


        //using axiosSecure
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user.email}`)  
            return response.data;
        },
    })
    return [cart,refetch];
}

export default useCart;




