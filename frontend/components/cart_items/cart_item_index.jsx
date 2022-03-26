import React from 'react';
import CartItem from './cart_item';

class CartItemIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCartItems();
        this.props.fetchAllProducts();
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
            <div>
                {usersCart.map(cartItem => { 
                    return <CartItem key={cartItem.id} cartItem={cartItem} products={this.props.products} deleteCartItem={this.props.deleteCartItem}/>})}
            </div>
        )
    }
}

export default CartItemIndex