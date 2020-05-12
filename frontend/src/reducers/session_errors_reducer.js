import {
    RECEIVE_USER_SIGN_IN,
    RECEIVE_SESSION_ERRORS,
    REMOVE_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, oldState, { errors: action.errors });
        case RECEIVE_USER_SIGN_IN:
            return Object.assign({}, oldState, { errors: [] });
        case REMOVE_ERRORS:
            return Object.assign({}, oldState, { errors: [] });
        default:
            return oldState;
    }
}

export default sessionErrorsReducer