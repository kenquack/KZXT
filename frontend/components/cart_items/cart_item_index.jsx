import React from 'react';
import CartItem from './cart_item';
import { MdClose } from 'react-icons/md'

class CartItemIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCartItems();
        this.props.fetchAllProducts();
        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    render() {
        if (!this.props.cartItems) return null;
        if (!this.props) return null;
        let usersCart = [];
        for (let i = 0; i < this.props.cartItems.length; i++) {
            if (this.props.cartItems[i].userId === this.props.currentUser.id){
                usersCart.push(this.props.cartItems[i])
            }
        }
        return (
            <div id='cartContainer'>
                <div id='cartHeader'>
                    <h2 id='cartTitle'>Your Cart</h2> 
                    <div id='cartAmount'>({usersCart.length})</div>
                    <button onClick={() => this.props.closeModal()} id='cartClose'><MdClose size='24px'/></button>
                </div>
                <div className='cartItemContainer'>
                    {usersCart.map(cartItem => { 
                        return <CartItem key={cartItem.id} cartItem={cartItem} products={this.props.products} deleteCartItem={this.props.deleteCartItem}/>})}
                </div>
            </div>
        )
    }
}

export default CartItemIndex