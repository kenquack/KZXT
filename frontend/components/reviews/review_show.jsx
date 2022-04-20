import React from 'react';

class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
        this.showContainer = React.createRef();

        this.state = {
            body: this.props.review.body,
            editMode: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
            body: this.state.body
        };
        this.props.editReview(newReview)
        

        this.setState({
            editMode: false,
        })
    }

    render() {
        const review = this.props.review

        return (
            <div className='review-show' ref={this.showContainer}>
                {this.state.editMode && (
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.body} onChange={this.update('body')}></textarea>
                        <button>Save Changes</button>
                    </form>
                )}
                {!this.state.editMode && (
                    <div>
                        {this.state.body}
                    </div>
                )}
                {this.props.currentUser.id === review.userId && !this.state.editMode && (
                    <div>
                        <button onClick={() => this.editReview()}>Edit</button> 
                        <button onClick={(e) => this.deleteReview(e, review.id)}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default ReviewShow;