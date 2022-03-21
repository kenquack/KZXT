import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {user, logout} ) => {
    let welcome;
    if (user) {
        welcome = 
            <div>
                <h1>Welcome, `{user.email}`</h1>
                <button onClick={logout}>Log Out</button>
            </div>
    } else {
        welcome = 
            <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
    };

    return(
        <div>
            {welcome}
        </div>

    )
}

export default NavBar;