import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImage from  '../../assets/assets/menu/banner3.jpg'
import dessertImage from  '../../assets/assets/menu/dessert-bg.jpeg'
import pizzaImage from  '../../assets/assets/menu/pizza-bg.jpg'
import soupImage from  '../../assets/assets/menu/soup-bg.jpg'
import saladImage from  '../../assets/assets/menu/salad-bg.jpg'


 
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {
      
    const [menu]=useMenu();
    // console.log(menu);
    const desserts=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
 






    return (
        <div>

            <Helmet>
                <title>  Menu | Bistro Boss</title>
            </Helmet>

            <Cover
            img={menuImage}
            title={'Our menu'}
            ></Cover>


            <SectionTitle
            heading={'Todays Offer'}
            subHeading={"Don't Miss"}
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'}coverImg={pizzaImage}></MenuCategory>
            <MenuCategory items={desserts} title={'dessert'}coverImg={dessertImage}></MenuCategory>
            <MenuCategory items={soup} title={'soup'}coverImg={soupImage}></MenuCategory>
            <MenuCategory items={salad} title={'salad'}coverImg={saladImage}></MenuCategory>


 


        </div>
    );
};

export default Menu;