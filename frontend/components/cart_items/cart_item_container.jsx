import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem, editCartItem } from '../../actions/cart_item_actions';
import { fetchAllProducts } from '../../actions/product_actions';
import CartItemIndex from './cart_item_index';
import { closeModal } from '../../actions/modal_actions'


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        cartItems: Object.values(state.entities.cartItems),
        products: Object.values(state.entities.products)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        closeModal: () => dispatch(closeModal()),
        editCartItem: (cartItem, quantity) => dispatch(editCartItem(cartItem, quantity))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndex);