import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions'
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))} className='submitButton'>
            Create account
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);