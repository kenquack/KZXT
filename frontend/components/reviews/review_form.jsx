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
        this.changeRating = this.changeRating.bind(this);
    }

    updateText(e) {
        this.setState({ body: e.target.value });
    }

    changeRating(e){
        this.setState({rating: e.target.value})
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
            <div className='rating-form'>
                <div className='rating-container'>
                    <span>Select Rating</span>                                       
                    <select onChange={this.changeRating} rating={this.state.rating} value={this.state.rating}>   
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>             
                <form onSubmit={this.handleSubmit} id='review-create'>
                    <textarea type='text' value={this.state.body} onChange={this.updateText} placeholder='Write review here'></textarea><br/>
                    <button>Leave Review</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;