import React from 'react';
import Product from './Product'

export default function ProductsList({products}) {
    return (
        <div className="flex flex-wrap">
            {products.map(p => <Product product={p} key={p.id} />)}
        </div>
    )
}