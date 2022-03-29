import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { changeFilter, updateFilter } from '../../actions/filter_actions'

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    return {
        filter: state.ui.filters,
        currentUser: currentUser,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);