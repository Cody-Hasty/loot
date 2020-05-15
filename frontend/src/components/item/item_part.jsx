import React from "react";
import { Link } from "react-router-dom";

class Item extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const item = this.props.item;
        return (
          <div className="item-div">
            <Link to={`/items/${item._id}`}>
            <h1> {item.name}</h1>
              {item.picture ? (
                <img src={item.picture}/>
                ) : (
                "This Item had no picture"
              )}
            </Link>
          </div>
        );
    }
    
}

export default Item;