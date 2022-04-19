import React from 'react';

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
            <div>
                Be the first to leave a review.
            </div>
        } else {
            reviewIndex = 
            <div id='reviews'>
                {reviews.map((review) => {
                    return (
                        <div>{review.body}</div>
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