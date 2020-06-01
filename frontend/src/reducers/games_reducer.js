import { RECEIVE_GAME, RECEIVE_GAMES } from "../actions/game_actions";

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GAME:
       newState = action.game;
      return newState;
    case RECEIVE_GAMES:
      // let newState = Object.assign({}, state);
      newState = action.games;
      return newState;
    default:
      return state;
  }
};

export default gamesReducer;
