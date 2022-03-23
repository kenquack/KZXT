import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// const NavBar = ( { openModal } ) => {
//     return(
//         <div className='nav-bar-container'>
//             <div className='nav-bar'>
//                 <Link to='/' className='main-page-button'>NZXT</Link>
//                 <ul className='nav-category-container'>
//                     <li>
//                         <Link to='/products' className='nav-categories'>Gaming PCs</Link>
//                     </li>
//                     <li className='nav-categories'>Components</li>
//                     <li className='nav-categories'>Peripherals</li>
//                 </ul>
//                 <button className="loginButton" onClick={() => openModal('login')}>Login</button>
//                 <Link to='/' className='cartButton'>Cart</Link>
//             </div>
//         </div>
//     )
// }

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        return(e) => {
            this.props.updateFilter('category', value)
        }
    }

    render() {
        return(
            <div className='nav-bar-container'>
            <div className='nav-bar'>
                <Link to='/' className='main-page-button'>NZXT</Link>
                <ul className='nav-category-container'>
                    <li className="nav-categories">
                        <NavLink to='/products' className='link' onClick={this.handleClick("Gaming PC")} replace>Gaming PCs</NavLink>
                    </li>

                    <li className='nav-categories'>
                        <NavLink to='/products' className='link' onClick={this.handleClick("Component")} replace>Components</NavLink>
                    </li>

                    <li className='nav-categories'>
                        <NavLink to='/products' className='link' onClick={this.handleClick("Peripheral")} replace>Peripherals</NavLink>
                    </li>

                </ul>
                <button className="loginButton" onClick={() => this.props.openModal('login')}>Login</button>
                <Link to='/' className='cartButton'>Cart</Link>
            </div>
        </div>
        )
    }
}

export default NavBar;