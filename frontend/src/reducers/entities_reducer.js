import { combineReducers } from 'redux';
import itemsReducer from "./items_reducer";
import recipesReducer from './recipes_reducer';
import gamesReducer from "./games_reducer";

const entitiesReducer = combineReducers({
    items: itemsReducer,
    recipes: recipesReducer,
    games: gamesReducer
});

export default entitiesReducer;