import React, {useState, useEffect, createContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/shop/actions'
//init context
export const ProductsContext = createContext();

//Context Provider Wrapper
export const ProductsContextProvider = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchProducts()) }, [dispatch])

    const [filters, setFilters] = useState([])
    const [order, setOrder] = useState('')

    const products = useSelector(state => state.shop.products);

    return (
        <ProductsContext.Provider value={{products, filters, setFilters, order, setOrder}}>
            {children}
        </ProductsContext.Provider>
    )
}