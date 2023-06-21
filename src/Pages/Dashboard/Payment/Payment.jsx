import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Shared/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../Hooks/useCart';


//provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    console.log(price);

    return (
        <div className='w-full'>
            <Helmet>
                <title>My Cart | Bistro Boss </title>
            </Helmet>
            <SectionTitle subHeading={'please process '} heading={'payment'}>
            </SectionTitle>




        </div>
    );
};

export default Payment;

// <Elements stripe={stripePromise}>
// <CheckOutForm price={price} ></CheckOutForm>
// </Elements>