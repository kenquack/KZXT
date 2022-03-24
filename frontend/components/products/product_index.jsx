import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let filter = JSON.stringify(this.props.filter)
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