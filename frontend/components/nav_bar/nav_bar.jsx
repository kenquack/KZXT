import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        const queryParams = this.props.location.search
        this.category = (queryParams.substring(5).replaceAll('%20', ' '))
        this.props.updateFilter('category', this.category);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(category) {
        this.props.updateFilter('category', category)
            .then(
                this.props.history.push({
                    pathname: '/products/',
                    search: `q=d=${category}`
                })
            ).then(
                location.reload()
            );
    }

    render() {
        let cartButton;
        if (this.props.currentUser) {
            cartButton = <button className='cartButton' onClick={() => this.props.openModal('cart')}>< FiShoppingCart size='24px'/></button>
        } else {
            cartButton = <button className='cartButton' onClick={() => this.props.openModal('notLoggedIn')}>< FiShoppingCart size='24px'/></button>
        }

        return(
            <div className='nav-bar-container'>
            <div className='nav-bar'>
                <Link to='/' className='main-page-button'>
                    <img src={window.logoURL} id='logo'/>
                </Link>
                <ul className='nav-category-container'>
                    <li className="nav-categories">
                        <NavLink to='/products' className='link' onClick={() => this.handleClick("Gaming PC")} replace>Gaming PCs</NavLink>
                    </li>

                    <li className='nav-categories'>
                        <NavLink to='/products' className='link' onClick={ () => this.handleClick("Component")} replace>Components</NavLink>
                    </li>

                    <li className='nav-categories'>
                        <NavLink to='/products' className='link' onClick={ () => this.handleClick("Peripheral")} replace>Peripherals</NavLink>
                    </li>

                </ul>
                <button className='searchButton'>< FiSearch size='25px'/></button>
                <button className="loginButton" onClick={() => this.props.openModal('login')}>< FiUser size='25px'/></button>
                {/* <button className='cartButton' onClick={() => this.props.openModal('cart')}>< FiShoppingCart size='24px'/></button> */}
                {cartButton}
                <button onClick={() => this.props.logout()}>Logout</button>
            </div>
        </div>
        )
    }
}

export default withRouter(NavBar);