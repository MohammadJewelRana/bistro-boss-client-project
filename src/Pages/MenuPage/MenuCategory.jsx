import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({ items, title, coverImg }) => {



    return (
        <div className='pt-8'>

            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className='grid md:grid-cols-2 gap-16 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>

            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 mt-4'>Order Your favourite food</button></Link>

        </div>
    );
};

export default MenuCategory;