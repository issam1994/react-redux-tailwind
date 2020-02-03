import React from 'react';
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import CartBadge from './CartBadge'

export default function CartItemsList() {
    const data = useSelector((state) => state.shop.cart)
    //
    const CartItems = data.map((item, i) => <CartItem key={item.product.sku} index={i} item={item}/>)
    return (
        <div className="overflow-y-auto">
            <CartBadge />
            {CartItems}
        </div>
    )
}