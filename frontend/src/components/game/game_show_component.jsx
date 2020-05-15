import React from "react";
// import Item from '../item/item_show_component';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.getGame(this.props.match.params.id);
  }

  render() {
    const game = Object.values(this.state)  
    
    return (
      <div>
        { game.picture ? <img src={game.picture} /> : "Game picture not found" }
        <h1> {game.title} </h1>
        <p> Description: { game.description } </p>
        {/* <ul>
            {game.items.map((item) => (
              <li key={item._id}>
                  <Item item={item} />
              </li>
            ))}
        </ul> */}
        <footer>Page started by: { game.user_id } on { game.date } </footer>
        
      </div>
    );
  }
}

export default Game;