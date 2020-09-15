import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/game.svg";


class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const game = this.props.game;
    return (
      <div>
        {/* <h1>{game.title}</h1> */}
        <Link to={`/games/${game._id}`}>
          <h1>{game.title}</h1>
          {game.picture ? <img className="list-picture" src={game.picture} /> : <img className="list-picture" src={image}/>}
        </Link> 
      </div>
    );
  }
}

export default Game;