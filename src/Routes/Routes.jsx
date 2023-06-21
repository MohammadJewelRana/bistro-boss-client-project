import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/MenuPage/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/LogReg/Login";
import SignUp from "../Pages/LogReg/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/Admin/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/Admin/ManageItem/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
 

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },

    {
      path:'/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
 
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
 
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
 
          path:'additem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {  
          path:'manageitems',
          element: <AdminRoute> <ManageItems></ManageItems></AdminRoute>
        }
        ,{
          path:'payment',
          element:<Payment></Payment>
        }
      ]
    }
  ]);

  export default router;