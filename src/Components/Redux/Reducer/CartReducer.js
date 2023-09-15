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
            const newItem = {
                actionId: action.id,
                actionName: action.name,
                cartId: state.cart.length + 1
            }
            //console.log(newItem);

            const newCart = [...state.cart, newItem]
            return { ...state, cart: newCart }
        case Remove_to_cart:
            const remainID = action.id;
            const remainCart = state.cart.filter(item => item.cartId !== remainID)
            return { ...state, cart: remainCart }
        default:
            return state
    }

}

export default CartReducer;