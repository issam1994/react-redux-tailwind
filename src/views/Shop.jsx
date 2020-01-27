import React, { useState, useEffect } from 'react';
//state imports
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../store/actions/shopActions'
//importing components
// import Sizes from '../components/shop/Sizes'
import ProductsList from '../components/shop/ProductsList'
import Cart from '../components/shop/Cart'

export default function Shop() {
    const dispatch = useDispatch();
    //fetch product on mounted
    useEffect(() => { dispatch(fetchProducts()) }, [dispatch])
    //get products from store
    const products = useSelector(state => state.shop.products);
    //order state
    const [order, setOrder] = useState('');
    const orderOptions = [{ label: 'Select', value: '' },
    { label: 'Lowest to highest', value: 'toHighest' },
    { label: 'Highest to lowest', value: 'toLowest' }
    ]
    // filter state
    const [filter, setFilter] = useState([])
    const getAvailableSizes = () => {
        //sizes may contain duplicates
        let sizes = products.map((s) => (s.availableSizes)).flat()
        // let's get rid of them
        let newSizes = []
        sizes.forEach(s => !newSizes.includes(s) && newSizes.push(s))
        return newSizes
    }
    const sizes = getAvailableSizes()
    //order controls
    const handleOrderChange = (e) => {
        console.log('order changed to', e.target.value);
        setOrder(e.target.value);
    }
    const orderBy = (products) => {
        if (order === 'toLowest') {
            return products.sort((a, b) => b.price - a.price)
        }
        else if (order === 'toHighest') {
            return products.sort((a, b) => a.price - b.price)
        }
        else {
            return products;
        }
    }
    //filter controls
    const activeFilterStyle = (size) => {
        if(filter.includes(size)){
            return {backgroundColor: '#333', color:'white'}
        }
        return {}
    }
    const handleFilterChange = (size) => {
        console.log("checked filter", size)
        setFilter(() => {
            if (!filter.includes(size)) {
                return [...filter, size]
            }
            return filter.filter(f => f !== size);
        })
    }
    const filterBy = (products) => {
        if (filter.length === 0) {
            return products
        }
        return products.filter(p => p.availableSizes.some(s => filter.includes(s)))
    };
    console.log("filter", filter)
    return (
        <div className="container mx-auto pt-16 text-gray-800">
            <div className="flex">
                {/* sizes  */}
                <div className="">
                    <div className="mb-2 px-1 text-lg font-semibold">Sizes:</div>
                    <div className="flex flex-wrap w-48">
                        {sizes.map((s, i) =>
                            <div onClick={() => handleFilterChange(s)} style={activeFilterStyle(s)} className="overflow-hidden w-10 h-10 mx-1 my-2 flex-none rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center text-xs cursor-pointer" key={i}>
                                <span>{s}</span>
                            </div>)}
                    </div>
                </div>
                {/* products  */}
                <div className="flex-auto">
                    <div className="text-gray-600 flex justify-between items-center px-2 pb-2">
                        <div className="text-sm">{products.length} Product(s) found</div>
                        <div className="flex items-center justify-center">
                            <div className="">Order by:</div>
                            <select onChange={handleOrderChange} className="font-semibold ml-2 p-1 border hover:border-gray-800">
                                {orderOptions.map(op => <option key={op.value} value={op.value}>{op.label}</option>)}
                            </select>
                        </div>
                    </div>
                    <ProductsList products={orderBy(filterBy(products))} />
                </div>
                <Cart />
            </div>
        </div>
    )
}