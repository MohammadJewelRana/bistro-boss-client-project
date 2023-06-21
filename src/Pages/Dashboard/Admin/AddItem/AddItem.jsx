import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit ,reset} = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    // console.log(img_hosting_token);


    //onsubmit form
    const onSubmit = data => {
        // console.log(data);
        //image hosting in imageBB
        const formData = new FormData();//create formData
        formData.append('image', data.image[0]);//set image using form data.image 0 index
     
        //fetch imagebb hosting url and pass the image to hosting the image
        fetch(img_hosting_url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {//get a data or response
                console.log(imgResponse);
                //if success create the recipe object with new image link
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL);
                    const { name, category, price, recipe } = data;

                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    console.log(newItem);

                    //post method ..pass data to backend using axiosSecure
                    //here new item == data what we want to store
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('After posting new menu item: ', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Menu item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <div className='w-full px-12'>
            <SectionTitle
                heading={'Add an item'}
                subHeading={"What's new"}
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full my-4 ">
                    <label class="label">
                        <span class="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: true, maxLength: 80 })}
                        placeholder="Recipe Name" class="input input-bordered w-full  " />
                </div>
                <div className='flex gap-4  my-4'>
                    <div class="form-control w-full  ">
                        <label class="label">
                            <span class="label-text">Category*</span>
                        </label>
                        <select defaultValue='pick ine' class="select select-bordered"
                            {...register("category", { required: true })}>
                            <option disabled >Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div class="form-control w-full    ">
                        <label class="label">
                            <span class="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Enter price"
                            {...register("price", { required: true })}
                            class="input input-bordered w-full  " />
                    </div>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Recipe Details</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div class="form-control w-full my-4 ">
                    <label class="label">
                        <span class="label-text">Item Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        class="file-input file-input-bordered w-full  " />
                </div>
                <input className='btn btn-sm mt-4' type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;