import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/item.svg";
class Item extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const item = this.props.item;
        console.log(item)
        return (
          <div className="item-div">
            <Link to={`/items/${item._id}`}>
            <h1> {item.name}</h1>
              {item.picture ? (
                <img className="item-image" src={item.picture}/>
                ) : (
                  <img className="item-image" src={image} /> 
              )}
            </Link>
          </div>
        );
    }
    
}

export default Item;