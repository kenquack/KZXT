import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
};

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
};

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
});

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const clearErrors = errors => ({
    type: CLEAR_REVIEW_ERRORS,
    errors
});

export const fetchReview = (reviewId) => dispatch => (
    APIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const fetchReviews = (productId) => dispatch => (
    APIUtil.fetchReviews(productId)
        .then(reviews => dispatch(receiveReviews(reviews)))
);

export const createReview = (review) => dispatch => (
    APIUtil.createReview(review)
        .then(createdReview => dispatch(receiveReview(createdReview)), 
        errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const editReview = (review) => dispatch => (
    APIUtil.updateReview(review)
        .then(updatedReview => dispatch(receiveReview(updatedReview)), 
        errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteReview = (reviewId) => dispatch => (
    APIUtil.deleteReview(reviewId)
        .then(review => dispatch(removeReview(review)))
);