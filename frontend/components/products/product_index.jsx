import React from 'react';
import ProductIndexItem from './product_index_item';
import productLinks from './productLinks';

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

        let header;
        let message;
        let headerPic;
        let footerPic;
        if (this.props.filter.category === 'Gaming PC') {
            header = 'The Creator Series'
            message = 'Power the Imagination'
            headerPic = productLinks.gamingPC.header
            footerPic = productLinks.gamingPC.footer
        } else if (this.props.filter.category === 'Component'){
            header = 'The Kraken Series'
            message = 'AIO Liquid Cooler with LCD Display'
            headerPic = productLinks.component.header
            footerPic = productLinks.component.footer
        } else if (this.props.filter.category === 'Peripheral') {
            header = 'Capsule and Boom'
            message = 'Plug & Call The Shots'
            headerPic = productLinks.peripheral.header
            footerPic = productLinks.peripheral.footer
        }

        return (
            <div className='index-page'>
                <h2 className='index-header'>{header}</h2>
                <p id={`${this.props.filter.category}-message`}>{message}</p>
                <img src={headerPic} className='index-header-photo'/>
                <div className='index-container'>
                    {this.props.products.map(product => {
                        return <ProductIndexItem product={product} key={product.id} />
                    })}

                </div>
                <img src={footerPic} className='index-footer-photo'/>
            </div>
        )
    }
}

export default ProductIndex;