import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location=useLocation();
    const {user,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin();
    if(user && isAdmin){
        return children;
    }
    if(loading || isAdminLoading){
      return  <progress className="progress w-56"></progress>
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;