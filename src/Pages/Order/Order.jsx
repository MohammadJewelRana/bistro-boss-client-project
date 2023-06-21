import React, { useState } from 'react';
import Cover from '../Shared/Cover';
import orderImage from '../../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../Shared/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const Order = () => {

    //create tab categories
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']

    //get categories
    const { category } = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category);//get category index

    const [tabIndex, setTabIndex] = useState(initialIndex);//set initial index


    const [menu] = useMenu();


    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>

            <Helmet>
                <title>  Order Food | Bistro Boss</title>
            </Helmet>


            <Cover title={'Order Food'} img={orderImage}></Cover>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;