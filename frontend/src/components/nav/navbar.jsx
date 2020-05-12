import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../actions/session_actions'

const NavBar = ( {currentUser} ) => {
    const display = this.props.currentUser ? (
        <div>
            <NavLink to="/"></NavLink>
            <p>Welcome {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/signin'>Sign In</Link>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}

export default NavBar