import React from 'react';
import CartItem from './cart_item';
import { MdClose } from 'react-icons/md'

class CartItemIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: 0
        }
    }

    componentDidMount() {
        this.props.fetchCartItems();
        this.props.fetchAllProducts();
        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    cartQuantity() {
        this.setState(this.state.quantity + 1)
    }

    render() {
        if (!this.props.cartItems) return null;
        if (!this.props) return null;

        let usersCart = [];
        let totalItems = 0;
        for (let i = 0; i < this.props.cartItems.length; i++) {
            totalItems += this.props.cartItems[i].quantity
            if (this.props.cartItems[i].userId === this.props.currentUser.id){
                usersCart.push(this.props.cartItems[i])
            }
        };

        let emptyCart;
        if (usersCart.length === 0) {
            emptyCart = (
                <div id='empty'>yo cart empty</div>
            )
        };

        return (
            <div id='cartContainer'>
                <div id='cartHeader'>
                    <h2 id='cartTitle'>Your Cart</h2> 
                    <div id='cartAmount'>({totalItems})</div>
                    <button onClick={() => this.props.closeModal()} id='cartClose'><MdClose size='24px'/></button>
                </div>
                {emptyCart}
                <div className='cartItemContainer'>
                    {usersCart.map(cartItem => { 
                        return <CartItem key={`${cartItem.id}`} cartItem={cartItem} products={this.props.products} deleteCartItem={this.props.deleteCartItem} editCartItem={this.props.editCartItem} />})}
                </div>
            </div>
        )
    }
}

export default CartItemIndex