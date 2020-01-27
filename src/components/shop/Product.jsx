import React from 'react';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../store/actions/shopActions'

export default function Product({product}) {
    //extract data from props
    let {title, price, image} = product;
    //
    const dispatch = useDispatch();
    //
    return (
        <div onClick={() => dispatch(addToCart(product))} className=" w-2/4 md:w-1/3 lg:w-1/4 flex flex-col items-center p-2 border border-white hover:border-gray-300 cursor-pointer product">
            {/* image  */}
            <div className="relative">
                <img src={image} alt={title} />
                <div className="absolute top-0 right-0 text-xs bg-gray-800 text-white p-1">Free shipping</div>
            </div>
            {/* title  */}
            <div className="flex justify-center items-center text-lg text-center font-medium h-16 px-2 mt-1">
                {title}
        </div>
            {/* colored line */}
            <hr className="border-orange-500 w-8" />
            {/* price  */}
            <div className="text-sm tracking-wide p-4">
                <span className="mx-1">$</span>
                <span className="text-2xl font-semibold">{(price+"").split(".")[0]}</span>
                <span className="">{(price+"").split(".")[1] && '.' + (price+"").split(".")[1]}</span>
            </div>
            {/* action button  */}
            <div className="w-full">
                <button className="p-3 w-full text-lg bg-gray-800 hover:bg-yellow-500 text-white add-product">
                    Add to cart
            </button>
            </div>
        </div>
    )
}