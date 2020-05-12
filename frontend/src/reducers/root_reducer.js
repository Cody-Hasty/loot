import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
// import entitiesRecuder from './entities_reducer';

const RootReducer = combineReducers({
    // entities: entitiesRecuder,
    session: sessionReducer,
    errors: errorsReducer
});

export default RootReducer;