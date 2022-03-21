import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions'
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    loginDemo: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);