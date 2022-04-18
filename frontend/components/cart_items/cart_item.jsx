import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cartItem.quantity,
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem() {
        this.props.deleteCartItem(this.props.cartItem.id)
        this.setState({quantity: 0})
    }

    adjustQuantity(type) {
        const product = this.props.cartItem
        switch(type) {
            case 'increase':
                this.setState({quantity: this.state.quantity + 1});
                this.props.editCartItem(product, this.state.quantity + 1)
                break;
            case 'decrease':
                if (this.state.quantity - 1 === 0) {
                    this.props.deleteCartItem(product.id)
                    this.setState({quantity: 0})
                } else {
                    this.setState({quantity: this.state.quantity - 1});
                    this.props.editCartItem(product, this.state.quantity - 1)
                }
                break;
        }
    }

    render() {
        const product = this.props.products[this.props.cartItem.product_id - 1];
        if (!product) return null;
        if (this.state.quantity === 0) {
            this.props.deleteCartItem(this.props.cartItem.id)
            return null;
        }
        return (
            <div className='cartItem'>
                <div>
                    {/* <img src={window.catURL} className='cart-product-photo'/> */}
                    <img src={product.photoUrl} className='cart-product-photo'/>
                </div>

                <div className='cartDes'>
                    <div id='cartName'>
                        {product.name}
                        <span>
                            <button id='cartTrash' onClick={this.deleteItem}><FaTrashAlt size='18px'/></button>
                        </span>
                    </div>

                    <div>
                        <div className='cartQuantityContainer'>
                            <button onClick={() => this.adjustQuantity('decrease')}>-</button>
                                <div id='cartQuantity'>
                                    {this.state.quantity}
                                </div>
                            <button onClick={() => this.adjustQuantity('increase')}>+</button>
                        </div>
                    </div>

                        <span id='cartPrice'>
                            ${product.price}
                        </span>
                    
                </div>
            </div>
        )
    }
}

export default CartItem;
