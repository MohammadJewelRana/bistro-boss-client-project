import React from 'react';
import SectionTitle from '../Shared/SectionTitle';

import featured from '../../assets/assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <div className='mb-16 featured-item bg-fixed  text-white  pt-8 my-20  '>
            <SectionTitle
            heading={'From our menu'}
            subHeading={'Check it out'}  
            ></SectionTitle>

            <div className='md:flex  bg-slate-500 bg-opacity-40 justify-center items-center py-20 px-36 pt-12'>
              <div><img src={featured} alt="" /></div>
              <div  className='md:ml-12'>
              
              <p>Aug 20,2029</p>
              <p className='uppercase'>Where can i get some?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto sit voluptatum, temporibus similique voluptatibus voluptate eius, voluptas numquam nostrum iure aut reprehenderit, veniam nemo mollitia laboriosam ab? Ea iure culpa enim. Provident, ex? Quis tenetur omnis culpa porro eaque! Ut quis tempore ipsum eos maxime nemo, perferendis voluptate a!</p>

              <button className="btn  btn-primary border-none border-b-4 border-b-black mt-4 text-white ">Order Now</button>

              </div>
            </div>


        </div>
    );
};

export default Featured;