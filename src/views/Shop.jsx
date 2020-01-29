import React from 'react';
//Context Provider
import {ProductsContextProvider} from '../components/shop/context'
//importing components
import Sizes from '../components/shop/controls/Sizes'
import Order from '../components/shop/controls/Order'
import ProductsList from '../components/shop/products/ProductsList'
import ProductsCount from '../components/shop/products/ProductsCount'
import Cart from '../components/shop/cart/Cart'

export default function Shop() {
    
    return (
        <ProductsContextProvider>
        <div className="container mx-auto pt-16 text-gray-800">
            <div className="flex flex-wrap sm:flex-no-wrap">
                {/* sizes  */}
                <Sizes />
                {/* products  */}
                <div className="flex-auto">
                    <div className="text-gray-700 flex flex-col sm:flex-row justify-between items-center px-2">
                        <ProductsCount />
                        <Order />
                    </div>
                    <ProductsList/>
                </div>
            </div>
            <Cart />
        </div>
        </ProductsContextProvider>
    )
}