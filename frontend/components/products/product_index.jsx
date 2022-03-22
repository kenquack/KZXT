import React from 'react';
import ProductIndexItem from './product_index_item';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions'

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllProducts();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.products.map(product => {
                    return <ProductIndexItem product={product} key={product.id} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);