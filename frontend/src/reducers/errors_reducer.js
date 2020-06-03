import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import gameErrorReducer from "./games_errors_reducer";
import itemErrorReducer from "./items_errors_reducer";
import recipeErrorReducer from "./recipes_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    game: gameErrorReducer,
    item: itemErrorReducer,
    recipe: recipeErrorReducer
});

export default errorsReducer;