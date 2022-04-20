import { connect } from 'react-redux';
import { createReview, editReview, deleteReview, fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
const mapStateToProps = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUser: Object.values(state.entities.users)[0],
    }
}

const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    editReview: (review) => dispatch(editReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)