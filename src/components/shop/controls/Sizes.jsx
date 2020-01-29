import React, {useContext, useMemo} from 'react';
import {ProductsContext} from '../context'
export default function Sizes() {
    const {products, filters, setFilters} = useContext(ProductsContext)
    //state
    const getAvailableSizes = (products) => {
        //sizes may contain duplicates
        let sizes = products.map((s) => (s.availableSizes)).flat()
        // let's get rid of them
        let newSizes = []
        sizes.forEach(s => !newSizes.includes(s) && newSizes.push(s))
        return newSizes
    }
    const sizes = useMemo(() => getAvailableSizes(products), [products]);
    //controls
    const activeFilterStyle = (size) => {
        if (filters.includes(size)) {
            return { backgroundColor: '#333', color: 'white' }
        }
        return {}
    }
    const handleFilterChange = (size) => {
        setFilters(() => {
            if (filters.includes(size)) {
                return filters.filter(f => f !== size);
            }
            return [...filters, size]
        })
    }
    return (
        <div className="w-full sm:w-3/12 px-4 lg:w-56 flex-none">
            <div className="mb-2 px-1 text-lg font-semibold text-center sm:text-left">Sizes:</div>
            <div className="flex flex-wrap justify-center sm:justify-start">
                {sizes.map((s, i) =>
                    <div onClick={() => handleFilterChange(s)} style={activeFilterStyle(s)} className="overflow-hidden w-10 h-10 mx-1 my-2 flex-none rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center text-xs cursor-pointer" key={i}>
                        <span>{s}</span>
                    </div>)}
            </div>
        </div>
    )
}