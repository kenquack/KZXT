import React from 'react';
import ProductIndexItem from './product_index_item';
import productLinks from './productLinks';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: this.props.products,
        }
    }

    componentDidMount() {
        let filter = JSON.stringify(this.props.filter)
        this.props.updateFilter('category', JSON.parse(filter).category)
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.products.length === 0 && this.props.products.length !== 0) {
            this.setState({
                products: this.props.products
            })
        }
    }

    componentWillUnmount() {
        this.props.updateFilter('category', '')
    }

    render() {
        window.scrollTo(0, 0); 
        if (!this.props.products) return null;

        let header;
        let header2;
        let message;
        let message2;
        let headerPic;
        let footerPic;
        if (this.props.filter.category === 'Gaming PC') {
            header = 'The Creator Series'
            header2 = 'ADVENTURE IN A BOX'
            message = 'Power the Imagination'
            message2 = 'Embark on an exciting new adventure into PC gaming.'
            headerPic = productLinks.gamingPC.header
            footerPic = productLinks.gamingPC.footer
        } else if (this.props.filter.category === 'Component'){
            header = 'The Kraken Series'
            header2 = 'THE LIMITLESS KRAKEN Z'
            message = 'AIO Liquid Cooler with LCD Display'
            message2 = 'The Kraken Z Series provides unique personality with a customizable LCD display.'
            headerPic = productLinks.component.header
            footerPic = productLinks.component.footer
        } else if (this.props.filter.category === 'Peripheral') {
            header = 'Capsule and Boom'
            header2 = 'MEET CAPSULE AND BOOM'
            message = 'Plug & Call The Shots'
            message2 = 'NZXT Capsule and Boom Arm are designed for a simple plug-and play experience, making them perfect companions for communicating while gaming or streaming.'
            headerPic = productLinks.peripheral.header
            footerPic = productLinks.peripheral.footer
        }

        return (
            <div className='index-page'>
                <h2 className='index-header'>{header}</h2>
                <p id={`${this.props.filter.category}-message`}>{message}</p>
                <img src={headerPic} className='index-header-photo'/>
                {/* <img src='https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg' className='index-header-photo'/> */}
                <div className='text-container'>
                    <div id='sticky'>
                        <h3>{header2}</h3>
                        <p>{message2}</p>             
                    </div>              
                </div>
                <div className='index-container'>
                    {this.state.products.map(product => {
                        return <ProductIndexItem product={product} key={product.id} />
                    })}

                </div>
                <img src={footerPic} className='index-footer-photo'/>
                {/* <img src='https://icatcare.org/app/uploads/2018/07/Elderly-cats.png' className='index-footer-photo'/> */}
            </div>
        )
    }
}

export default ProductIndex;