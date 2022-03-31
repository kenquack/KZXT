import React from 'react';
import ProductIndex from './product_index';


const Filter = ({products, filter, updateFilter}) => {
    return (
        <div>
            <ProductIndex products={products} updateFilter={updateFilter} filter={filter}/>
        </div>
    )
}


export default Filter;