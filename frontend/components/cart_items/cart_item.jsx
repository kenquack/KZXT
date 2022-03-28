import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.cartItem.quantity
        }
    }

    adjustQuantity(type) {
        switch(type) {
            case 'increase':
                this.setState({quantity: this.state.quantity + 1});
                break;
            case 'decrease':
                this.setState({quantity: this.state.quantity - 1});
                break;
        }
    }

    render() {
        const product = this.props.products[this.props.cartItem.productId - 1];
        if (!product) return null;

        return (
            <div className='cartItem'>
                <div>
                    <img src={window.catURL} className='cart-product-photo'/>
                </div>

                <div className='cartDes'>
                    <div id='cartName'>
                        {product.name}
                        <span>
                            <button id='cartTrash'><FaTrashAlt size='18px'/></button>
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
