import React from 'react'
import Cart from '../Cart/Cart'
import { addToCart } from '../Redux/Action/Action'
import { connect } from 'react-redux'

const Shop = (props) => {

    const { products, addToCart } = props;
    console.log(props);
    return (
        <div>
            <h4> Shop :  </h4>
            {
                products.map(item => <Cart
                    item={item}
                    addToCart={addToCart}
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
    addToCart: addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop)
