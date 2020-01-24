import React, { useState, useEffect } from 'react';
import { mdiCartOutline } from '@mdi/js'

export default function Cart() {
    //cart visibility state
    let [cartVisible, setVisibility] = useState(false)
    //show cart once component did mount after one second
    useEffect(() => { setTimeout(() => setVisibility(true), 1000) }, [])

    return (
        <div className="fixed bg-gray-900 w-1/2 max-w-md z-50 top-0 right-0 bottom-0 shadow transition" style={{ right: cartVisible ? '0' : '-28rem' }}>
            <div className="relative h-full">
                {/* toggle button  */}
                <button onClick={() => setVisibility(!cartVisible)} className="focus:outline-none absolute top-0 right-full w-16 h-16 flex justify-center items-center text-2xl text-white bg-gray-900">
                    {cartVisible ?
                        <span  >X</span>
                        :
                        <div className="relative">
                            {/* badge  */}
                            <div className="absolute right-0 bottom-0 mr-1 w-4 h-4 bg-yellow-600 text-xs font-bold text-gray-800 rounded-full flex justify-center items-center">1</div>
                            {/* cart icon  */}
                            <svg className="fill-current w-12 h-12 text-gray-200" viewBox="0 0 23 23">
                                <path d={mdiCartOutline} />
                            </svg>
                        </div>
                    }
                </button>
                {/* cart content  */}
                <div className="flex flex-col h-full">
                    {/* cart icon with badge  */}
                    <div className="flex justify-center items-center py-12 px-4">
                        <div className="relative">
                            {/* badge  */}
                            <div className="absolute right-0 bottom-0 mr-2 w-4 h-4 bg-yellow-600 text-sm font-bold rounded-full flex justify-center items-center">1</div>
                            {/* cart icon  */}
                            <svg className="fill-current w-12 h-12 text-gray-200" viewBox="0 0 23 23">
                                <path d={mdiCartOutline} />
                            </svg>
                        </div>
                    </div>
                    {/* cart items */}
                    <div className="">
                        <div className="px-4">
                            <div className="flex items-center py-3 border-t border-black">
                                {/* item image */}
                                <div className=" h-20 bg-yellow-600">
                                    <img className="h-full" src="https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg" alt="product" />
                                </div>
                                {/* item details */}
                                <div className="text-gray-700 px-4 text-lg">
                                    <div className="text-white">Cat Tee Black T-shirt</div>
                                    <div className="text-sm">S | black with custom print</div>
                                    <div className="">Quantity: <span>1</span></div>
                                </div>
                                {/* item price & controls*/}
                                <div className="flex flex-col items-center justify-between ml-auto">
                                    <div className="text-yellow-600 text-lg mb-8">$ 10.90</div>
                                    <div className="text-gray-100 text-sm flex">
                                        <button className="focus:outline-none border-gray-800 w-5 h-5 flex justify-center items-center bg-gray-800">-</button>
                                        <button className="focus:outline-none border-gray-800 w-5 h-5 flex justify-center items-center bg-gray-700">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* total & checkout  */}
                    <div className="px-4 mt-auto top-shadow">
                        <div className="flex justify-between py-6">
                            <div className="uppercase text-gray-600 text-xl font-thin">subtotal</div>
                            <div className="text-yellow-600 text-2xl">$ 10.90</div>
                        </div>
                        <div className="mb-6">
                            <button className=" focus:outline-none hover:bg-yellow-600 uppercase w-full px-4 py-3 bg-black text-gray-100 text-lg font-semibold">
                                checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}