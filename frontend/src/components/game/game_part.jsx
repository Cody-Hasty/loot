import React from "react";
import { Link } from "react-router-dom";

class Game extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const game = this.props.game;
    return (
      <div>
        {/* <h1>{game.title}</h1> */}
        <h1><Link to="/games/show">{game.title}</Link> </h1>
        {game.picture ? <img src={game.picture} /> : "This game had no picture"}
      </div>
    );
  }
}

export default Game;