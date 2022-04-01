import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: []
        }
        this.searchChange = this.searchChange.bind(this)
    }

    searchChange(e) {
        this.setState({
            search: e.target.value
        })

        if (e.target.value !== '') {
            let filtered = [];
            const products = this.props.products
            for(let i = 0; i < products.length; i++) {
                if (products[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    filtered.push(products[i])
                } else if (products[i].category.toLowerCase().includes(e.target.value.toLowerCase())) {
                    filtered.push(products[i])
                }
                // to limit amount of AWS requests
                // future feature, include button to lead user to page of results
                if (filtered.length > 2) {
                    break;
                }
            };
            this.setState({
                results: filtered
            })
        } else {
            this.setState({
                results: []
            });
        };
    };

    componentDidMount() {
        document.body.style.overflow = "hidden";
        this.props.fetchAllProducts();
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    render() {
        const {closeModal} = this.props
        let response;
        if (this.state.results.length === 0 && this.state.search === '') {
            response =  <div>Search by name or category!</div>
        } else if (this.state.results.length === 0) {
            response = <div>No results found!</div>
        } else {
            response = this.state.results.map(product => (
                <Link to={`/products/${product.id}`} key={product.id} className='resultProduct' onClick={closeModal}>
                {/* <Link to={`/products/${product.id}`} key={product.id} className='resultProduct'></Link> */}
                    {/* <div><img src={window.catURL} className='resultPic'></img></div> */}
                    <div><img src={product.photoUrl} className='resultPic'/></div>
                    <h3>{product.name}</h3>
                </Link>
            ))
        }

        return (
            <div>
                <div className='searchBar'>
                    <span><FiSearch /></span>
                    <input type="text" placeholder="Search KZXT.." onChange={(e) => this.searchChange(e)} autoFocus/>
                </div>
                <div className='resultsContainer'>
                    {response}
                </div>
            </div>
        )
    }
}

export default SearchBar;