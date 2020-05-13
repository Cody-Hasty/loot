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
                    Welcome {this.props.currentUser.username}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.welcomeMessage()}
            </div>
        )
    }
}

export default WelcomePage;