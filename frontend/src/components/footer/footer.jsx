import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/about">
                    <p>About Us</p>
                </NavLink>
            </div>
        )
    }
}

export default Footer;