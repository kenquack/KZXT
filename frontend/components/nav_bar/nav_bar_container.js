import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';
import { fetchCartItems } from '../../actions/cart_item_actions';

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    return {
        filter: state.ui.filters,
        currentUser: currentUser,
        cartItems: Object.values(state.entities.cartItems)
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    closeModal: () => dispatch(closeModal()),
    fetchCartItems: () => dispatch(fetchCartItems())
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);