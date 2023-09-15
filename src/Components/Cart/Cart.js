import React from 'react'

const Cart = (props) => {
    const { item, addToCart } = props;
    return (
        <div>
            <h1> {item.name}  </h1>
            <button onClick={() => { addToCart(item.id) }} > Add to cart </button>
        </div>
    )
}

export default Cart
