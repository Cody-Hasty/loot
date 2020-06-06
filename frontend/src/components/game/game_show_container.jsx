import { connect } from 'react-redux';
import { getGame } from '../../actions/game_actions';
import Game from "./game_show_component";
import {getItems} from "../../actions/item_actions"

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    getGame: (gameId) => dispatch(getGame(gameId)),
    getItems: () => dispatch(getItems())

});

export default connect(mSTP, mDTP)(Game);