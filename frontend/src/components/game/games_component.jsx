import React from "react";
import Game from "./game_part.jsx";
import { Link } from "react-router-dom";

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.getGames();
  }

  render() {
    const games = Object.values(this.props.games);
    console.log(games);
    return (
      <div className="game-list">
        <ul>
          {games.map((game) => (
            <li key={game._id} className="game-box">
              <Game game={game} />
            </li>
          ))}
        </ul>
        <Link to="/games/new">Add A New Game!</Link>
      </div>
    );
  }
}

export default Games;
