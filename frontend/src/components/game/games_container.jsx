import { connect } from "react-redux";
import { getGames } from "../../actions/game_actions";
import Games from "./games_component";


const mSTP = ({ entities }) => ({
  games: entities.games,
});

const mDTP = (dispatch) => ({
  getGames: () => dispatch(getGames())
});

export default connect(mSTP, mDTP)(Games);
