import React from 'react';
import { FaTrash, FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAllUsers from '../../../../Hooks/useAllUsers';

const DisplayUser = ({ user, index }) => {
    // console.log(user);
    const { _id, email, name } = user;
    const [users, refetch] = useAllUsers();

    const handleMakeAdmin = (user) => {
        // console.log('make', user);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    // const handleDelete = (id) => {
    //     console.log(id);

    //     fetch(`http://localhost:5000/users/admin/${id}`,{
    //         method:'DELETE',
    //         headers:{
    //             'content-type':'application/json'
    //         }
    //     })
    //     .then(re=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         if(data.deletedCount>0){
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'Successfully deleted user',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //         }
    //     })
    // }



    const handleDelete=(id,name)=>{
        // console.log('Delete id',id);
        Swal.fire({
          title: `Are you sure? 
          to Delete ${name}`,
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/admin/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted successfully.',
                        'success'
                      )
                }
            })
    
          }
        })
    }



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    user.role === 'admin' ? 'admin' :
                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs   bg-orange-600 text-white"> <FaUserShield></FaUserShield> </button>

                }
            </td>

            <td>
                <button onClick={() => handleDelete(user._id,user.name)} className="btn btn-ghost btn-xs  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button>
            </td>


        </tr>
    );
};

export default DisplayUser;