
export const ADD_TO_CART = 'add_to_cart';
export const Remove_to_cart = 'remove_to_cart';

export const addToCart = (id, name) => {
    return {
        type: ADD_TO_CART, id, name
    }
}

export const removeToCart = (id, name) => {
    return {
        type: Remove_to_cart, id, name
    }
}