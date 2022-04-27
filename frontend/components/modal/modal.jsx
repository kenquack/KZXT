import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/sign_up_form_container';
import CartItemContainer from '../cart_items/cart_item_container';
import SearchBar from '../nav_bar/search_bar_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
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
    case 'search':
      component = <SearchBar />;
      break;
    default:
      return null;
  }
  if (modal === 'search') {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="searchWindow" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
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