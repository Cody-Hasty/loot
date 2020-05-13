import React from 'react';

const WelcomePage = (props) => {

    console.log(props)
    if (props.currentUser.id){
        return (
            <div>
                <p>Welcome {props.currentUser.id}</p>
                <button onClick={props.logout()}></button>
            </div>
        )
    }else{
        return(
            <div>
                There is no current user
            </div>
        )
    }
}

export default WelcomePage;