import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    let user = state.entities.users[state.session.id];
    return ({
        user: user
    });
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);