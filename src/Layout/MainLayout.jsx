import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';

const Mainlayout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;

    return (
        <div>
            {
                noHeaderFooter || <Header></Header>
            }

            <Outlet></Outlet>

            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Mainlayout;