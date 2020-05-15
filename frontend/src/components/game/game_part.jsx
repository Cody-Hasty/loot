import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const game = this.props.game;
    return (
      <div>
        <h1>{game.title}</h1>
        {game.picture ? <img src={game.picture} /> : "This game had no picture"}
      </div>
    );
  }
}

export default Game;
