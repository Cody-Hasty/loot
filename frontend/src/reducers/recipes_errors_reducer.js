import {
  RECEIVE_RECIPE_ERRORS,
  REMOVE_RECIPE_ERRORS,
} from "../actions/recipe_actions";

const recipeErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RECIPE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    case REMOVE_RECIPE_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return oldState;
  }
};

export default recipeErrorsReducer;
