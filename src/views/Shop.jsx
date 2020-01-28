import React from 'react';
//Context Provider
import {ProductsContextProvider} from '../components/shop/productsContext'
//importing components
import Sizes from '../components/shop/Sizes'
import Order from '../components/shop/Order'
import ProductsList from '../components/shop/ProductsList'
import ProductsCount from '../components/shop/ProductsCount'
import Cart from '../components/shop/Cart'

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