import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        errors: state.errors.session,
        formType: 'login'
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);