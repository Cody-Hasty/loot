import React from "react";
import ItemForm from "../item/item_form";
import ItemFormContainer from "../item/item_form_container";
import image from "../../assets/angery.jpeg"



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.getGame(this.props.match.params.id);
    this.state["itemSubmit"] = false;
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
  }


  handleSubmitForm() {
    this.setState({["itemSubmit"]: true})
    
  }

  componentDidMount() {
    this.props.getItems().then(() => {
      const game = this.props.state.entities.games
      const items = this.props.state.entities.items
      if (items) {
        for (let key in items) {
          if (items[key].game_id === game._id) game.items.push(items[key])
        }
      }
    })
  }




  render() {
   
    
    const game = this.props.state.entities.games 
    const {itemSubmit} = this.state;
    switch(itemSubmit) {
      case false:
        return(
          <>
          <div className="game-box">
              {game.picture ? <img src={game.picture} /> : <img src={image} /> }
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
        return <ItemFormContainer gameParent={ game.title } gameParentID={ game._id} fromGameShow={ true } />
    };

  }
}

export default Game;