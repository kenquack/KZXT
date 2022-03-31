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
        console.log(this.props.products)
        return (
            <div>hello</div>
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