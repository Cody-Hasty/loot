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
    );
  }
}

export default Game;