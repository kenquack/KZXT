import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {user, logout} ) => {
   
    return(
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <Link to='/' className='main-page-button'>NZXT</Link>
                <ul className='nav-category-container'>
                    <li className='nav-categories'>Gaming PCs</li>
                    <li className='nav-categories'>Components</li>
                    <li className='nav-categories'>Peripherals</li>
                </ul>
                <Link to='/login' className='loginButton'>Log In</Link>
                <Link to='/' className='cartButton'>Cart</Link>
            </div>
        </div>

    )
}

export default NavBar;