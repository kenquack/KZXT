import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
    }

    render() {
        if (!this.props.product) return null;
        const { product, currentUser } = this.props;

        return (
            <div>
                {/* <img src={product.photoUrl} className='show-product-photo'/> */}
                <img src={window.catURL} className='show-product-photo'/>
                <h2>{product.name}</h2>
                <span>{product.price}</span>
                <br/>
                <span>{product.description}</span>
                <h3>Buy</h3>
                <div>
                    <span>Quantity</span>                                       
                    <select>   
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>              
                <button id='addCart'>Add to Cart</button>
            </div>
        )
    }
}

export default ProductShow;