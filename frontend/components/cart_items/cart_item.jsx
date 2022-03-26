import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const product = this.props.products[this.props.cartItem.productId - 1];
        const cartItem = this.props.cartItem;

        return (
            <div className='cartItem'>
                {product.name}
                {product.price}
                <label>Quantity
                    {cartItem.quantity}
                </label>
                <img src={window.catURL} className='index-product-photo'/>
            </div>
        )
    }
}

export default CartItem;
