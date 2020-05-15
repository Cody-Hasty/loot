import React from "react";
import Item from "./item_part";

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state= this.props.getItems();
    }

    render(){
        const items = Object.values(this.props.items);
        // console.log(items);
        return (
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                <Item item={item} />
              </li>
            ))}
          </ul>
        );
    }


}

export default Items

