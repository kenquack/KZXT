import { connect } from 'react-redux';
import React from 'react';
import { updateFilter } from '../../actions/filter_actions';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.updateFilter('category', '')
    }


    render() {
        if (!this.props.products) return null;

        return (
            <div className='body-container'>
                <h2 id='body-header'>Shop Our Favorites</h2>
                <div className='body-preview'>
                    {this.props.products.map((item) => {
                        return (
                            <div className='body-preview-item' key={item.id}>
                                {/* <img src={window.catURL}/> */}
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.photoUrl} id='body-preview-image'/>
                                </Link>
                                <div id='body-item-name'>
                                    {item.name}
                                </div>
                                <br/>
                                <div id='body-item-price'>
                                    ${item.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products)
    }
};

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);