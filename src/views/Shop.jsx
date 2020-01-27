import React, {useEffect} from 'react';
//state imports
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts} from '../store/actions/shopActions'
//importing components
import Sizes from '../components/shop/Sizes'
import Products from '../components/shop/ProductsList'
import Cart from '../components/shop/Cart'

export default function Shop() {
    const dispatch = useDispatch();
    //fetch product on mounted
    useEffect(() => { dispatch(fetchProducts()) }, [dispatch])
    //get products from store
    const products = useSelector(state => state.shop.products);
    return (
    <div className="container mx-auto pt-16 text-gray-800">
        <div className="flex justify-around">
        <Sizes />
        <Products products={products} />
        <Cart />
        </div>
    </div>
    )
}