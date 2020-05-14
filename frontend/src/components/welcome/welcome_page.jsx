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
                <div>
                    <div className="title-div">
                        <h1 className="website-title glow">LOOT</h1>
                    </div>
                    Welcome {this.props.currentUser.username}
                    {/* <button onClick={props.logout()}></button> */}
                </div>
            )
        } else{
          return(
              <div>
                  <div className="title-div">
                      <h1 className="website-title glow">LOOT</h1>
                  </div>
                  <p className="missing-user">There is no current user</p>
              </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.welcomeMessage()}
                {/* hello world */}
            </div>
        )
    }
}

export default WelcomePage;