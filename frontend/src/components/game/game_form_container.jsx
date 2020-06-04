import { connect } from 'react-redux';
import { createGame } from '../../actions/game_actions';
import GameForm from "./game_form";
import {removeErrors} from "../../actions/game_actions";

const mSTP = state => ({
    state: state,
});

const mDTP = dispatch => ({
    createGame: (game) => dispatch(createGame(game)),
    removeErrors: () => dispatch(removeErrors()) 
});

export default connect(mSTP, mDTP)(GameForm);

