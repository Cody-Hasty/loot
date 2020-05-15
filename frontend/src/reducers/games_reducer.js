import { RECEIVE_GAME, RECEIVE_GAMES } from "../actions/game_actions";

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME:
      return Object.assign({}, state, action.game);
    case RECEIVE_GAMES:
      return Object.assign({}, state, action.games);
    default:
      return state;
  }
};

export default gamesReducer;
