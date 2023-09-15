import { ADD_TO_CART, Remove_to_cart } from "../Action/Action"

const initialState = {
    cart: [],
    products: [{ id: 1, name: 'Lenovo' },
    { id: 2, name: 'Hp' },
    { id: 3, name: 'Asus' },
    { id: 4, name: 'Toshiba' }]
}

const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId]
            return { cart: newCart, products: state.products }
        case Remove_to_cart:
            const remainID = action.id;
            const remainCart = state.cart.filter(item => item !== remainID)
            return { cart: remainCart }
        default:
            return state
    }

}

export default CartReducer;