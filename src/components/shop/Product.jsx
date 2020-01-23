import React from 'react';

export default function Product() {
    return (
        <div className="flex flex-col items-center p-2 border border-gray-100 hover:border-gray-300 cursor-pointer product">
            {/* image  */}
            <div className="relative">
                <img src="https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg" alt="product" />
                <div className="absolute top-0 right-0 text-xs bg-gray-800 text-white p-1">Free shipping</div>
            </div>
            {/* title  */}
            <div className="text-lg font-medium py-4">
                Cat Tee Black T-Shirt
        </div>
            {/* colored line */}
            <hr className="border-orange-500 w-8" />
            {/* price  */}
            <div className="text-sm tracking-wide p-4">
                <span className="mx-1">$</span>
                <span className="text-2xl font-semibold">10</span>
                <span className="">.90</span>
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