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
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        this.props.updateFilter('category', '')
    }

    render() {
        window.scrollTo(0, 0); //brings to top of page
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
                {/* <img src={headerPic} className='index-header-photo'/> */}
                <img src='https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg' className='index-header-photo'/>
                <div className='text-container'>
                    <div id='sticky'>
                        <h3>THIS IS A HEADER</h3>
                        <p>This is the text that will be changed but this is just a placeholder to see how it looks.</p>             
                    </div>              
                </div>
                <div className='index-container'>
                    {this.props.products.map(product => {
                        return <ProductIndexItem product={product} key={product.id} />
                    })}

                </div>
                {/* <img src={footerPic} className='index-footer-photo'/> */}
                <img src='https://icatcare.org/app/uploads/2018/07/Elderly-cats.png' className='index-footer-photo'/>
            </div>
        )
    }
}

export default ProductIndex;