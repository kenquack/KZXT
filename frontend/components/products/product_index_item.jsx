import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ( {product} ) => {
    return (
        <div className='product-holder'>
            <div className='product-image-container'>
                <Link to={`/products/${product.id}`}>
                    <img src={product.photoUrl}/>
                </Link>
            </div>
            <h3 className='product-index-name'>{product.name}</h3>
            <span className='product-index-price'>{product.price}</span>
        </div>
    )
};

export default ProductIndexItem;