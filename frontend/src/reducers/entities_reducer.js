import { combineReducers } from 'redux';
import itemsReducer from "./items_reducer";
import recipesReducer from './recipes_reducer';


const entitiesReducer = combineReducers({
    items: itemsReducer,
    recipes: recipesReducer
});

export default entitiesReducer;