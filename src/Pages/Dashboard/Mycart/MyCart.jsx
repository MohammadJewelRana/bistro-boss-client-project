import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

const MyCart = () => {

    const [cart] = useCart();
    // console.log(cart);

    const total = cart.reduce((sum, item) => item.price + sum, 0);
    // console.log(total);

    return (
        <div className='w-full'>
        
            <Helmet>
                <title>My Cart | Bistro Boss </title>
            </Helmet>
            <div className='uppercase  font-semibold h-[60px] flex justify-evenly items-center'>
                <h3 className='text-3xl'>Total items: {cart.length}</h3>
                <h3 className='text-3xl'>Total Price: ${total.toFixed(2)}</h3>
              
                <Link to='/dashboard/payment'>  <button className="btn btn-warning btn-sm">Pay</button></Link>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((row,index)=><TableRow
                            key={row._id}
                            row={row}
                            index={index}
                            ></TableRow>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;