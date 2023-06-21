import React from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
 

const Dashboard = () => {

    const [cart] = useCart();

    //TODO :load data from the server
    // const isAdmin = true;

  const [isAdmin]=useAdmin();
    console.log(isAdmin);

    return (
        <div className=''>
            <div className="drawer  drawer-mobile   ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center  mt-12 ">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054] ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4   text-base-content">

                        {
                            isAdmin ?
                                <>

                                    <li> <NavLink to='/dashboard/home'><FaHome    ></FaHome>Admin Home</NavLink></li>
                                    <li> <NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add An Items</NavLink></li>
                                    <li> <NavLink to='/dashboard/manageitems'><FaWallet></FaWallet> Manage Items</NavLink></li>
                                    <li> <NavLink to='/dashboard/history'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                    <li> <NavLink to='/dashboard/allusers'><FaUser></FaUser> All Users</NavLink></li>

                    
                                </>
                                :

                                <>
                                    <li> <NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                                    <li> <NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li> <NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>

                                    <li> <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                    </NavLink>
                                    </li>
                                </>
                        }



                        <div className="divider"> </div>

                        <li><NavLink to='/'><FaHome></FaHome> Home </NavLink> </li>
                        <li><NavLink to='/menu'>  </NavLink>Our Menu </li>
                        <li><NavLink to='/order/salad'>  </NavLink>Order Food  </li>
                        <li><NavLink to='/'>  </NavLink>Contact  </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;




