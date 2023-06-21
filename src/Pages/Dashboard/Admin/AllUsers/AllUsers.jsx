import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAllUsers from '../../../../Hooks/useAllUsers';
import { Helmet } from 'react-helmet-async';
import DisplayUser from './DisplayUser';

const AllUsers = () => {

    // const {data:users=[],refetch}=useQuery(['users'],async()=>{
    //     const res=await fetch('http://localhost:5000/users')
    //     return res.json();
    // })

    const [users, refetch] = useAllUsers();


    return (
        <div className='w-full ml-12'>
            <Helmet>
                <title>All Users | Bistro Boss </title>
            </Helmet>


            <h3 className='text-3xl font-semibold mb-8'>Total Users :{users.length}</h3>



            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead  >
                        <tr  >
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role  </th>
                            <th>Action  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <DisplayUser
                                key={user._id}
                                user={user}
                                index={index}
                            ></DisplayUser>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllUsers;