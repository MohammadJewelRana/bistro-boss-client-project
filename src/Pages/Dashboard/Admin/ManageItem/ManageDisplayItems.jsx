import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ManageDisplayItems = ({menuData,index,handleDeleteItem}) => {

     console.log(menuData);
     const {category,image,name,price,_id,recipe}=menuData;

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
          { name}
        </td>
        <td className=''>{ price}</td>
        <th>
            <button   className="btn btn-ghost btn-xs  bg-red-600 text-white">Update</button>
        </th>
        <th>
        <button onClick={()=>handleDeleteItem(_id,name)}  className="btn btn-ghost btn-xs  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button>
        </th>
    </tr>
    );
};

export default ManageDisplayItems;