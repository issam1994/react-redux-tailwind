import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../../store/actions/shopActions'

export default function CartItem({ item, index }) {
    //style state
    const [hoveredOnDelete, setHoveredOnDelete] = useState(false);
    const hoveredOnDeleteStyle = {textDecoration: 'line-through solid #fff', backgroundColor: '#000', opacity: .5}
    //extract data from props
    let { id, title, price, image, style } = item.product;
    //
    const dispatch = useDispatch();
    //
    return (
        <div className="relative">
            <div className="absolute z-10 mx-6 inset-x-0 top-0 text-white border-t border-black flex"><button onMouseEnter={() => setHoveredOnDelete(true)} onMouseLeave={() => setHoveredOnDelete(false)} onClick={() => dispatch(removeFromCart(id))} className="ml-auto self-start px-1 font-bold text-black hover:text-white">X</button></div>
            <div className="flex items-center pb-3 px-6 py-4" style={hoveredOnDelete ? hoveredOnDeleteStyle : null}>
                {/* item image */}
                <div className="flex-none h-20 bg-yellow-600">
                    <img className="h-full" src={image} alt={title} />
                </div>
                {/* item details */}
                <div className="text-gray-700 px-4">
                    <div className="text-white text-sm sm:text-base font-semibold">{title}</div>
                    <div className="text-xs sm:text-sm">{style}</div>
                    <div className="text-sm sm:text-base">Quantity: <span>{item.quantity}</span></div>
                </div>
                {/* item price & controls*/}
                <div className="flex flex-col items-center justify-center ml-auto">
                    <div className="text-yellow-600 text-lg mb-4">$ {price}</div>
                    <div className="text-gray-100 text-sm flex">
                        <button className="focus:outline-none border-gray-800 w-8 h-5 flex justify-center items-center border bg-black btn" onClick={()=> dispatch(decrementQuantity(index))} disabled={item.quantity === 1} >-</button>
                        <button className="focus:outline-none border-gray-800 w-8 h-5 flex justify-center items-center border bg-black btn" onClick={()=> dispatch(incrementQuantity(index))}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}