import React from 'react';
import FoodCard from '../Shared/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 gap-8'>
        {
            items.map(item => <FoodCard
                item={item}
                key={item._id}
            ></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;