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
        // return (
        //     <div>test</div>
        // )
        if (!this.props.cartItems) return null;
        if (!this.props) return null;
        let usersCart = [];
        let totalItems = 0;
        for (let i = 0; i < this.props.cartItems.length; i++) {
            // if (this.props.cartItems[i].user_id === this.props.currentUser.id){
            // }
            totalItems += this.props.cartItems[i].quantity
            usersCart.push(this.props.cartItems[i])
        };

        let emptyCart;
        if (usersCart.length === 0) {
            emptyCart = (
                <div id='empty'>yo cart empty</div>
            )
        };

        let totalCost = 0;
        for (let i = 0; i < usersCart.length; i++) {
            let cartItem = usersCart[i]
            if (!this.props.products[cartItem.product_id - 1]) return null;
            let price = this.props.products[cartItem.product_id - 1].price * cartItem.quantity
            totalCost += price
        }
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

                <div id='footerBG'>
                    <div id='cartFooter'>
                        <h3 id='subtotal'>Subtotal
                        <span>${totalCost.toFixed(2)}</span> 
                        </h3>

                        <p id='taxes'>Taxes 
                        <span>Calculated at checkout</span>
                        </p>

                        <p id='shipping'>Estimated shipping 
                        <span>FREE</span>
                        </p>
                        <p id='footDescription'>*New and/or refurbished products may process and ship at different times.</p>

                        <button id='cartCheckout'>Proceed to Checkout</button>
                        <p id='affirm'>As low as $21/mo with<img src={window.affirmURL}/> <a href="https://www.linkedin.com/in/kennethquach/">Learn More.</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItemIndex