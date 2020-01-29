import React, { useContext } from "react"
import { ProductsContext } from '../context'


export default function ProductsCount() {
    const { products, filters } = useContext(ProductsContext)
    const filterBy = (products) => {
        if (filters.length === 0) {
            return products
        }
        return products.filter(p => p.availableSizes.some(s => filters.includes(s)))
    };
    return (
        <div className="text-sm mb-2">{filterBy(products, filters).length} Product(s) found</div>
    )
}