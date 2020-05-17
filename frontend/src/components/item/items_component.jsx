import React from "react";
import Item from "./item_part";
import {Link} from "react-router-dom";

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state= this.props.getItems();
    }

    render(){
        const items = Object.values(this.props.items);
        // console.log(items);
        return (
          <div className="item-index">
              <ul>
                {items.map((item) => (
                  <li key={item._id}>
                    <Item item={item} />
                  </li>
                ))}
              </ul>
            <Link to="/items/new" className="loot-button">Add new Item</Link>
          </div>
        );
    }


}

export default Items

