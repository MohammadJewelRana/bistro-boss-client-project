import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CheckOutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    // console.log(price);
    const [cardError, setCardError] = useState('');
    const [clientSecret,setClientSecret]=useState('');
 

 
 

    useEffect(()=>{
        if(  price>0){
            axiosSecure.post('/create-payment-intent',{price})
            .then(res=>{
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }


    
    } ,[])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        //get card info
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        console.log('card', card);

        //check is card is valid or not
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',//types of method
            card //which method pass...look upward
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('Payment method', paymentMethod);
        }



        // const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        //         payment_method:{
        //             card:card,
        //             billing_details:{
        //                 email:user?.email || 'anonymous',
        //                 name:user?.displayName || 'unknown'
        //             }
        //         }
        // })


        // if(confirmError){

        // }
        // console.log(paymentIntent);
 



  }




    return (
        <div>

        <p>Total Price : {price}</p>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-warning mt-8" type="submit" disabled={!stripe || !clientSecret  }>
                    Pay
                </button>
            </form>


            {
                cardError &&
                <p className='text-red-600'>{cardError}</p>
            }

        </div>

  
    );
};

export default CheckOutForm;