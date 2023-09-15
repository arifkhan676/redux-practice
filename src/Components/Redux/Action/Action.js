
export const ADD_TO_CART = 'add_to_cart';
export const Remove_to_cart = 'remove_to_cart';

export const addToCart = id => {
    return { type: ADD_TO_CART, id }
}

export const removeToCart = id => {
    return { type: Remove_to_cart, id }
}