import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            rating: 1,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.currentUser) return this.props.openModal('login');
        let review = { 
            user_id: this.props.currentUser.id, 
            product_id: this.props.product.id, 
            body: this.state.body, 
            rating: this.state.rating 
        }

        this.props.createReview(review);
        this.setState({
            body: '',
            rating: 1,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea type='text' value={this.state.text} onChange={this.updateText}></textarea>
                    <button>Leave Review</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;