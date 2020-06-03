import React from "react";
import ItemForm from "../item/item_form";
import ItemFormContainer from "../item/item_form_container";

// import Item from '../item/item_show_component';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.getGame(this.props.match.params.id);
    this.state["itemSubmit"] = false;
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }


  handleSubmitForm() {
    this.setState({["itemSubmit"]: true})
    
  }

  render() {
    
    const game = this.props.game 
    const {itemSubmit} = this.state;
    switch(itemSubmit) {
      case false:
        return(
          <>
          <div className="game-box">
            { game.picture ? <img src={game.picture} /> : <p>Game picture not found</p> }
            <h1> {game.title} </h1>
            <p> Description: { game.description } </p>
              {/* <ul>
            {game.items.map((item) => (
              <li key={item._id}>
                  <Item item={item} />
              </li>
            ))}
             </ul> */}
          <footer><p>Page started by: { game.user_id } on { game.date } </p></footer>
          </div>
             
          
          <div className="item-submit">
            <button className="item-form-button" onClick={ this.handleSubmitForm }> Create new item </button>
          </div>

          </>
        );
      case true:
        return <ItemFormContainer gameParent={ this.props.game.title } fromGameShow={ true } />
    };

  }
}

export default Game;