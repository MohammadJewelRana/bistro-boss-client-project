import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img from '../../assets/banner.jpg'

const Banner = () => {
    return (
 
        <Carousel  >
        <div>
            <img src={img} />
       
        </div>
        <div>
            <img src={img} />
         
        </div>
        <div>
            <img src={img} />
           
        </div>
    </Carousel>     


      
    );
};

export default Banner;