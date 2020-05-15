import { connect } from "react-redux";
import { getGames, getGame} from "../../actions/game_actions";
import Games from "./games_component";

const mSTP = ({ entities }) => ({
  games: entities.games,
});

const mDTP = (dispatch) => ({
  getGames: () => dispatch(getGames()),
  // getGame: (gameId) => dispatch(getGame(gameId)),
});

export default connect(mSTP, mDTP)(Games);
