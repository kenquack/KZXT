import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import { signUpUser, logInUser, logOutUser} from './util/session_api_util'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signUpUser = signUpUser;
  window.logInUser = logInUser;
  window.logOutUser = logOutUser;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});