import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../Hooks/useMenu';

const Popularmenu = () => {

    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==='popular');




    // console.log(menu);



    return (
        <section className='mb-12'>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-16'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className='mx-auto '>
                <button className=" btn btn-outline border-o border-b-4 mt-4">View Full menu</button>

            </div>

        </section>
    );
};

export default Popularmenu;