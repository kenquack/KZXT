import { OPEN_MODAL } from "../actions/modal_actions";
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS } from "../actions/session_actions"

const sessionErrorsReducer = (state = [], action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case REMOVE_ERRORS:
            return [];
        case OPEN_MODAL:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;