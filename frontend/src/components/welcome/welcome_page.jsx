import React from 'react';

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

                    </div>
                    Welcome {this.props.currentUser.username}
                    {/* <button onClick={props.logout()}></button> */}
                </div>
            )
        } else{
          return(
              <div className="welcome-message">
                  <div className="treasure-div">
                      <p className="treasure-glow">----</p>
                  </div>
                  <p className="missing-user">There is no current user</p>
              </div>
            )
        }
    }

    render() {
        return (
            <div className="welcome-page">
                {this.welcomeMessage()}
                {/* hello world */}
            </div>
        )
    }
}

export default WelcomePage;