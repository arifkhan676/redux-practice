import React from 'react'
import { addToCart, removeToCart } from '../Redux/Action/Action';
import { connect } from 'react-redux';

const Cart = (props) => {
    const { item, addToCart } = props;
    // console.log(props);
    return (
        <div>
            <h1> {item.name}  </h1>
            <button onClick={() => { addToCart(item.id, item.name) }} > Add to cart </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)
