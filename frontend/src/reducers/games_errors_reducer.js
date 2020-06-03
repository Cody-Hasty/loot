import {
  RECEIVE_GAME_ERRORS,
  REMOVE_GAME_ERRORS,
} from "../actions/game_actions";

const gameErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_GAME_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    case REMOVE_GAME_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return oldState;
  }
};

export default gameErrorsReducer;
