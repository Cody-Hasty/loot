import React from 'react';
import { NavLink } from 'react-router-dom';
// import { logout } from '../../actions/session_actions'

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
                <div>
                    <NavLink to="/register">Sign Up</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                </div>
            )
        }
        // else if (this.) {

        // }
    }

    logoutButton() {
        let buttonLogic = () => {
            this.props.logout();
        }

        if (this.props.currentUser.id) {
            return (
                <div>
                    <button onClick={buttonLogic()}>Log Out</button>
                </div>
            )
        }
    }



    

    render() {
        // console.log('navbar', this.props.location);
        return (
            <div>
                {this.getInButtons()}
                {this.logoutButton()}
            </div>
        )
    }
}

// const NavBar = ( {currentUser} ) => {
//     const display = this.props.currentUser ? (
//         <div>
//             <NavLink to="/"></NavLink>
//             <p>Welcome {currentUser.username}</p>
//             <button onClick={logout}>Log Out</button>
//         </div>
//     ) : (
//         <div>
//             <Link to='/signup'>Sign Up</Link>
//             <Link to='/signin'>Sign In</Link>
//         </div>
//     )

//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

export default NavBar