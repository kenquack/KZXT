import React from 'react';
import ReviewShow from './review_show';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.product.id);
    }

    render() {
        const reviews = this.props.reviews
        let reviewIndex;
        if (reviews.length === 0) {
            reviewIndex = 
            <div className='no-reviews'>
                Be the first to leave a review.
            </div>
        } else {
            reviewIndex = 
            <div id='reviews'>
                {reviews.map((review) => {
                    return (
                        <div key={review.id}>
                            <ReviewShow 
                                review={review} 
                                deleteReview={this.props.deleteReview} 
                                currentUser={this.props.currentUser}
                                editReview={this.props.editReview}
                            />
                        </div>
                    )
                })}
            </div>
        }
        return (
            <div>
                {reviewIndex}
            </div>
        )
    }
}

export default ReviewIndex;