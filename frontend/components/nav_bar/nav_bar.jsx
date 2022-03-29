import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.container = React.createRef();
        this.state = {
            open: false,
        };

        const queryParams = this.props.location.search
        this.category = (queryParams.substring(5).replaceAll('%20', ' '))
        this.props.updateFilter('category', this.category);

        this.handleClick = this.handleClick.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.openModal = this.openModal.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

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

    dropDown() {
        this.setState({
            open: !this.state.open
        })
    }

    signOut() {
        this.props.logout()
        this.setState({
            open: false,
        })
        setTimeout(
            this.props.history.push({
                    pathname: '/',
                })
            .then(
                location.reload()
            )
        )
    }
    openModal(target) {
        this.props.openModal(target)
        this.setState({
            open: false,
        })
    }

    render() {
        let cartButton;
        let signButton;
        if (this.props.currentUser) {
            cartButton = <button className='cartButton' onClick={() => this.openModal('cart')}>< FiShoppingCart size='24px'/></button>
            signButton = <button onClick={() => this.signOut()}>Sign Out</button>
        } else {
            signButton = <button onClick={() => this.openModal('login')}>Sign In</button>
            cartButton = <button className='cartButton' onClick={() => this.openModal('notLoggedIn')}>< FiShoppingCart size='24px'/></button>
        }

        const {closeModal} = this.props
        return(
            <div className='nav-bar-container'>
                <div className='nav-bar'>
                    <Link to='/' className='main-page-button' onClick={closeModal}>
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
                    <div className='logDrop' ref={this.container}>
                        <button className="loginButton" onClick={this.dropDown}>< FiUser size='25px'/></button>
                        {this.state.open && (
                            <div id='logContent'>
                                <ul>
                                    <li>{signButton}</li>
                                    <li>placehodler1</li>
                                    <li>placehodler2</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {cartButton}
            </div>
        </div>
        )
    }
}

export default withRouter(NavBar);