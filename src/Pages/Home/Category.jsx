import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


import sliderImage from '../../assets/swiper.jpeg'
import SectionTitle from '../Shared/SectionTitle';



const Category = () => {
    return (
        <div className='mb-20'>
        <SectionTitle 
        subHeading={'From 11:00 am to 10:00 pm'}
        heading={'Order Online'}
        ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>

   
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>

   
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mb-16'>
                        <img src={sliderImage} alt="" />
                        <h1 className='text-xl uppercase text-center -mt-12 text-white '>Salad</h1>
                    </div>
                </SwiperSlide>

   
            </Swiper>


        </div>
    );
};

export default Category;