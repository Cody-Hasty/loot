import { RECEIVE_RECIPE, RECEIVE_RECIPES } from "../actions/recipe_actions";

const recipesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RECIPE:
            let nextState = Object.assign({}, oldState);
            nextState.entities.recipes[action.recipe.id] = action.recipe;
            return nextState;
        case RECEIVE_RECIPES:
            // let nextState2 = Object.assign({}, oldState);
            // nextState2.entities['recipes'] = action.recipes;
            return Object.assign({}, oldState, action.recipes);
        default:
            return oldState;
    }
}

export default recipesReducer;