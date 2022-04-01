import { connect } from 'react-redux';
import React from 'react';
import { updateFilter } from '../../actions/filter_actions';

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
            <div>
                <h2 id='body-header'>Shop Our Favorites</h2>
                <div className='body-preview'>
                    {this.props.products.map((item) => {
                        return (
                            <div className='body-preview-item'>
                                <img src={window.catURL}/>
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