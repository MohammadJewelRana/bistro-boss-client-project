import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const TableRow = ({row,index}) => {
    const {_id,foodItemId,image,name,price}=row;
    // console.log(row);
    const [cart,refetch]=useCart();
    
    const handleDelete=(id,name)=>{
        // console.log('Delete id',id);
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
            fetch(`http://localhost:5000/carts/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount>0){
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
        <tr>
            <td>{index+1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image}  alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    
                </div>
            </td>
            <td>
               {name}
            </td>
            <td className=''>${price}</td>
            <th>
                <button onClick={()=>handleDelete(_id,name)} className="btn btn-ghost btn-xs  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button>
            </th>
        </tr>
    );
};

export default TableRow;