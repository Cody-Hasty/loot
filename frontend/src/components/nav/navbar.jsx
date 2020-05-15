import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    getInButtons() {
        if (!this.props.currentUser.id) {
            return (
                <div className="session-buttons">
                    <NavLink to="/register">
                        <button className="signup-button">Sign Up</button>
                    </NavLink>
                    <h1 className="website-title glow">LOOT</h1>
                    <NavLink to="/login">
                        <button className="login-button">Log In</button>
                    </NavLink>
                </div>
            )
        }
    }

    logoutButton() {
        let buttonLogic = () => {
            this.props.logout();
        }

        if (this.props.currentUser.id) {
            return (
                <div className="session-buttons">
                    <button onClick={buttonLogic()} className="logout-button">Log Out</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="navbar">
                {this.getInButtons()}
                {this.logoutButton()}
            </div>
        )
    }
}

export default NavBar