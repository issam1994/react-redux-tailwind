import React from 'react';
//importing components
import Sizes from '../components/shop/Sizes'
import Product from '../components/shop/Product'
import Cart from '../components/shop/Cart'

export default function Shop() {
    return (<div class="container mx-auto pt-16">
        <Sizes />
        <Product />
        <Cart />
    </div>)
}