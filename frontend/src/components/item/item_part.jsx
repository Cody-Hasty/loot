import React from "react";

class Item extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const item = this.props.item;
        return(
            <div className="item-div">
                <h1>{item.name}</h1>
                {item.picture? <img src={item.picture}/> : "This Item had no picture"}
            </div>
        )
    }
    
}

export default Item;