import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { FiUser, FiShoppingCart, FiSearch, FiGithub } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.logContainer = React.createRef();
        // this.searchContainer = React.createRef(); this is for the drop down menu to work on specific columns
        this.state = {
            // searchOpen: false,
            logOpen: false,
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
        this.props.fetchCartItems();
    }

    handleClickOutside = (event) => {
        if (this.logContainer.current && !this.logContainer.current.contains(event.target)) {
            this.setState({
                logOpen: false,
            });
        }

        // if (this.searchContainer.current && !this.searchContainer.current.contains(event.target)){
        //     this.setState({
        //         searchOpen: false,
        //     });
        // }
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

    dropDown(input) {

        switch(input){
            // case 'search':
            //     this.setState({
            //         searchOpen: true
            //     })
            //     break;
            case 'log':
                this.setState({
                    logOpen: true
                })
                break;
            default:
                return null;
        }
    }

    signOut() {
        this.props.logout()
        this.setState({
            // searchOpen: false,
            logOpen: false,
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
            // searchOpen: false,
            logOpen: false,
        })
    }

    render() {
        const {closeModal, cartItems, currentUser} = this.props
        
        // cart count number
        let cartCount = 0;
        cartItems.map((item) => {cartCount += item.quantity})
        let counter;
        if (cartCount !== 0 && currentUser) {
            counter = <div id='navCartCount'><p>{cartCount}</p></div>
        } else {
            counter = <div></div>
        }

        // logic for what each buttons does
        let cartButton;
        let signButton;
        if (currentUser) {
            cartButton = <button className='cartButton' onClick={() => this.openModal('cart')}>< FiShoppingCart size='2.5vh'/></button>
            signButton = <button onClick={() => this.signOut()} className='signButton'>Sign Out</button>
        } else {
            signButton = <button onClick={() => this.openModal('login')} className='signButton'>Sign In</button>
            cartButton = <button className='cartButton' onClick={() => this.openModal('notLoggedIn')}>< FiShoppingCart size='2.5vh'/></button>
        }

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
                    <div className='searchDrop'>
                        <button className='searchButton' onClick={() => this.openModal('search')}>< FiSearch size='2.5vh'/></button>
                        {/* {this.state.searchOpen && (
                            <div className='searchBar'>
                                <span><FiSearch /></span>
                                <input type="text" placeholder="Search KZXT.." autoFocus/>
                            </div>
                        )} */}
                    </div>
                    <div className='logDrop' ref={this.logContainer}>
                        <button className="loginButton" onClick={() => this.dropDown('log')}>< FiUser size='2.5vh'/></button>
                        {this.state.logOpen && (
                            <div id='logContent'>
                                <img src={window.triangleURL}></img>
                                <ul id='leftContent'>
                                    <li><a href="https://github.com/kenquack" className='nav-social'>Github</a></li>
                                    <li><a href="https://www.linkedin.com/in/kennethquach/" className='nav-social'>LinkedIn</a></li>
                                    <li><a href="https://angel.co/u/kenneth-quach" className='nav-social'>AngelList</a></li>
                                    <li>{signButton}</li>
                                </ul>
                                <div id='dropDes'>
                                    <h3>About</h3>
                                    <p>KZXT is a clone of the website 'NZXT'! <br></br><br></br>
                                        NZXT is an e-commerce site that <br></br>specializes in computer components.  <br></br><br></br>Hope you enjoy!
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='socials'>
                        <a href="https://github.com/kenquack"> <FiGithub /></a>
                        <a href="https://www.linkedin.com/in/kennethquach/"> <FaLinkedin /></a>
                    </div>
                    <span>{counter}</span>
                    {cartButton}
            </div>
        </div>
        )
    }
}

export default withRouter(NavBar);