import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { createCartItem, editCartItem, fetchCartItems } from '../../actions/cart_item_actions';
import { openModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, {match}) => {
    const currentUser = state.entities.users[state.session.id]
    const product = state.entities.products[match.params.id]
    const cartItems = Object.values(state.entities.cartItems)
    return {
        currentUser: currentUser,
        product: product,
        cartItems: cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        createCartItem: (user_id, product_id, quantity) => dispatch(createCartItem(user_id, product_id, quantity)),
        fetchCartItems: () => dispatch(fetchCartItems()),
        editCartItem: (cartItem, quantity) => dispatch(editCartItem(cartItem, quantity)),
        openModal: (modal) => dispatch(openModal(modal)),
        createReview: (review) => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
