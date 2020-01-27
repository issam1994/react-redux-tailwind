import React, { useEffect } from 'react';
//redux hooks
import { useSelector, useDispatch } from 'react-redux'
//redux action
import { toggleCart } from '../../store/actions/shopActions'
import CartItemsList from './CartItemsList'
import { mdiCartOutline } from '@mdi/js'

export default function Cart() {
    const dispatch = useDispatch()
    //show cart once component did mount after a few milleseconds
    // useEffect(() => { setTimeout(() => dispatch(toggleCart()), 800) }, [dispatch])
    //cart visibility state
    const visibility = useSelector(state => state.shop.cartVisibility)
    //number of cart items
    const itemsCount = useSelector(state => state.shop.cart.length)
    //get cart items to calculate total price
    const cartItems = useSelector(state => state.shop.cart)
    //calculate total price
    const totalPrice = () => cartItems.map((item, i) => item.product.price * item.quantity).reduce((a, b) => a + b, 0);
    //checkout
    const handleCheckout = () => totalPrice() > 0 && alert(`Total price is : $ ${totalPrice()}`)
    return (
        <div className={"fixed bg-gray-900 w-full sm:max-w-md z-50 top-0 right-0 bottom-0 shadow transition" + " " + (visibility ? "cart-visible-mobile sm:cart-visible": "cart-hidden-mobile sm:cart-hidden") }>
            <div className="relative h-full">
                {/* toggle button  */}
                <button onClick={() => dispatch(toggleCart())} className="focus:outline-none absolute top-0 sm:right-full w-16 h-16 flex justify-center items-center text-2xl text-white bg-gray-900" style={!visibility? {right: '100%'} : {}}>
                    {visibility ?
                        <span  >X</span>
                        :
                        <div className="relative">
                            {/* badge  */}
                            <div className="absolute right-0 bottom-0 mr-1 w-4 h-4 bg-yellow-600 text-xs font-bold text-gray-800 rounded-full flex justify-center items-center">{itemsCount}</div>
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
                            <div className="absolute right-0 bottom-0 mr-2 w-4 h-4 bg-yellow-600 text-sm font-bold rounded-full flex justify-center items-center">{itemsCount}</div>
                            {/* cart icon  */}
                            <svg className="fill-current w-12 h-12 text-gray-200" viewBox="0 0 23 23">
                                <path d={mdiCartOutline} />
                            </svg>
                        </div>
                        <div className="ml-2 font-bold text-xl text-white">Cart</div>
                    </div>
                    {/* cart items */}
                    <CartItemsList />
                    {/* total & checkout  */}
                    <div className="px-4 mt-auto top-shadow">
                        <div className="flex justify-between py-6">
                            <div className="uppercase text-gray-600 text-base font-semibold pt-2">subtotal</div>
                            <div className="text-yellow-600 text-2xl">$ {totalPrice().toFixed(2)}</div>
                        </div>
                        <div className="mb-6">
                            <button onClick={handleCheckout} className="focus:outline-none hover:bg-yellow-600 uppercase w-full px-4 py-3 bg-black text-gray-100 text-lg font-semibold btn">
                                checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}