import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions'
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))} className='submitButton'>
            Sign In
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);