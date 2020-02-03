import React from 'react'
import { useSelector } from 'react-redux'
import { mdiCartOutline } from '@mdi/js'

export default function CartBadge() {
    const itemsCount = useSelector(state => state.shop.cart.length)

    return (
        <>
            {/* cart icon with badge  */}
            <div className="flex justify-center items-center py-12 px-4">
                <div className="relative">
                    {/* badge  */}
                    <div className="absolute right-0 bottom-0 mr-2 w-4 h-4 bg-yellow-600 text-sm font-bold rounded-full flex justify-center items-center">{itemsCount}</div>
                    {/* cart icon  */}
                    <svg className="fill-current w-12 h-12 text-gray-200" viewBox="0 0 23 23">
                        <path d={mdiCartOutline} />
                    </svg>
                </div>
                <div className="ml-2 font-bold text-xl text-white">Cart</div>
            </div>
        </>
    )
}