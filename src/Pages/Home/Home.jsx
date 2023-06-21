import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Popularmenu from './Popularmenu';
import Featured from './Featured';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet> 
                <title>Home | Bistro Boss </title>
            </Helmet>

            <Banner></Banner>
            <Category ></Category>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonial></Testimonial>



        </div>
    );
};

export default Home;