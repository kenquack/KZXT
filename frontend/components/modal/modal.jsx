import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/sign_up_form_container';
import CartItemContainer from '../cart_items/cart_item_container';
import LoggedIn from '../nav_bar/require_logged_in';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  if (modal) {
    let body = document.getElementById
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'cart':
      component = <CartItemContainer />;
      break;
    case 'notLoggedIn':
      component = <LoggedIn />
      break;
    default:
      return null;
  }
  if (modal === 'cart') {
    return (
      <div className="cart-background" onClick={closeModal}>
        <div className='cartWindow' onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  } else {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);