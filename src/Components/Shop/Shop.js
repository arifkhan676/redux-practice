import React from 'react'
import Cart from '../Cart/Cart'
import { addToCart, removeToCart } from '../Redux/Action/Action'
import { connect } from 'react-redux'

const Shop = (props) => {

    const { cart, products, removeToCart } = props;
    console.log(cart);

    return (
        <div>
            <h4> Shop : {cart.length}  </h4>

            <ul>
                {
                    cart.map((pd) => <li> {pd.actionName} <button onClick={() => { removeToCart(pd.cartId) }} > X </button></li>)
                }
            </ul>

            {
                products.map(item => <Cart
                    item={item}
                />)
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    removeToCart: removeToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
