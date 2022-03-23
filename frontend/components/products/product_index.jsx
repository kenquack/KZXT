import React from 'react';
import ProductIndexItem from './product_index_item';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)
    }

    saveStateToLocalStorage() {
        localStorage.setItem('filter', JSON.stringify(this.props.filter))
    }

    componentDidMount() {
        let filter = localStorage.getItem('filter')
        this.props.updateFilter('category', JSON.parse(filter).category)
    }

    componentWillUnmount() {
        this.props.updateFilter('category', '')
    }

    render() {
        if (!this.props.products) return null;
        return (
            <div>
                {this.props.products.map(product => {
                    return <ProductIndexItem product={product} key={product.id} />
                })}
            </div>
        )
    }
}

export default ProductIndex;