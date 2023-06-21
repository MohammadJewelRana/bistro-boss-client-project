import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useMenu from '../../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import ManageDisplayItems from './ManageDisplayItems';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const ManageItems = () => {

    const [menu, , refetch] = useMenu();//get menu
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteItem = (itemId, name) => {
        console.log(itemId);
        Swal.fire({
            title: `Are you sure? 
            to Delete 
             <span className='text-red-600'>${name}</span>`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${itemId}`)
                    .then(res => {
                        console.log('deleted response::: ', res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                     
                    })
            }
        })
    }

    return (
        <div className='w-full'>

            <SectionTitle
                heading={'Manage All Items'}
                subHeading={'Hurry up'}
            ></SectionTitle>


            <div className="overflow-x-auto">
                <table className="table w-full mx-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((menuData, index) => <ManageDisplayItems
                                key={menuData._id}
                                menuData={menuData}
                                index={index}
                                handleDeleteItem={handleDeleteItem}
                            ></ManageDisplayItems>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;