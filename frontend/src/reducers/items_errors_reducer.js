import {
  RECEIVE_ITEM_ERRORS,
  REMOVE_ITEM_ERRORS,
} from "../actions/item_actions";

const itemErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ITEM_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    case REMOVE_ITEM_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return oldState;
  }
};

export default itemErrorsReducer;
