import { connect } from 'react-redux';
import { getGame } from '../../actions/game_actions';
import Game from "./game_show_component";

const mSTP = state => ({
    game: state
});

const mDTP = dispatch => ({
    getGame: (gameId) => dispatch(getGame(gameId))
});

export default connect(mSTP, mDTP)(Game);