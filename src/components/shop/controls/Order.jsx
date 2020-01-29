import React, {useContext} from 'react'
import {ProductsContext} from '../context'

export default function Order() {
    //state
    const {setOrder} = useContext(ProductsContext)
    const orderOptions = [
        { label: 'Select', value: '' },
        { label: 'Lowest to highest', value: 'toHighest' },
        { label: 'Highest to lowest', value: 'toLowest' }
    ]
    //controls
    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    }
    return (
        <div className="flex items-center justify-center mb-2">
            <div className="">Order by:</div>
            <select onChange={handleOrderChange} className=" font-medium ml-2 p-1 border hover:border-gray-800">
                {orderOptions.map(op => <option key={op.value} value={op.value}>{op.label}</option>)}
            </select>
        </div>
    )
}