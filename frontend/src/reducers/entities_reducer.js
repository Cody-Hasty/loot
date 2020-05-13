import { combineReducers } from 'redux';
import itemsReducer from "./items_reducer";


const entitiesReducer = combineReducers({
    items: itemsReducer
});

export default entitiesReducer;