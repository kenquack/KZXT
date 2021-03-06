import React from 'react';
import {FiEdit, FiTrash2 } from 'react-icons/fi'

class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
        this.showContainer = React.createRef();
       
        const userName = this.props.review.name.split('@')[0]
        this.state = {
            userName: userName,
            body: this.props.review.body,
            rating: this.props.review.rating,
            editMode: false,
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    handleClickOutsideForm = (event) => {
        if (this.showContainer.current && !this.showContainer.current.contains(event.target)) {
            this.setState({
                editMode: false,
            });
        }
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    deleteReview(e, id) {
        e.preventDefault();
        this.props.deleteReview(id);
    }

    editReview() {
        this.setState({
            editMode: true,
        })
        document.addEventListener("mousedown", this.handleClickOutsideForm);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = this.props.review
        let newReview = {
            id: review.id,
            body: this.state.body,
            rating: this.state.rating,
        };
        this.props.editReview(newReview)
        

        this.setState({
            editMode: false,
        })
    }

    changeRating(e){
        this.setState({rating: e.target.value})
    }

    rating() {
        return [...Array(5)].map(( _,idx ) => {
            if (idx + 1 <= this.props.review.rating) return "★"
            return "☆"
        })
    }

    render() {
        const review = this.props.review
        return (
            <div className='review-show' ref={this.showContainer}>
                <div className='review-container'>
                    <div className='reviewer-picture'>
                        {this.state.userName[0]}
                    </div>
                    <h2 className='reviewer-username'>
                        {this.state.userName}
                    </h2>
                    <div>
                        <div className='review-rating'>{this.rating()}</div>
                        <div className='review-date'>{review.date}</div>
                        {this.props.currentUser && this.props.currentUser.id === review.userId && !this.state.editMode && (
                            <div className='review-icons'>
                                <button onClick={() => this.editReview()}><FiEdit/></button> 
                                <button onClick={(e) => this.deleteReview(e, review.id)}><FiTrash2 /></button>
                            </div>
                        )}
                    </div>
                </div>
                
                {this.state.editMode && (
                    <div className='review-edit'>
                        <span>Rating</span> 
                        <select onChange={this.changeRating} rating={this.state.rating} value={this.state.rating}>   
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <form onSubmit={this.handleSubmit}>
                            <textarea value={this.state.body} onChange={this.update('body')} id='edit-text'></textarea><br/>
                            <div className='edit-buttons'>
                                <button type='submit'>Save Changes</button>
                                <button onClick={() => this.setState({editMode: false})}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
                {!this.state.editMode && (
                    <div className='review-body'>
                        {this.state.body}
                    </div>
                )}
            </div>
        )
    }
}

export default ReviewShow;