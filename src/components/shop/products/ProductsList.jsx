import React, { useContext } from 'react'
import { ProductsContext } from '../context'
import Product from './Product'

export default function ProductsList() {
    const { products, order, filters } = useContext(ProductsContext)
    const orderBy = (products) => {
        if (order === 'toLowest') {
            return [...products].sort((a, b) => b.price - a.price)
        }
        else if (order === 'toHighest') {
            return [...products].sort((a, b) => a.price - b.price)
        }
        else {
            return products;
        }
    }
    const filterBy = (products) => {
        if (filters.length === 0) {
            return products
        }
        return products.filter(p => p.availableSizes.some(s => filters.includes(s)))
    };
    return (
        <div className="flex flex-wrap">
            {orderBy(filterBy(products)).map(p => <Product product={p} key={p.id} />)}
        </div>
    )
}