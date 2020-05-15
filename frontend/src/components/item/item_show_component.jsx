import React from "react";
import {Link} from "react-router-dom";

class ShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getItem(this.props.match.params.id);
    }

    render(){
        const item = this.props.item
        return(
            <div className="item-show">
                <h1>{item.name}</h1>
                <img src={item.picture}/>
                <p>{item.description}</p>
            </div>
        )
    }

}

export default ShowItem;

