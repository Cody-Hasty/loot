import React from 'react';
import { NavLink } from 'react-router-dom';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    welcomeMessage() {
        if (this.props.currentUser.username) {
            return(
                <div className="welcome-message">
                    <div className="treasure-div">
                        <p className="treasure-glow">----</p>
                    </div>
                    <h3>Welcome, {this.props.currentUser.username}!</h3>
                    {/* <button onClick={this.props.logout()}></button> */}
                </div>
            )
        } else{
          return(
              <div className="welcome-message">
                  <div className="treasure-div">
                      <p className="treasure-glow">----</p>
                  </div>
                  {/* <p className="missing-user">There is no current user</p> */}
              </div>
            )
        }
    }

    render() {
        return (
            <div className="welcome-page">
                {this.welcomeMessage()}
                <NavLink to="/items">
                    <button className="loot-button">Browse Our Loot!</button>
                </NavLink>
                <NavLink to="/items/new">
                    <button className="loot-button">Make Some Loot!</button>
                </NavLink>
                <NavLink to="/games">
                    <button className="loot-button">Browse Games!</button>
                </NavLink>
            </div>
        )
    }
}

export default WelcomePage;