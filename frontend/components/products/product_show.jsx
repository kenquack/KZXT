import React from 'react';


class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
        }
        this.changeQuantity = this.changeQuantity.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id);
        this.props.fetchCartItems();
    }
    
    changeQuantity(e){
        this.setState({quantity: e.target.value})
    }
    
    addToCart(e) {
        e.preventDefault();
        let cartItems = this.props.cartItems
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].productId === this.props.product.id || cartItems[i].product_id === this.props.product.id) {
                if (cartItems[i].userId === this.props.currentUser.id) {
                    let newQuantity = this.state.quantity + cartItems[i].quantity
                    this.props.editCartItem(cartItems[i], newQuantity).then(() => this.props.openModal('cart'))
                    return;
                }
            }
        }
        this.props.createCartItem(this.props.currentUser.id, this.props.product.id, this.state.quantity).then(() => this.props.openModal('cart'));
    }

    render() {
        if (!this.props.product) return null;
        const { product, currentUser } = this.props;

        let cartButton;
        if (!currentUser) {
            cartButton = <button onClick={(e) => this.props.openModal('notLoggedIn')} id='addCart'>Add to Cart</button>
        } else {
            cartButton = <button onClick={(e) => this.addToCart(e)} id='addCart'>Add to Cart</button>
        }

        return (
            <div>
                {/* <img src={product.photoUrl} className='show-product-photo'/> */}
                <img src={window.catURL} className='show-product-photo'/>
                <h2>{product.name}</h2>
                <div>{product.price}</div>
                <br/>
                <div>{product.description}</div>
                <h3>Buy</h3>
                <div>
                    <span>QTY</span>                                       
                    <select onChange={this.changeQuantity} quantity={this.state.quantity}>   
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>              
                {cartButton}
            </div>
        )
    }
}

export default ProductShow;