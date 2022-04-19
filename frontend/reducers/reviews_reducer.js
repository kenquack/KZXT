import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';
import { RECEIVE_PRODUCT } from '../actions/product_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PRODUCT:
            if (action.product.reviews) {
                return action.product.reviews;
            } else {
                return newState;
            }
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.review.id]
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;