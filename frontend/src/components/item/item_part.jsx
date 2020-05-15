import React from "react";
import { Link } from "react-router-dom";

class Item extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const item = this.props.item;
        return (
          <div>
              <h1> {item.name}</h1>
            <Link to={`/items/${item._id}`}>
              {item.picture ? (
                <img src={item.picture} width="100px" />
              ) : (
                "This Item had no picture"
              )}
            </Link>
          </div>
        );
    }
    
}

export default Item;