import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews);


    return (
        <div>
            <SectionTitle
                heading={'Testimonials'}
                subHeading={'What our client say'}
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-24 my-16 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.ratings}
                                readOnly
                            />
                            <p className='mt-4'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400 mt-4'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;