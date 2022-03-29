import * as APIUtil from "../util/cart_item_api_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
});

export const fetchCartItems = () => dispatch => (
    APIUtil.fetchCartItems()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const fetchCartItem = cartItemId => dispatch => (
    APIUtil.fetchCartItem(cartItemId)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const createCartItem = (user_id, product_id, quantity) => dispatch => (
    APIUtil.createCartItem(user_id, product_id, quantity)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    APIUtil.deleteCartItem(cartItemId)
        .then(cartItem => dispatch(removeCartItem(cartItem)))
)

export const editCartItem = (cartItem, quantity) => dispatch => (
    APIUtil.editCartItem(cartItem, quantity)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)