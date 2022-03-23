import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { changeFilter, updateFilter } from '../../actions/filter_actions'

const mapStateToProps = (state) => {
    return {
        filter: state.ui.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);