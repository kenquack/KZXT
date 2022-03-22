import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ( {product} ) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <h2>{product.description}</h2>
            <h2>{product.category}</h2>
            <h2>{product.price}</h2>
        </div>
    )
};

export default ProductIndexItem;