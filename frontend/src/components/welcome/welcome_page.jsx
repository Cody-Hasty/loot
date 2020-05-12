import React from 'react';

const WelcomePage = (props) => {
    return (
        <div>
            <p>Welcome {this.props.currentUser.username}</p>
            <button onClick={this.props.logout()}></button>
        </div>
    )
}

export default WelcomePage;