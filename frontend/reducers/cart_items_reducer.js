import { 
    RECEIVE_CART_ITEMS, 
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM,  
} from '../actions/cart_item_actions';

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            if (!action.cartItem) return newState;
            newState[action.cartItem.id] = action.cartItem;
            return newState;
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId.id]
            return newState;
        default:
            return state;
    }
};

export default cartItemsReducer;