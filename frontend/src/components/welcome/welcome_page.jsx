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
                <div className="title-div">
                    <h1 className="website-title glow">LOOT</h1>
                </div>
                <p className="missing-user">There is no current user</p>
            </div>
        )
    }
}

export default WelcomePage;