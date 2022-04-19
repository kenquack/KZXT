import React from 'react';
import ReviewIndexContainer from '../reviews/reviews_container';
import ReviewForm from '../reviews/review_form';

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
            if (cartItems[i].product_id === this.props.product.id) {
                if (cartItems[i].user_id === this.props.currentUser.id) {
                    let newQuantity = this.state.quantity + cartItems[i].quantity
                    this.props.editCartItem(cartItems[i], newQuantity).then(() => this.props.openModal('cart'))
                    return;
                }
            }
        }
        this.props.createCartItem(this.props.currentUser.id, this.props.product.id, this.state.quantity).then(() => this.props.openModal('cart'));
    }

    render() {
        window.scrollTo(0, 0)
        if (!this.props.product) return null;
        const { product, currentUser } = this.props;

        let cartButton;
        if (!currentUser) {
            cartButton = <button onClick={() => this.props.openModal('notLoggedIn')} id='addCart'>Add to Cart</button>
        } else {
            cartButton = <button onClick={(e) => this.addToCart(e)} id='addCart'>Add to Cart</button>
        }

        return (
            <div>
                <div id='show-page'>
                    <img src={product.photoUrl} className='show-product-photo'/>
                    {/* <img src={window.catURL} className='show-product-photo'/> */}
                    <div className='show-info'>
                        <h2>{product.name}
                            <span id='show-price'>${product.price}</span>
                        </h2>
                        <br/>
                        <h3>Details</h3>
                        <div className='show-description'>{product.description}</div>
                        <h3>Buy</h3>
                        <div id='qty-container'>
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
                        <p id='show-affirm'>As low as $21/mo with<img src={window.affirmURL}/> Learn More.</p>
                    </div>
                </div>
                <ReviewIndexContainer product={product}/>
                <ReviewForm openModal={this.props.openModal} currentUser={this.props.currentUser} product={this.props.product} createReview={this.props.createReview}/>
            </div>
        )
    }
}

export default ProductShow;