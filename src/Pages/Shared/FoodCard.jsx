import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, image, price, recipe ,_id} = item;
    const [cart,refetch]=useCart();
    const navigate=useNavigate();
    const location=useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            const cartItem={foodItemId:_id,name,image,price,email:user.email};
            console.log(cartItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();//refetch cart to update the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added to cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}})
                }
              })
        }


    }


    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=' absolute right-0 mr-4 mt-4 px-4 bg-black text-white'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 bg-slate-200 border-orange-400 border-b-4 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;