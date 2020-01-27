//actions
export const fetchProducts = () => {
    return {
        type: 'FETCH-PRODUCTS'
    }
}
export const addToCart = (product) => {
    return {
        type: 'ADD-TO-CART',
        payload: product
    }
}
export const removeFromCart = (itemId) => {
    return {
        type: 'REMOVE-FROM-CART',
        payload: itemId
    }
}
export const toggleCart = () => {
    return {
        type: 'TOGGLE-CART'
    }
}
export const incrementQuantity = (itemIndex) => {
    return {
        type: 'INCREMENT-QUANTITY',
        payload: itemIndex
    }
}
export const decrementQuantity = (itemIndex) => {
    return {
        type: 'DECREMENT-QUANTITY',
        payload: itemIndex
    }
}