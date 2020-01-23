import React from 'react';
//importing components
import Sizes from '../components/shop/Sizes'
import Product from '../components/shop/Product'
import Cart from '../components/shop/Cart'

export default function Shop() {
    return (<div className="container mx-auto pt-16 text-gray-800">
        <div className="flex justify-around">
        <Sizes />
        <Product />
        <Cart />
        </div>
    </div>)
}